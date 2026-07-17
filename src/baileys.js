'use strict';

const path = require('path');
const log = require('./logger');

/**
 * Crea un client WhatsApp basato su Baileys (senza browser) e lo espone con la
 * STESSA interfaccia del client OpenWA (sendText / simulateTyping / sendSeen /
 * checkNumberStatus / kill), cosi' il resto del programma non cambia.
 *
 * Supporta un proxy (IPRoyal ISP static o mobile) per far uscire la connessione
 * da un IP dedicato: FONDAMENTALE se il server e' un datacenter (AWS/Oracle),
 * altrimenti WhatsApp banna in fretta l'IP.
 */
function creaClientBaileys(config) {
  return new Promise((resolve, reject) => {
    let makeWASocket, useMultiFileAuthState, DisconnectReason, Browsers, fetchLatestBaileysVersion;
    try {
      ({
        default: makeWASocket,
        useMultiFileAuthState,
        DisconnectReason,
        Browsers,
        fetchLatestBaileysVersion,
      } = require('@whiskeysockets/baileys'));
    } catch (e) {
      return reject(
        new Error('Manca la libreria @whiskeysockets/baileys. Esegui: npm install')
      );
    }

    const bcfg = config.baileys || {};
    const authDir = path.resolve(bcfg.cartellaSessione || './.baileys-auth');
    const proxyUrl = bcfg.proxyUrl || (config.proxy && config.proxy.url) || '';

    // Costruisce l'agente proxy in base al protocollo (http/https/socks).
    let agent;
    if (proxyUrl) {
      try {
        if (/^socks/i.test(proxyUrl)) {
          const { SocksProxyAgent } = require('socks-proxy-agent');
          agent = new SocksProxyAgent(proxyUrl);
        } else {
          const { HttpsProxyAgent } = require('https-proxy-agent');
          agent = new HttpsProxyAgent(proxyUrl);
        }
        log.info('Proxy attivo per la connessione WhatsApp.');
      } catch (e) {
        return reject(new Error('Proxy non valido o agente mancante: ' + e.message));
      }
    } else {
      log.warn(
        'ATTENZIONE: nessun proxy configurato (baileys.proxyUrl). Su un server ' +
          'datacenter (AWS/Oracle) rischi il ban immediato dell IP.'
      );
    }

    (async () => {
      const qrcode = require('qrcode-terminal');
      const { state, saveCreds } = await useMultiFileAuthState(authDir);
      let version;
      try {
        ({ version } = await fetchLatestBaileysVersion());
      } catch (_) {
        /* usa la versione di default della libreria */
      }

      const holder = { sock: null };
      let risolto = false;

      const avvia = () => {
        const sock = makeWASocket({
          version,
          auth: state,
          agent,
          fetchAgent: agent,
          browser: Browsers.appropriate('Chrome'),
          markOnlineOnConnect: false, // meno "da bot"
          syncFullHistory: false, // meno banda = proxy piu' economico
          printQRInTerminal: false,
        });
        holder.sock = sock;

        sock.ev.on('creds.update', saveCreds);
        sock.ev.on('connection.update', (u) => {
          if (u.qr) {
            log.info('Scansiona questo QR con WhatsApp (Dispositivi collegati):');
            qrcode.generate(u.qr, { small: true });
          }
          if (u.connection === 'open') {
            log.ok('Connessione WhatsApp aperta (Baileys).');
            if (!risolto) {
              risolto = true;
              resolve(adattatore(holder));
            }
          }
          if (u.connection === 'close') {
            const code = u.lastDisconnect && u.lastDisconnect.error
              && u.lastDisconnect.error.output && u.lastDisconnect.error.output.statusCode;
            if (code === DisconnectReason.loggedOut) {
              log.error('Sessione disconnessa (logout). Cancella la cartella ' + authDir + ' e riscansiona.');
              if (!risolto) {
                risolto = true;
                reject(new Error('WhatsApp logout'));
              }
            } else {
              log.warn('Connessione WhatsApp chiusa: riconnetto tra 5s...');
              setTimeout(avvia, 5000);
            }
          }
        });
      };

      avvia();
    })().catch(reject);
  });
}

/**
 * Adattatore: espone i metodi che il resto del programma si aspetta.
 * Usa 'holder.sock' cosi' dopo una riconnessione punta sempre al socket attuale.
 */
function adattatore(holder) {
  const toJid = (chatId) =>
    String(chatId).replace('@c.us', '@s.whatsapp.net');

  return {
    async sendText(chatId, testo) {
      await holder.sock.sendMessage(toJid(chatId), { text: testo });
    },
    async simulateTyping(chatId, attivo) {
      await holder.sock.sendPresenceUpdate(attivo ? 'composing' : 'paused', toJid(chatId));
    },
    async sendSeen() {
      // In un flusso di soli invii non c'e' un messaggio in arrivo da segnare
      // come letto: no-op su Baileys.
    },
    async checkNumberStatus(chatId) {
      const numero = toJid(chatId).split('@')[0];
      try {
        const res = await holder.sock.onWhatsApp(numero);
        const r = Array.isArray(res) ? res[0] : null;
        return { numberExists: r ? !!r.exists : undefined };
      } catch (e) {
        return { numberExists: undefined };
      }
    },
    async kill() {
      try {
        if (holder.sock) holder.sock.end();
      } catch (_) {
        /* ignora */
      }
    },
  };
}

module.exports = { creaClientBaileys };
