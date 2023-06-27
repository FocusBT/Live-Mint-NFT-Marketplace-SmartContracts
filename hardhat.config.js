require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");
// require("dotenv").config({ path: ".env" });
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
      url: "https://bold-orbital-gas.ethereum-sepolia.discover.quiknode.pro/e8fce6401b498a84036e799cd15a645584802759/",
      accounts: [
        "8fe530fc5ea9fa6e49bb5b63ffbc5a979c7fda4de5992266804bc87c06478178",
      ],
    },
  },
  contracts_build_directory: "./build",
  etherscan: {
    apiKey: "5H7R7WB1HA6AHZJKCP6WW7PFNA6X5J15HC",
  },
};
