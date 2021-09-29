var Wallet = require('ethereumjs-wallet');
const wallet = Wallet.default.generate();
console.log("privateKey: " + wallet.getPrivateKeyString());
console.log("address: " + wallet.getAddressString());