require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner neck fringe speak guard render remain slow imitate problem surround twelve'; 
let testAccounts = [
"0xb42820d71270f33236449ad28df0878858e50b3e7583425b22ae7c7909a6dd4a",
"0xb929a94e39e1c5bc4433097cd8052cc06e7129d48bdee706edb6614bff5b6ef8",
"0x6a6279f2f3ff2aa6c7bb0315c70ba16f385d3828248f92a332e4f032e20a73cb",
"0x0024e3aada60e9f3ce9e857d41ae51952825eb8587fa5c1eb05f44a90fd5672f",
"0x2179f627ed87cb1e85ece965b9713a6fd96cbc61ff2689228d5195b952ee2bd1",
"0x768abb592f6c15bc8b2c65ac89e45c685a326f71e8f70ed1612cdb5d9dcd4493",
"0xe3d69aaa55c9b0c1b0fa2961fb391dca22f614ed19f27f00f88b40b2564e5429",
"0x1f8250263216875c1fe2a6995ec10f62b01f7e6036607c68f494cd41c3442665",
"0x9d34ebec4f3affe96fcbcf6b5e17ff363bb207a1160c91daa6ae2090059014b9",
"0x3d8c47d987c73fbccaf77d5c51d1e36a2ee9a0c4bdeb41daa2834ee01c415e70"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

