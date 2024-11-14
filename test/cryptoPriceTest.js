const CryptoPriceOracle = artifacts.require("CryptoPriceOracle");

contract("CryptoPriceOracle", (accounts) => {
    it("should return the latest price", async () => {
        const instance = await CryptoPriceOracle.deployed();
        const price = await instance.getLatestPrice();
        assert(price > 0, "Price should be greater than 0");
    });
});
