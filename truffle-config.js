require('babel-register');
require('babel-polyfill');


const HDWalletProvider = require("truffle-hdwallet-provider");

const mnemonic = "solid giraffe crowd become skin deliver screen receive balcony ask manual current";

const mypk = ["7804B2AD10B7EF7200678B2EA42C78B4A66DF5FB264A4867C38C859DD5DA38DC"];

module.exports = {
    networks: {
        development: {
            host: "localhost",
            port: 9545,
            network_id: "*",
            // a lot of gas for testing
            // gas: "7000000",
            // gasPrice: "4000000000"
        },
        "ganache-cli": {
            host: "localhost",
            port: 8545,
            network_id: "*",
            gas: "6721975",
            gasPrice: "10000000"
        },
        "ganache-gui": {
            host: "localhost",
            port: 7545,
            network_id: "5777",
            gas: "6721975",
            gasPrice: "20000000000",
            provider: function () { }
        },
	   "docker": {
            host: "bootstrap",
            port: 8545,
            network_id: "*",
            from: "0x010e49e47cbb34e67c072702ed6f4d8b273f751f"// must be first account in accounts[] array inside tests
    	},
        "docker-local": {
            host: "127.0.0.1",
            port: 8545,
            network_id: "*",
            from: "0x010e49e47cbb34e67c072702ed6f4d8b273f751f"// must be first account in accounts[] array inside tests
        },

        "kovan": {
            provider: new HDWalletProvider(mnemonic, "https://kovan.infura.io"),
            gas: "6238278",
            gasPrice: "8000000000",
            network_id: "*"
        },

       "kovan_test": {
            provider: () => new HDWalletProvider(mypk, "https://kovan.infura.io/8PB8Cnu6sYpZu5VVtEDl", 0, 1),
            gas: "6238278",
            gasPrice: "5000000000",
            network_id: "*",
            skipDryRun: true
       }
    }
};
