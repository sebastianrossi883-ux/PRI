'use strict';

function timestamp() {
  return new Date().toLocaleString('it-IT', { hour12: false });
}

function log(livello, ...args) {
  // eslint-disable-next-line no-console
  console.log(`[${timestamp()}] [${livello}]`, ...args);
}

module.exports = {
  info: (...a) => log('INFO', ...a),
  warn: (...a) => log('WARN', ...a),
  error: (...a) => log('ERRORE', ...a),
  ok: (...a) => log('OK', ...a),
};
