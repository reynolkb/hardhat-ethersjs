// scripts/index.js
async function main () {
  // Retrieve accounts from the local node
  // const accounts = await ethers.provider.listAccounts();
  // console.log(accounts);

  // Set up an ethers contract, representing our deployed Box instance
  const address = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
  // In order to interact with the Box contract, we need to use an ethers contract instance
  // An ethers contract instance represents our contract on the blockchain
  const Box = await ethers.getContractFactory('Box');
  // To attach it to our deployed contract we need to provide the contract address
  const box = await Box.attach(address);

  // Call the retrieve() function of the deployed Box contract
  const value = await box.retrieve();
  console.log('Box value is', value.toString());

  // Send a transaction to store() a new value in the Box
  await box.store(42);

  // Call the retrieve() function of the deployed Box contract
  const newValue = await box.retrieve();
  console.log('Box new value is', newValue.toString());
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });