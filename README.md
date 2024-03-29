# SMART CONTRACTS

## EREBRUS
We are trying to implement a Utility NFT where subscription, royalty for the creator, and rental facilities are available, the NFT will be disclosed on the closing date.
Utility non-fungible tokens (NFTs) are digital assets that represent a right or access to a service or product. They are similar to traditional NFTs in that they are unique and cannot be exchanged for other tokens on a one-to-one basis, but they differ in that they have a specific use beyond being a collectible or piece of artwork.

## **POLYGON MUMBAI NETWORK**

Erebrus deployed to: `0x0bB82D21c80B6b24cB94dbD505AC72612fc7077D`

```
https://mumbai.polygonscan.com/address/0x0bB82D21c80B6b24cB94dbD505AC72612fc7077D#code
```


## **FILECOIN CALIBERATION NETWORK**

Erebrus deployed to: `t410f7mzdux3p7wmcz4newcfye23cyb5osfrapzetzna`

```
https://calibration.filfox.info/en/address/t410f7mzdux3p7wmcz4newcfye23cyb5osfrapzetzna
```



## SOTREUS

Introducing our groundbreaking Utility NFT, the ultimate solution for online privacy and security. We have developed a Dedicated VPN with a cutting-edge DNS-based firewall that goes beyond traditional ad-blocking, providing comprehensive protection against unwanted ads, trackers, and malware.

Our Dedicated VPN establishes a secure and encrypted connection, safeguarding your online activities from prying eyes and potential threats. It ensures that your data remains confidential and protected, even when connected to public Wi-Fi networks. With servers strategically located around the globe, you can enjoy seamless and high-speed browsing, without compromising on security.


Sotreus deployed to: `0x71ae4062941491F6dcB64EF8653b7F85eED9D6e6`

## **POLYGON MUMBAI NETWORK**

```
https://mumbai.polygonscan.com/address/0x71ae4062941491F6dcB64EF8653b7F85eED9D6e6#code
```

# Getting Started

## Requirements

- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
  - You'll know you did it right if you can run `git --version` and you see a response like `git version x.x.x`
- [Nodejs](https://nodejs.org/en/)
  - You'll know you've installed nodejs right if you can run:
    - `node --version` and get an output like: `vx.x.x`
- [Yarn](https://yarnpkg.com/getting-started/install) instead of `npm`
  - You'll know you've installed yarn right if you can run:
    - `yarn --version` and get an output like: `x.x.x`
    - You might need to [install it with `npm`](https://classic.yarnpkg.com/lang/en/docs/install/) or `corepack`

## Quickstart

```
git clone https://github.com/soumalya340/erebrus-contracts
cd erebrus-contracts
yarn
yarn hardhat
```

# Usage

Deploy:

```
npx hardhat run scripts/deploy.js
```

## Testing

```
npx hardhat test
```

### Test Coverage

```
npx hardhat coverage
```

## Estimate gas

You can estimate how much gas things cost by running:

```
npx hardhat test
```

And you'll see and output file called `gas-report.txt`

## **Deployment**

***HARDHAT NETWORK***

If you'd like to run your own local hardhat network, you can run:

```
npx hardhat node
```

And then **in a different terminal** 
For Erebrus

```
npx hardhat run scripts/erebrus-deploy.js --network localhost
```
For Sortreus  
               
```
npx hardhat run scripts/sotreus-deploy.js --network localhost

```
And you should see transactions happen in your terminal that is running `npx hardhat node`

***MUMBAI NETWORK***

If you'd like to run in Mumbai Network, you can run:
And then **in a different terminal** 

*Erebrus*
```
npx erebrus-deploy --network maticmum
```
*Sotreus*
               
```
npx sotreus-deploy --network maticmum
```

***CALIBARATION NETWORK [FILECOIN TESTNET]***

If you'd like to run in Mumbai Network, you can run:
And then **in a different terminal** 

*Erebrus*
```
npx erebrus-deploy --network calibarationnet
```
*Sotreus*
               
```
npx sotreus-deploy --network calibarationnet
```

### Important localhost note

If you use metamask with a local network, everytime you shut down your node, you'll need to reset your account. Settings -> Advanced -> Reset account. Don't do this with a metamask you have real funds in. And maybe don't do this if you're a little confused by this. 

## Deployment to a testnet or mainnet

1. Setup environment variables

You'll want to set your `GOERLI_RPC_URL` and `PRIVATE_KEY` as environment variables. You can add them to a `.env` file, similar to what you see in `.env.example`.

- `PRIVATE_KEY`: The private key of your account (like from [metamask](https://metamask.io/)). **NOTE:** FOR DEVELOPMENT, PLEASE USE A KEY THAT DOESN'T HAVE ANY REAL FUNDS ASSOCIATED WITH IT.
  - You can [learn how to export it here](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-Export-an-Account-Private-Key).
- `GOERLI_RPC_URL`: This is url of the goerli testnet node you're working with. You can get setup with one for free from [Alchemy](https://alchemy.com/?a=673c802981)

2. Get testnet ETH

Head over to [faucets.chain.link](https://faucets.chain.link/) and get some tesnet ETH. You should see the ETH show up in your metamask.

3. Deploy

```
=======
npx hardhat run scripts/deploy.js --network maticmum
>>>>>>> (goerli update)
```

### Verify on etherscan

If you deploy to a testnet or mainnet, you can verify it if you get an [API Key](https://etherscan.io/myapikey) from Etherscan and set it as an environment variable named `ETHERSCAN_API_KEY`. You can pop it into your `.env` file as seen in the `.env.example`.


However, you can manual verify with:

```
npx hardhat verify --constructor-args arguments.js DEPLOYED_CONTRACT_ADDRESS
```

# Linting

To check linting / code formatting:
```
yarn lint
```
or, to fix: 
```
yarn lint:fix
```

# Thank you!

