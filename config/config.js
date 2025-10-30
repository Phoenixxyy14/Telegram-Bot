require("dotenv").config();

const config = {
  rpcUrl: process.env.SEPOLIA_RPC_URL,
  privateKey: process.env.WALLET_PRIVATE_KEY,
  faucetAmount: process.env.FAUCET_AMOUNT || "0.01",
  minBalanceAlert: process.env.MIN_BALANCE_ALERT || "0.1",
  chainId: 11155111, // Sepolia chain ID
  networkName: "sepolia",
};

if (!config.rpcUrl) {
  throw new Error("RPC URL is not set in .env file");
}
if (!config.privateKey) {
  throw new Error("Private key is not set in .env file");
}

module.exports = config;
