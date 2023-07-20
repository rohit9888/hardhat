require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()
require("@nomicfoundation/hardhat-verify");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: { compilers: [{ version: "0.8.1", },{ version: "0.8.19", }, { version: "0.8.0", }, { version: "0.6.0", }, { version: "0.7.0", settings: {}, }], },
};
const SEPOLIA_PRIVATE_KEY = process.env.privateKey;
const infuraKey = process.env.infuraKey

module.exports = {
  // ...rest of your config...
  solidity: { compilers: [{ version: "0.8.1", },{ version: "0.8.19", }, { version: "0.8.0", }, { version: "0.8.17", }, { version: "0.7.0", settings: {}, }], },

  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${infuraKey}`,
      accounts: [SEPOLIA_PRIVATE_KEY],
    },
  },
    etherscan: {
      // Your API key for Etherscan
      // Obtain one at https://etherscan.io/
      apiKey: "XXI1DD6VDWK611BNV7Q7DRR9HE6ANJD4V9"
    
  },
};