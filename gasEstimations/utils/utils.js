require('dotenv').config()
const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider(`https://eth-goerli.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`);

function truncateAddress(addr) {
    let first = addr.substr(0,5);
    let last = addr.substr(addr.length-3);
    let str = first + "..." + last;
    return str;
}

async function getBalance(addr) {
    const balance = await provider.getBalance(addr)
    const ammount =  ethers.utils.formatEther(balance)
    console.log(`Balance of ${truncateAddress(addr)} | ${parseFloat(ammount)} ETH`)
    return parseFloat(ammount)
}

async function getMyBalance(){
    return getBalance(process.env.MY_ADDRESS)
}

function getFunctionHashFromName(functionName){
    const hash = ethers.utils.keccak256(ethers.utils.toUtf8Bytes(functionName))
    console.log(hash.substring(0,10))
    return hash.substring(0,10)
}

module.exports = {truncateAddress, getBalance, getMyBalance, getFunctionHashFromName}