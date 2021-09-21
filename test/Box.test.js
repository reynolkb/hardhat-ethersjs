const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Box", function () {
  // Test case
  it('retrieve returns a value previously stored', async function () {
    const Box = await ethers.getContractFactory('Box');
    const box = await Box.deploy();
    await box.deployed();

    // Store a value
    await box.store(51);

    // Test if the returned value is the same one
    // Note that we need to use strings to compare the 256 bit integers
    expect((await box.retrieve()).toString()).to.equal('51');
  });
});