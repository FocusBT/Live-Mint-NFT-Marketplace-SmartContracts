const hre = require("hardhat");

async function main() {
  const Contract = await hre.ethers.getContractFactory("Mintraribles");
  const Mintraribles = await Contract.deploy();
  await Mintraribles.deployed(); // Use the deployed() method instead of deployTransaction.wait()

  console.log("Mintraribles is deployed at", Mintraribles.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
