const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1", // 本地链地址
      port: 8545,        // Ganache 的默认端口
      network_id: "*"    // 匹配任何网络ID
    },
    rinkeby: {
      provider: () => new HDWalletProvider(
          {
            mnemonic: {
              phrase: process.env.MNEMONIC
            },
            providerOrUrl: `https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`,
            pollingInterval: 10000 // 设定为 8 秒轮询一次
          }
      ),
      network_id: 4,    // Rinkeby 测试网ID
      gas: 5500000,     // 燃气限制
      confirmations: 2, // 确认交易数
      timeoutBlocks: 200,
      skipDryRun: true
    }
  },
  compilers: {
    solc: {
      version: "0.8.0" // Solidity 编译器版本
    }
  }
};
