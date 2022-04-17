// Make sure the FidelToken contract is included by requireing it.
const FidelToken = artifacts.require("FidelToken");

// This is an async function, it will accept the Deployer account, the network, and eventual accounts.
module.exports = async function (deployer, network, accounts) {
  // await while we deploy the FidelToken
  await deployer.deploy(FidelToken, "FidelToken", "FDL", 18, 5000000);
  const fidelToken = await FidelToken.deployed()

};