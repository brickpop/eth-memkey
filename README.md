Memory Key tool
---

Memkey is a simple command line tool to ease the creation of Ethereum private and public keys that can rely on the owner's memory.

Use this tool if:

* You want to be able to recover your Ethereum Private Key by yourself
* Prefer to have a secret passphrase as the seed of your private key instead of random content
* Don't want to depend on third party wallets to handle your money
* Expect your computer's disk, smartphones, dongles, etc. not to last forever

## Installation
After you install NodeJS:

```bash
npm install -g memkey
```

## Usage

### Private Key

Generate a private key and public address from your passphrase:

```bash
$ memkey from "my hopefully long passphrase"
Ethereum Memory Key Tool

Passphrase:     my hopefully long passphrase
Private Key:    cb738ca99e9c5b646806227749c6623a0c576b9a7d7994aa5e5615c458d805f0
Public Address: 0x882458d0e7fb8a927983a64e9177fc0977604817
```

**Important**: Make sure that you will be able to remember this exact passphrase (or store the private key in a safe place otherwise).

**Important**: The passphrase **is case sensitive**.

### Public address

To get the public address from an Ethereum private key:

```bash
$ memkey addr cb738ca99e9c5b646806227749c6623a0c576b9a7d7994aa5e5615c458d805f0
Ethereum Memory Key Tool

Public Address: 0x882458d0e7fb8a927983a64e9177fc0977604817
```

As expected, given the private key we generated before, the public address is exactly the same as the one above.

## Future

In order to avoid versioning confusion and private key mismatch, any future release/algorithm of memkey will use a different package name (`memkey2`, `memkey3`, etc.) instead of forcing to manually install specific npm versions like `memkey@1.0.0`. 

No updates will break the current setup.

## Disclaimer

* Ethereum coins (Ether) represent a highly-volatile market (as of 2017). Operate at your own risk.
* This tool is intended for early adopters with a minimum level of tech skills. 
* The correct use of this tool and the keys generated with it is your own responsibility. 

## Credits

Jordi Moraleda