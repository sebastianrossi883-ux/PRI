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
function creaClientBaileys(config, account = {}) {
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
    // I parametri dell'account (multi-numero) hanno la precedenza su quelli globali.
    const authDir = path.resolve(
      account.cartellaSessione || bcfg.cartellaSessione || './.baileys-auth'
    );
    const proxyUrl =
      account.proxyUrl || bcfg.proxyUrl || (config.proxy && config.proxy.url) || '';
    // Callback opzionale per i messaggi in arrivo (Fase 4).
    const onMessaggio = account.onMessaggio;
    // Callback opzionali per mostrare QR e stato nel pannello web (Fase 5).
    const onQr = account.onQr;
    const onStato = account.onStato;
    const notificaStato = (s) => { try { if (onStato) onStato(s); } catch (_) {} };

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

        // Messaggi in ARRIVO. NON chiamiamo readMessages/sendReadReceipt:
        // cosi' il contatto NON vede le spunte blu (tu leggi, lui non lo sa).
        if (onMessaggio) {
          sock.ev.on('messages.upsert', async (evento) => {
            if (evento.type !== 'notify') return;
            for (const msg of evento.messages) {
              try {
                if (!msg.message || (msg.key && msg.key.fromMe)) continue;
                const jid = msg.key && msg.key.remoteJid;
                if (!jid || jid.endsWith('@g.us') || jid === 'status@broadcast') continue;
                // WhatsApp a volte usa un ID privacy "@lid" al posto del numero.
                // In quel caso il numero VERO arriva in un campo alternativo:
                // lo recuperiamo per mostrarlo e per abbinarlo ai clienti.
                const alt =
                  (msg.key && (msg.key.remoteJidAlt || msg.key.senderPn || msg.key.participantPn)) || '';
                const numero = jid.endsWith('@lid')
                  ? (alt ? alt.split('@')[0] : jid.split('@')[0])
                  : jid.split('@')[0];
                const testo = estraiTesto(msg.message);
                // 'jid' e' la chat esatta a cui rispondere (anche se e' un @lid).
                await onMessaggio({ numero, testo, jid, msg });
              } catch (e) {
                log.warn('Errore gestione messaggio in arrivo:', e.message);
              }
            }
          });
        }

        sock.ev.on('connection.update', (u) => {
          if (u.qr) {
            log.info('Scansiona questo QR con WhatsApp (Dispositivi collegati):');
            qrcode.generate(u.qr, { small: true });
            // Manda il QR al pannello web: lo scansioni dal telefono, senza PC.
            try { if (onQr) onQr(u.qr); } catch (_) {}
            notificaStato('qr');
          }
          if (u.connection === 'open') {
            log.ok('Connessione WhatsApp aperta (Baileys).');
            // Numero collegato: azzera il QR e segna "connesso" nel pannello.
            try { if (onQr) onQr(null); } catch (_) {}
            notificaStato('connesso');
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
              notificaStato('disconnesso');
              if (!risolto) {
                risolto = true;
                reject(new Error('WhatsApp logout'));
              }
            } else {
              // NON si arrende mai: riconnette da solo (auto-riconnessione).
              log.warn('Connessione WhatsApp chiusa: riconnetto tra 5s...');
              notificaStato('riconnessione');
              setTimeout(avvia, 5000);
            }
          }
        });
      };

      avvia();
    })().catch(reject);
  });
}

/** Estrae il testo da un messaggio Baileys (varie forme possibili). */
function estraiTesto(message) {
  if (!message) return '';
  return (
    message.conversation ||
    (message.extendedTextMessage && message.extendedTextMessage.text) ||
    (message.imageMessage && message.imageMessage.caption) ||
    (message.videoMessage && message.videoMessage.caption) ||
    (message.buttonsResponseMessage && message.buttonsResponseMessage.selectedDisplayText) ||
    (message.listResponseMessage &&
      message.listResponseMessage.title) ||
    ''
  );
}

/**
 * Adattatore: espone i metodi che il resto del programma si aspetta.
 * Usa 'holder.sock' cosi' dopo una riconnessione punta sempre al socket attuale.
 */
function adattatore(holder) {
  const toJid = (chatId) => {
    const s = String(chatId);
    // Se e' gia' un jid completo (@lid o @s.whatsapp.net) lo uso cosi' com'e':
    // per i contatti "privacy" (@lid) e' l'unico modo di rispondere alla chat giusta.
    if (s.includes('@')) return s.endsWith('@c.us') ? s.replace('@c.us', '@s.whatsapp.net') : s;
    return s + '@s.whatsapp.net';
  };

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
