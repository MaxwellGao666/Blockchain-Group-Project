// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MockPriceOracle {
    int private price;

    // 构造函数，设置初始价格
    constructor(int _initialPrice) {
        price = _initialPrice;
    }

    // 模拟 Chainlink 的 latestRoundData 函数，只返回价格
    function latestRoundData() public view returns (
        uint80 roundID,
        int answer,
        uint startedAt,
        uint updatedAt,
        uint80 answeredInRound
    ) {
        // 模拟返回的链上数据
        return (1, price, block.timestamp, block.timestamp, 1);
    }

    // 手动更新价格
    function setPrice(int _newPrice) public {
        price = _newPrice;
    }
}
