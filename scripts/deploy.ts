// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

const main = async () => {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const QueueConsumer = await ethers.getContractFactory("QueueConsumer");
  const queueConsumer = await QueueConsumer.deploy();

  // await queueConsumer.deployed();
  await queueConsumer.deployTransaction.wait(5);

  console.log("QueueConsumer deployed to:", queueConsumer.address);

  await hre.run("verify:verify", {
    network: "ropsten",
    contract: "contracts/QueueConsumer.sol:QueueConsumer",
    address: queueConsumer.address,
  });
};

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
