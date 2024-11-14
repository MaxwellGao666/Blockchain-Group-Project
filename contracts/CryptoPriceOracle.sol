// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./MockPriceOracle.sol"; // 引入模拟预言机合约

contract CryptoPriceOracle {
    MockPriceOracle internal priceFeed;

    // 定义价格更新的事件
    event PriceUpdated(
        uint80 roundID,
        int price,
        uint startedAt,
        uint timeStamp,
        uint80 answeredInRound
    );

    // 构造函数，初始化模拟预言机
    constructor(address _mockPriceOracle) {
        priceFeed = MockPriceOracle(_mockPriceOracle);
    }

    // 获取最新的价格，并触发事件
    function getLatestPrice() public returns (int) {
        (
            uint80 roundID,
            int price,
            uint startedAt,
            uint timeStamp,
            uint80 answeredInRound
        ) = priceFeed.latestRoundData();

        // 触发价格更新事件，记录价格相关信息
        emit PriceUpdated(roundID, price, startedAt, timeStamp, answeredInRound);

        return price;
    }
}
