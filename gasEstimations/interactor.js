
const { ethers } = require("ethers");
require('dotenv').config()
const {truncateAddress, getBalance, getMyBalance, getFunctionHashFromName} = require("./utils/utils")
const SimpleStorage_ABI = require("./abis/SimpleStorage.json");

const provider = new ethers.providers.JsonRpcProvider(`https://eth-goerli.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`);
const contractAddress = '0xd0967334F67f0a587974eD3178b8EEa8B5dc47E5'
const contract = new ethers.Contract(contractAddress, SimpleStorage_ABI, provider)
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider)

const contractWithWallet = contract.connect(wallet)

async function gasEstimation(functionName){
    const gasPrice = await provider.getGasPrice()
    const gasUnits = await contract.estimateGas.setValue(100)
    const transactionFees = gasPrice.mul(gasUnits);
    const feesInEth = ethers.utils.formatEther(transactionFees)

    console.log(`Transaction Fee Estimate: ${feesInEth} ETH`)
    return feesInEth
}

const getValue = async () => {
    const value = await contract.getValue()
    console.log(`\nReading from ${truncateAddress(contractAddress)}`)
    console.log(`Value: ${value}\n`)
}

const setValue = async () => {
    const tx = await contractWithWallet.setValue(100)
    await tx.wait()
    console.log(tx)
}

const fullProcess = async () => {
    const balancePre = await getMyBalance()
    await getValue()

    const gasEstimate = await gasEstimation()
    await setValue()

    const balancePost = await getMyBalance()
    await getValue()

    const gasCost = balancePre - balancePost
    const absError = Math.abs(gasEstimate - gasCost)
    const relError = Math.abs(absError/gasCost) * 100

    console.log(`
    Balance_pre:  ${balancePre}
    Balance_post: ${balancePost}
    Gas Cost:     ${gasCost}
    Estimate:     ${gasEstimate}
    Abs Error:    ${absError}
    Rel Error:    ${relError.toFixed(2)}%`)
}

/*
Balance_pre:  17.610135680887115 
Balance_post: 17.610062852984562

Gas Cost:     0.00007282790255302984 
Estimate:     0.000044851385530616

Abs Error:    0.000027976517022413846

// Different runs:
Rel Error:    38.41%
Rel Error:    37.32%
Rel Error:    47.34%
Rel Error:    38.36%
Rel Error:    42.77%
Rel Error:    41.82%
Rel Error:    39.90%
*/

fullProcess()