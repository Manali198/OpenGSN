import { ethers } from 'hardhat';

async function main(): Promise<void> {
  const [deployer] = await ethers.getSigners();

  console.log('Contract deployment using the account:', deployer.address);

  const MintToken = await ethers.getContractFactory('MintToken');
  const mintToken = await MintToken.deploy();

  await mintToken.waitForDeployment();

  console.log('MintToken contract address:', await mintToken.getAddress());

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });