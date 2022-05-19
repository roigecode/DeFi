const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Interaction", function () {
  it("Direct calling Counter:", async function () {
    const Counter = await hre.ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();
    await counter.deployed();

    const Interaction = await hre.ethers.getContractFactory("Interaction");
    const interaction = await Interaction.deploy();
    await interaction.deployed();

    const setAddress = await interaction.setCounterAddr(counter.address);
    await setAddress.wait()

    expect(await counter.count()).to.eq(0);
    await counter.increment();
    expect(await counter.count()).to.eq(1);
  });

  it("Indirect calling Counter with Interaction:", async function () {
    const Counter = await hre.ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();
    await counter.deployed();

    const Interaction = await hre.ethers.getContractFactory("Interaction");
    const interaction = await Interaction.deploy();
    await interaction.deployed();

    const setAddress = await interaction.setCounterAddr(counter.address);
    await setAddress.wait()

    expect(await interaction.getCount()).to.equal(0);
    await counter.increment();
    expect(await interaction.getCount()).to.equal(1);

  });
});
