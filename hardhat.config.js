/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("@nomiclabs/hardhat-truffle5");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-contract-sizer");
require("hardhat-deploy");
require("hardhat-gas-reporter");
require("@symblox/hardhat-abi-gen");

require("dotenv").config();
const pkey = process.env.PRIVATE_KEY || "your private key"

module.exports = {
  defaultNetwork: "hardhat",
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
      137: "0x33336f59E643032eD0a4405C19C1164B30722Aed",
      703: "0x4A4cF4741a96D8e0123a490cA720d84fD9b15bc4",
      3502: "0x4A4cF4741a96D8e0123a490cA720d84fD9b15bc4",
      80001: "0x4A4cF4741a96D8e0123a490cA720d84fD9b15bc4"
    },
    feeCollector: {
      default: 1,
    },
  },
  networks: {
    "bsc-testnet": {
      url: process.env.BSC_TESTNET_RPC,
      chainId: 97,
      accounts: { mnemonic: process.env.MNEMONIC },
      live: true,
      saveDeployments: true,
    },
    tch: {
      url: 'https://rpc.tch.dev',
      chainId: 703,
      accounts: [`0x${pkey}`],
      live: true,
      saveDeployments: true,
    },
    "jfin-test": {
      url: 'https://rpc.testnet.jfinchain.com/',
      chainId: 3502,
      accounts: [`0x${pkey}`],
      live: true,
      saveDeployments: true,
    },    
    matic: {
      url: "https://polygon-mainnet.infura.io/v3/7ce1c727816c43f69ecec6155799897f",
      chainId: 137,
      accounts: [`0x${pkey}`],
      gasPrice: 180000000000,
      live: true,
      saveDeployments: true
    },
    bsc: {
      url: process.env.BSC_RPC,
      chainId: 56,
      accounts: { mnemonic: process.env.MNEMONIC },
      live: true,
      saveDeployments: true,
      tags: ["production"],
    },
  },
  contractSizer: {
    alphaSort: true,
    runOnCompile: true,
    disambiguatePaths: false,
  },
  etherscan: {
    apiKey: process.env.BSCSCAN_API_KEY,
  },
  abiExporter: {
    path: "./abis",
    clear: true,
    flat: true,
    only: [":ERC721Governance$"],
    spacing: 2,
    pretty: true,
  },
};
