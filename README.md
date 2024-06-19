# StakeFlow DApp

A full stack Starknet Dapp with functionalities that allows staking of ERC20 tokens deployed to Starknet and getting a reward for the staked token after a period of time.

The project has three tokens to interact with:

1. `BWCERC20TOKEN`: ERC20 Token that users can use to interact with the project.
2. `ReceiptToken`: ERC20 Token that users gets as a receipt for staking the `BWCERC20TOKEN`. This token has no intrisic value and can only be used to withdraw the `BWCERC20TOKEN` after the staking period has elapsed.
3. `RewardToken`: ERC20 token that users get as a reward for staking `BWCERC20TOKEN` after a specific period of time.

## How It Works

1. User stakes a specific amount of `BWCERC20TOKEN` into the contract.
    - The contract sends the equivalent of `ReceiptToken` into the user's wallet as a receipt for staking `BWCERC20TOKEN`.
    - The staked token is locked in the contract for period of time.
    - Within this period which the token is locked, the user cannot withdraw the staked token unless the locked period is over.
    - The user can still stake more tokens within this locked period.
    - If at anytime during the locked period, the user stakes more token, the locked period is reset.
2. After the locked period is over, the user is then allowed to withdraw their staked `BWCERC20TOKEN`.
3. After withdrawal of `BWCERC20TOKEN`, the user is rewarded with `RewardToken` that is directly propotional to the amount of `BWCERC20TOKEN` token staked.

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

StakeFlow: A Web3 Staking dApp Proposal
Overview
StakeFlow is a decentralized application (dApp) designed to provide a seamless and secure staking experience on the StarkNet blockchain. StakeFlow will enable users to stake their tokens, earn rewards, and participate in governance, all through an intuitive and user-friendly interface.

Key Features
User-Friendly Dashboard:

Staking Overview: Display total staked tokens, current rewards, and estimated earnings.
Portfolio Management: Track staked tokens across different pools.
Staking Pools:

Multiple Pools: Allow users to stake in various pools with different reward rates and lock-up periods.
Custom Pools: Users can create and manage their staking pools.
Rewards System:

Real-Time Rewards: Display real-time reward updates.
Compounding Options: Users can choose to auto-compound their rewards.
Governance Participation:

Voting Mechanism: Users can use staked tokens to vote on protocol proposals.
Proposal Creation: Allow eligible users to create new governance proposals.
Security Features:

Multi-Signature Wallet Support: Enhance security for high-value accounts.
Audited Smart Contracts: Regular security audits to ensure the safety of user funds.
Analytics and Reporting:

Performance Metrics: Detailed analytics on staking performance and historical data.
Exportable Reports: Users can export staking and reward reports for personal record-keeping.
Integration and Interoperability:

Wallet Integration: Support for major wallets like MetaMask, WalletConnect, etc.
Interoperability: Cross-chain staking capabilities to support tokens from different blockchains.
Deployment on StarkNet
Smart Contract Development:

Develop staking and reward distribution contracts in Cairo, StarkNet's native programming language.
Utilize StarkNet's layer 2 scalability to ensure low gas fees and fast transaction times.
Testing and Audits:

Conduct extensive testing on StarkNet's testnet to ensure robustness.
Perform security audits with reputable firms to identify and mitigate vulnerabilities.
Frontend Integration:

Build a responsive frontend using React and integrate with StarkNet via the StarkNet.js library.
Ensure seamless user experience across desktop and mobile devices.
Deployment and Maintenance:

Deploy the smart contracts to StarkNet mainnet.
Establish a continuous integration/continuous deployment (CI/CD) pipeline for regular updates and maintenance.
Rough Sketch of the UI
Here's a rough sketch of the UI for StakeFlow:

Home Screen:

Header: Navigation menu with links to Dashboard, Staking Pools, Governance, and Profile.
Main Section: Overview of total staked tokens, rewards, and latest updates.
Footer: Quick links, social media icons, and contact information.
Dashboard:

Sidebar: Links to different sections (Overview, My Staking, Rewards, Governance).
Main Panel:
Staking Overview: Visual representation of staked tokens and rewards.
Recent Activity: List of recent staking and reward activities.
Portfolio Breakdown: Pie chart showing distribution of staked tokens.
Staking Pools:

Available Pools: List of staking pools with details like reward rate, lock-up period, and total staked tokens.
Staking Form: Input fields for staking amount and pool selection.
Action Buttons: Stake, Unstake, and Claim Rewards.
Governance:

Active Proposals: List of current governance proposals with voting options.
Create Proposal: Form for eligible users to submit new proposals.
Profile:

User Info: Display user’s wallet address, total staked tokens, and rewards.
Settings: Options for notification preferences, security settings, and account management.
Conclusion
StakeFlow aims to revolutionize the staking experience by leveraging StarkNet’s scalability and security. With a focus on user experience, robust security features, and comprehensive analytics, StakeFlow will empower users to maximize their staking rewards and actively participate in governance.

<https://blastapi.io/public-api/starknet>

<https://starknet-sepolia.reddio.com/rpc/v0_7>

<https://starknet-sepolia.public.blastapi.io/rpc/v0_7>

starkli declare --account /home/augustine/.starkli-wallets/deployer/keystore.jso ./target/dev/stakeflow_BWCStakingContract.compiled_contract_class.json

starkli declare --account ~/.starkli-wallets/deployer/account.json --rpc=<https://starknet-sepolia.reddio.com/rpc/v0_7> --network=sepolia --compiler-version=2.4.0 target/dev/stakeflow_BWCStakingContract.compiled_contract_class.json

export STARKNET_RPC="<https://starknet-sepolia.public.blastapi.io/rpc/v0_7>"
export STARKNET_ACCOUNT="~/.starkli-wallets/deployer/account.json"
export STARKNET_KEYSTORE="~/.starkli-wallets/deployer/keystore.json"

starkli declare target/dev/stakeflow_BWCERC20Token.contract_class.json
Class hash declared:
0x032421a6642ce6a4b65f0f35498c4b70bef9bcc7f938fc905da0b45e57a4ced8

starkli declare target/dev/stakeflow_ERC20.contract_class.json
Class hash declared:
0x04547a38c7075a05511a853e6b1d0dede1ea3289e30e0ea75c9cec8ca9f039c7

starkli declare target/dev/stakeflow_Faucet.contract_class.json
Class hash declared:
0x07f8fdd6214c07959b1e88870760f113aece3904ce2e09efc91aebe7396ad242

starkli declare target/dev/stakeflow_BWCStakingContract.contract_class.json
Class hash declared:
0x02f0fcb27e908ec57988632613b56011e4b68be57712feec4662d0d351af3abe

starkli deploy 0x032421a6642ce6a4b65f0f35498c4b70bef9bcc7f938fc905da0b45e57a4ced8 0x0785fc7063c064df7eA6aaF70777afd413E5bB9D15e2A52dD47A1bC58f72B0F6 --network=sepolia
