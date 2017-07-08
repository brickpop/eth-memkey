#!/usr/bin/env node

const { passphraseToPrivateKey, privateKeyToAddress } = require("./lib");

require("yargs")
  .command({
    command: "key-from <passphrase>",
    aliases: ["from"],
    desc: "Generate an Ethereum private key from a passphrase",
    handler: makePrivateKey
  })
  .command({
    command: "address-from <privKey>",
    aliases: ["address", "addr"],
    desc: "Get the public address from an Ethereum private key",
    handler: makeAddress
  })
  .demandCommand()
  .help()
  .wrap(80).argv;

function makePrivateKey(argv) {
  const privKey = passphraseToPrivateKey(argv.passphrase);
  const address = privateKeyToAddress(privKey);

  const result = `Ethereum Memory Key Tool

Passphrase:     ${argv.passphrase}
Private Key:    ${privKey}
Public Address: ${address}`;

  console.log(result);
}

function makeAddress(argv) {
  const address = privateKeyToAddress(argv.privKey);

  const result = `Ethereum Memory Key Tool

Public Address: ${address}`;

  console.log(result);
}
