const HDWalletProvider = require("@truffle/hdwallet-provider");
require('dotenv').config()


module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*' // Match any network id
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider([process.env.PRIVATE_KEY], process.env.RPC_URL);
      },
      network_id: 3,
      gas: 5000000,
      skipDryRun: true,
      gasPrice: 20000000000
    }

   },
  compilers: {
    solc: {
      version: "^0.8.4"
    } 
  }
};