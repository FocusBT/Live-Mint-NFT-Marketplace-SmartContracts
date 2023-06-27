require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");
require("dotenv").config({ path: ".env" });
// require("@nomicfoundation/hardhat-verify");
const QUICKNODE_HTTP_URL = process.env.QUICKNODE_HTTP_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  // paths: {
  //   artifacts: "./src/Components/artifacts",
  // },
  settings: {
    optimizer: {
      enabled: true,
      runs: 200, // The number of runs the optimizer will perform
    },
  },
  solidity: "0.8.7",
  networks: {
    sepholia: {
      url: QUICKNODE_HTTP_URL,
      accounts: [PRIVATE_KEY],
    },
  },
  contracts_build_directory: "./build",
  etherscan: {
    apiKey: "5H7R7WB1HA6AHZJKCP6WW7PFNA6X5J15HC",
  },
};
