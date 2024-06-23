# StakeFlow DApp

A full stack Starknet Dapp with functionalities that allows staking of ERC20 tokens deployed to Starknet and getting a reward for the staked token after a period of time.

The project has three tokens to interact with:

1. `SFTERC20TOKEN`: ERC20 Token that users can use to interact with the project.
2. `ReceiptToken`: ERC20 Token that users gets as a receipt for staking the `SFTERC20TOKEN`. This token has no intrisic value and can only be used to withdraw the `SWFERC20TOKEN` after the staking period has elapsed.
3. `RewardToken`: ERC20 token that users get as a reward for staking `SFTERC20TOKEN` after a specific period of time.

## How It Works

1. User stakes a specific amount of `SFTERC20TOKEN` into the contract.
    - The contract sends the equivalent of `ReceiptToken` into the user's wallet as a receipt for staking `SFTERC20TOKEN`.
    - The staked token is locked in the contract for period of time.
    - Within this period which the token is locked, the user cannot withdraw the staked token unless the locked period is over.
    - The user can still stake more tokens within this locked period.
    - If at anytime during the locked period, the user stakes more token, the locked period is reset.
2. After the locked period is over, the user is then allowed to withdraw their staked `SFTERC20TOKEN`.
3. After withdrawal of `SFTERC20TOKEN`, the user is rewarded with `RewardToken` that is directly propotional to the amount of `SFTERC20TOKEN` token staked.

## Project and contract URLs

https://docs.google.com/presentation/d/1_ub6KTpOswbOtWQky7NVKuXNKMmNl8UB/edit?usp=sharing&ouid=116692451666417119294&rtpof=true&sd=true

https://stake-flow.vercel.app/

https://youtu.be/PDnXlCHkO1Q

https://sepolia.voyager.online/contract/0x05acb1fb1f2248966ebf01e7a800d19736af8ab4b860227849d85209c894eed8

https://sepolia.voyager.online/contract/0x02a5eaf135031ecad3ad538ef5c965d84954ecb3384dbcff21786200bf68a234

https://sepolia.voyager.online/contract/0x025354142f8bed84d1d2d3b29326fb40c9f02a01d51b2bac9632f9f2f5aa31f2

https://sepolia.voyager.online/contract/0x075b55552992eea0bba7c15da130b06da80f8ba9d7021c4cd501af5d69267127

https://sepolia.voyager.online/contract/0x07e500e037b86842fc3cc194febbb86959c131e5509d72401fe99725087029f4


## Getting Started

1.

## File Structure

```
├── README.md
├── Scarb.lock
├── Scarb.toml
├── dapp
│   ├── README.md
│   ├── index.html
│   ├── node_modules
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.js
│   ├── prettier.config.cjs
│   ├── public
│   │   └── vite.svg
│   ├── src
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── assets
│   │   │   ├── bg.jpg
│   │   │   ├── completeLogo.png
│   │   │   ├── down-arrow.svg
│   │   │   ├── react.svg
│   │   │   ├── searchIcon.svg
│   │   │   ├── solanaLogo.png
│   │   │   └── walletIcon.svg
│   │   ├── helpers.js
│   │   ├── index.css
│   │   ├── main.jsx
│   │   ├── pages
│   │   │   ├── FaucetPage.jsx
│   │   │   └── PortfolioPage.jsx
│   │   ├── ui
│   │   │   ├── complex
│   │   │   │   ├── FaucetRequestModal.jsx
│   │   │   │   ├── RequestModalControl.jsx
│   │   │   │   └── StakeContainer.jsx
│   │   │   ├── components
│   │   │   │   ├── CryptoInput.jsx
│   │   │   │   ├── DataROw.jsx
│   │   │   │   ├── FaucetRequestContainer.jsx
│   │   │   │   ├── Logo.jsx
│   │   │   │   ├── Navbar.jsx
│   │   │   │   ├── NavigationLink.jsx
│   │   │   │   ├── NavigationLinks.jsx
│   │   │   │   ├── OverviewContainer.jsx
│   │   │   │   ├── PortfolioContainer.jsx
│   │   │   │   ├── RequestCompleteModal.jsx
│   │   │   │   ├── SelectTokenModal.jsx
│   │   │   │   ├── StepBadge.jsx
│   │   │   │   ├── WaitingForConfirmationModal.jsx
│   │   │   │   └── WalletConnector.jsx
│   │   │   └── layout
│   │   │       ├── AppLayout.jsx
│   │   │       ├── FlexContainer.jsx
│   │   │       └── index.js
│   │   └── utils
│   │       ├── bwc_abi.json
│   │       └── index.js
│   ├── tailwind.config.js
│   └── vite.config.js
├── data
│   └── constructor_args.txt
├── package-lock.json
├── package.json
├── src
│   ├── sft_erc20_token.cairo
│   ├── sft_staking_contract.cairo
│   ├── lib.cairo
│   ├── receipt_token.cairo
│   └── faucet.cairo
├── target
└── tests
    └── test_contract.cairo
```

## StakeFlow: A Web3 Staking dApp Proposal
### Overview
StakeFlow is a decentralized application (dApp) designed to provide a seamless and secure staking experience on the StarkNet blockchain. StakeFlow will enable users to stake their tokens, and earn rewards all through an intuitive and user-friendly interface.

## Key Features
### User-Friendly Dashboard:

Staking Overview: Display total staked tokens, current rewards, and estimated earnings.

Portfolio Management: Track staked tokens across different pools.

### Real-Time Rewards: Display real-time reward updates.
Compounding Options: Users can choose to auto-compound their rewards.

## Analytics and Reporting:

Performance Metrics: Detailed analytics on staking performance and historical data.

Exportable Reports: Users can export staking and reward reports for personal record-keeping.

## Integration and Interoperability:

Wallet Integration: Support for major wallets like MetaMask, WalletConnect, etc.

Interoperability: Cross-chain staking capabilities to support tokens from different blockchains.

## Deployment on StarkNet
### Smart Contract Development:

Develop staking and reward distribution contracts in Cairo, StarkNet's native programming language.

Utilize StarkNet's layer 2 scalability to ensure low gas fees and fast transaction times.

## Testing and Audits:

Conduct extensive testing on StarkNet's testnet to ensure robustness.

Perform security audits with reputable firms to identify and mitigate vulnerabilities.

## Frontend Integration:

Build a responsive frontend using React and integrate with StarkNet via the StarkNet.js library.

Ensure seamless user experience across desktop and mobile devices.
Deployment and Maintenance:

Deploy the smart contracts to StarkNet mainnet.

Establish a continuous integration/continuous deployment (CI/CD) pipeline for regular updates and maintenance.

### Conclusion
StakeFlow aims to revolutionize the staking experience by leveraging StarkNet’s scalability and security. With a focus on user experience, robust security features, and comprehensive analytics, StakeFlow will empower users to maximize their staking rewards and actively participate in governance.

<https://blastapi.io/public-api/starknet>

<https://starknet-sepolia.reddio.com/rpc/v0_7>

<https://starknet-sepolia.public.blastapi.io/rpc/v0_7>
