require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area fringe speak guard render remember unusual hover clock oil ten'; 
let testAccounts = [
"0x578fc0e1b05720f0874eff61c619cac1d30c1dadfc2dd5353164cacb0890375b",
"0xe70fb4cc98da0eb3bda2f1c1f0ce14cf47b4c374901ac7a4db3396f8c638ac65",
"0x4e5210bd004a2d560fb5aa459c2dcacbe802abe23000bfb9183faa4c42ee6133",
"0xcc128a0db8ef1a8264321a201c7d0e4bf89ecd1b851b707fb78d4717a84f0ed6",
"0x2db7abd27181f9c3f0b8527ddbf4154c9ee38cb8679b0d9e977c04f28953867c",
"0x41febc05cad0da92a0535460a89f509f8ee0249def505450d8dac56100bc076b",
"0x57d004cf8c3dbfffedb5bb8556ee0ec175596a8263b728ce5c04d6ae3d8c542b",
"0xa405eaf894f009757f042a961c2986c2ea14f9fe8e3c8ec0bfeff6baee1b0c78",
"0xee4249f67253b50bf76bc7f66064a046aaebb03f53121503caae27d1db0b1d8e",
"0xc28f6581815b27cd128cc74086387cb81ad3cdaf75e8d5a4e7f4cd56f465aaf1"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
