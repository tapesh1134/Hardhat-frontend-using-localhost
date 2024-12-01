require("@nomicfoundation/hardhat-toolbox");

require("./tasks/faucet");

module.exports = {
  solidity: "0.8.19", // Use the Solidity version matching your contract
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545", // Hardhat Network default
    },
  },
};