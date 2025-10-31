const { ethers } = require("ethers");
const config = require("../config/config");

class BlockchainService {
  constructor() {
    //Connecting to Sepolia
    this.provider = new ethers.JsonRpcProvider(config.rpcUrl);

    this.wallet = new ethers.Wallet(config.privateKey, this.provider);

    this.faucetAmount = ethers.parseEther(config.faucetAmount);
    this.minBalanceAlert = ethers.parseEther(config.minBalanceAlert);
  }
}
