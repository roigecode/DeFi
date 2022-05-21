const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Counter.sol interactions", function () {

  it("Direct calling Counter", async function () {
    const Counter = await hre.ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();
    await counter.deployed();

    expect(await counter.count()).to.eq(0);
    await counter.increment();
    expect(await counter.count()).to.eq(1);
  });

  it("Indirect calling Counter.sol", async function () {
    const Counter = await hre.ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();
    await counter.deployed();

    const Interaction = await hre.ethers.getContractFactory("Interaction");
    const interaction = await Interaction.deploy();
    await interaction.deployed();

    const setAddress = await interaction.setCounterAddress(counter.address);
    await setAddress.wait()

    expect(await interaction.interacter_getCount()).to.eq(0);
    await counter.increment();
    expect(await interaction.interacter_getCount()).to.eq(1);
  });
});

describe("Mock.sol interactions", function () {

  it("Direct calling Mock", async function () {
    const Mock = await hre.ethers.getContractFactory("Mock");
    const mock = await Mock.deploy();
    await mock.deployed();

    expect(await mock.variable()).to.eq(0);
    await mock.setVar(20);
    expect(await mock.variable()).to.eq(20);
  });

  it("Indirect calling Mock.sol", async function () {
    const Mock = await hre.ethers.getContractFactory("Mock");
    const mock = await Mock.deploy();
    await mock.deployed();

    const Interaction = await hre.ethers.getContractFactory("Interaction");
    const interaction = await Interaction.deploy();
    await interaction.deployed();

    const setAddress = await interaction.setMockAddress(mock.address);
    await setAddress.wait()

    expect(await interaction.interacter_getVar()).to.eq(0);
    await interaction.interacter_setVar(20);
    expect(await interaction.interacter_getVar()).to.eq(20); 
  });
});
