async function main() {
    const [deployer] = await ethers.getSigners();
    const deployerAddress = await deployer.getAddress();
  
    console.log("Deploying contracts with account:", deployerAddress);
  
    const balance = await ethers.provider.getBalance(deployerAddress);
    console.log("Account balance:", balance.toString());
  
    // Deploy the Token contract
    const Token = await ethers.getContractFactory("Token");
  
    console.log("Deploying Token contract...");
    const token = await Token.deploy(); // Deploy the contract
  
    // Wait for the transaction to be mined
    const deploymentTx = await token.deploymentTransaction();
    if (!deploymentTx) {
      console.error("Failed to fetch deployment transaction.");
      return;
    }
  
    console.log("Waiting for the contract to be mined...");
    const receipt = await deploymentTx.wait(); // Wait for mining confirmation
  
    console.log("Token deployed at:", token.target); // Contract address
    console.log("Transaction Hash:", deploymentTx.hash); // Transaction hash
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error("Error during deployment:", error);
      process.exit(1);
    });
  