/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";
import { RpcProvider, Contract } from "starknet";
import staking_contract_abi from '../utils/abis/staking_contract_abi.json'
import bwc_token_abi from '../utils/abis/bwc_token_abi.json'
import faucet_abi from '../utils/abis/faucet_abi.json'
import receipt_abi  from '../utils/abis/receipt_abi.json'
import reward_abi from '../utils/abis/reward_abi.json'

const ConnectContext = createContext();

const initialState = {
  connection: null,
  account: null,
  address: null,
  // Loading - status for when connecting or disconnecting
  loading: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        loading: true,
      };

    // stopLaoding - Incase of errors
    case "stopLoading":
      return {
        ...state,
        loading: false,
      };
    case "connectWallet":
      return {
        ...state,
        connection: action.payload.connection,
        account: action.payload.account,
        address: action.payload.address,
        loading: false,
      };
    case "disconnectWallet":
      return {
        ...state,
        connection: null,
        account: null,
        address: null,
        loading: false,
      };
    default:
      throw new Error("Action Unknown");
  }
}

const ConnectProvider = ({ children }) => {
  const [{ connection, account, address, loading }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  const stakingContractAddress =
  "0x00389df2a54a7a6612c2c3e33813b87e90efa239cbc80367383c27a3f674bd42";
  const bwcContractAddress = "0x04fef1e8f0db73ebf7542c8d28e1bb47c3c7b33977b056ce0320af9f86c5f836"
  const faucetContractAddress = "0x03d4a69a108fd120272b0e41a086664fb72ddda950d368f5c9e8c6217b31b02b"
  const receiptContractAddress = "0x04155676f7d25529a4aaf7694f25641b11e2b6431593d7aefb2d645690008d40"
  const rewardContractAddress = "0x04fef1e8f0db73ebf7542c8d28e1bb47c3c7b33977b056ce0320af9f86c5f836"

const rpc_provider = new RpcProvider({ nodeUrl: 'https://starknet-sepolia.public.blastapi.io/rpc/v0_7' });
const staking_contract = new Contract(staking_contract_abi, stakingContractAddress, rpc_provider)
const bwc_contract = new Contract(bwc_token_abi, bwcContractAddress, rpc_provider)
const faucet_contract = new Contract(faucet_abi, faucetContractAddress, rpc_provider)
const receipt_contract = new Contract(receipt_abi, receiptContractAddress, rpc_provider)
const reward_contract = new Contract(reward_abi, rewardContractAddress, rpc_provider)

  return (
    <ConnectContext.Provider
      value={{
        connection,
        address,
        account,
        dispatch,
        loading,
        rpc_provider,
        staking_contract,
        bwc_contract,
        faucet_contract,
        receipt_contract,
        stakingContractAddress,
        reward_contract,
        rewardContractAddress
      }}
    >
      {children}
    </ConnectContext.Provider>
  );
};

function useConnectWallet() {
  const context = useContext(ConnectContext);
  if (context === undefined)
    throw new Error("Context was read outside the provider scope");

  return context;
}

export { ConnectProvider, useConnectWallet };