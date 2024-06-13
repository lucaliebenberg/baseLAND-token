require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",
  networks: {
    // hardhat: {
    //   chainId: 31337,
    // },
    // polygon_amoy: {
    //   url: NEXT_PUBLIC_POLYGON_MUMBAI_RPC,
    //   accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
    // },
    base_mainnet: {
      url: "https://mainnet.base.org/",
      chainId: 8453,
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    }
  },
};
