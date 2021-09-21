// hardhat.config.js
// require('@nomiclabs/hardhat-ethers');
require("@nomiclabs/hardhat-waffle");
// add for etherscan
require("@nomiclabs/hardhat-etherscan");
// add for testnet
require('dotenv').config();
const { API_URL, PRIVATE_KEY } = process.env;

/**
* @type import('hardhat/config').HardhatUserConfig
*/

module.exports = {
  solidity: "0.8.0",
  // add for testnet
  networks: {
    // add for etherscan
    hardhat: {},
    // add for testnet
    rinkeby: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  },
  // add for etherscan
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  }
};
