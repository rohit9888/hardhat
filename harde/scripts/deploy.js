// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  

  // const stake = await hre.ethers.deployContract("Staking")
  const pbm = await hre.ethers.deployContract("PBMCoin", ["0xAA737Df2b2C4175205Af4644cb4e44d7b9CeE5D4"])
  await pbm.waitForDeployment();

  console.log(
   `contract deployed at ${pbm.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
//0x39699bC80f7b1790d408ACD014CE7a321824850b
//0x0744fbA129BB7f57dB59d92BC19Dd8383706d187