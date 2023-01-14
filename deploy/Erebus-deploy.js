const { network, ethers } = require("hardhat")
const { networkConfig, developmentChains } = require("../helper-hardhat-config")
const { verify } = require("../utils/verify")
require("dotenv").config()

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const PublicValue = await ethers.utils.parseEther("1")
    const allowlistValue = await ethers.utils.parseEther("0.01")
    log("----------------------------------------------------")
    log("Deploying Erebrus and waiting for confirmations...")
    const Erebrus = await deploy("Erebrus", {
        from: deployer,
        args: ["https://github.com/", PublicValue, allowlistValue],
        log: true,
        // we need to wait if on a live network so we can verify properly
        waitConfirmations: network.config.blockConfirmations || 1
    })
    log(`Erebrus Nft deployed at ${Erebrus.address}`)

    if (
        !developmentChains.includes(network.name) &&
        process.env.ETHERSCAN_API_KEY
    ) {
        await verify(Erebrus.address, ["THE URL", PublicValue, allowlistValue])
    }
}

module.exports.tags = ["all"]