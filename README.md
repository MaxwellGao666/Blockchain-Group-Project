
# LinkChain - Crypto Price Oracle

LinkChain is a smart contract project designed to simulate a price oracle. It consists of two contracts:`CryptoPriceOracle` and  `MockPriceOracle`,which are used to simulate on-chain price data and provide event logging functionality. `MockPriceOracle` can be used in test environments, allowing for manual price setting and provision of simulated price data.
## Project Structure

- **contracts**:Contains the source code of the smart contracts.
  - `CryptoPriceOracle.sol`: The main contract responsible for fetching price data from an oracle and triggering price update events.
  - `MockPriceOracle.sol`: A simulated oracle contract that allows for setting and returning price data.
  
- **build**: Compiled contract files (automatically generated after compilation).
  
- **migrations**: Migration scripts for deploying the contracts.
  - `2_deploy_contracts.js`Migration file used to deploy both `MockPriceOracle` and `CryptoPriceOracle` contracts.
## Function Description

### CryptoPriceOracle.sol

- **Constructor function**: Initializes the contract, accepting an address of `MockPriceOracle` as a parameter.
- **getLatestPrice**: Calls the `latestRoundData` function of `MockPriceOracle` to obtain the latest price and triggers a `PriceUpdated` event to log the price information.

### MockPriceOracle.sol

- **Constructor function**: Takes an initial price.
- **latestRoundData**: Returns the current price information, simulating the return data format of the Chainlink oracle.
- **setPrice**: Allows for manual price setting, used for testing purposes.

## Environmental Requirements

- Node.js and npm
- Truffle development framework
- Ganache local blockchain simulator

## Installation and Deployment

### 1. Install Dependencies

Ensure [Node.js](https://nodejs.org/) and [Truffle](https://www.trufflesuite.com/truffle) Then, clone the project and install dependencies: 

```bash
npm install -g truffle
```

### 2. Start Local Blockchain

Use Ganache to start a local blockchain. You can use either Ganache CLI or the desktop version.
ganache-cli

```bash
ganache-cli
```

### 3. Compile Smart Contracts

Run the following command in the project root directory to compile the contracts:

```bash
truffle compile
```

### 4. Compile Smart Contracts

Run the following command in the project root directory to compile the contracts:

```bash
truffle migrate
```

This will use the script in `migrations/2_deploy_contracts.js` to deploy both `MockPriceOracle` and `CryptoPriceOracle` contracts.

## Usage

You can call methods within the contracts using the Truffle console or by writing test scripts.

### Example

1. Enter the Truffle console:
   ```bash
   truffle console
   ```

2. Get contract instances:
   ```javascript
   const cryptoPriceOracle = await CryptoPriceOracle.deployed();
   const mockPriceOracle = await MockPriceOracle.deployed();
   ```

3. Set a new price (through `MockPriceOracle`):
   ```javascript
   await mockPriceOracle.setPrice(1500); // set price to 1500
   ```

4. Get the latest price (through `CryptoPriceOracle`):
   ```javascript
   const price = await cryptoPriceOracle.getLatestPrice();
   console.log("Latest price:", price.toString());
   ```

## Testing

You can write JavaScript test files in the `test` folder to verify the correctness of the contracts.

1. **Write Test Files**: Create a `.js` file in the `test` folder and write your test code.
2. **Run Tests**：
   ```bash
   truffle test
   ```

## License

This project uses the MIT license. For details, please see the LICENSE file.

## Contributions

Issues, suggestions, and code contributions are welcome! Please read the contribution guidelines before starting to contribute.
