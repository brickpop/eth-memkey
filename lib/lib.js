const EthUtil = require("ethereumjs-util");
const crypto = require("crypto");
const Web3 = require("web3");
const web3 = new Web3();

function passphraseToPrivateKey(text) {
  if (typeof text != "string") text = String(text);
  return web3.sha3(digest(text)).substr(2);
}

function privateKeyToAddress(privateKey) {
  if (!privateKey) return "0x" + "0".repeat(40);
  return `0x${EthUtil.privateToAddress(hexToBytes(privateKey)).toString("hex")}`;
}

// utility

function digest(text) {
  return crypto.createHash("sha256").update(text).digest("hex");
}

function hexToBytes(hex) {
  if (!hex || !hex.length) return [];

  for (var bytes = [], c = 0; c < hex.length; c += 2)
    bytes.push(parseInt(hex.substr(c, 2), 16));
  return bytes;
}

module.exports = {
  passphraseToPrivateKey,
  privateKeyToAddress
};
