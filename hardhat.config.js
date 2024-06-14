require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.0",
      },
      {
        version: "0.8.20",
      },
    ],
  },
  networks: {
    base_mainnet: {
      url: "https://mainnet.base.org/",
      chainId: 8453,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  },
};
