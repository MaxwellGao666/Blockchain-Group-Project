const MockPriceOracle = artifacts.require("MockPriceOracle");
const CryptoPriceOracle = artifacts.require("CryptoPriceOracle");

module.exports = async function (deployer) {
    // 部署 MockPriceOracle，并设置初始价格 2000
    await deployer.deploy(MockPriceOracle, 2000);

    // 获取 MockPriceOracle 合约实例
    const mockOracleInstance = await MockPriceOracle.deployed();

    // 部署 CryptoPriceOracle，并传入 MockPriceOracle 的地址
    await deployer.deploy(CryptoPriceOracle, mockOracleInstance.address);
};
