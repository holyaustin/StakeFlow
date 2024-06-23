/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";
import { RpcProvider, Contract } from "starknet";
import staking_contract_abi from '../utils/abis/staking_contract_abi.json'
import sft_token_abi from '../utils/abis/sft_token_abi.json'
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
  "0x07e500e037b86842fc3cc194febbb86959c131e5509d72401fe99725087029f4"
  const sftContractAddress = "0x05acb1fb1f2248966ebf01e7a800d19736af8ab4b860227849d85209c894eed8"
  const faucetContractAddress = "0x075b55552992eea0bba7c15da130b06da80f8ba9d7021c4cd501af5d69267127"
  const receiptContractAddress = "0x02a5eaf135031ecad3ad538ef5c965d84954ecb3384dbcff21786200bf68a234"
  const rewardContractAddress = "0x025354142f8bed84d1d2d3b29326fb40c9f02a01d51b2bac9632f9f2f5aa31f2"

const rpc_provider = new RpcProvider({ nodeUrl: 'https://starknet-sepolia.public.blastapi.io/rpc/v0_7' });
const staking_contract = new Contract(staking_contract_abi, stakingContractAddress, rpc_provider)
const sft_contract = new Contract(sft_token_abi, sftContractAddress, rpc_provider)
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
        sft_contract,
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