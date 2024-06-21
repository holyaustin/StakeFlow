import BigNumber from "bignumber.js";
import { useEffect, useState } from "react";
import asset from "../../assets/starknet.png";
import { useNavigate } from "react-router-dom";
import { useConnectWallet } from "../../context/ConnectContext";

function OverviewContainer() {
  const { address, staking_contract, account, receipt_contract,reward_contract,
    rewardContractAddress,  sft_contract } = useConnectWallet();
  const navigate = useNavigate();
  const [stakeBalance, setStakeBalance] = useState("");
  const [receiptBalance, setReceiptBalance] = useState("")
  const [rewardBalance, setRewardBalance] = useState("")
  const [sftBalance, setSftBalance] = useState("")

  // get_total_stake
  const getBalance = async () => {
    try {
      const rawSftBalance = await sft_contract.balance_of(address);
      setSftBalance(new BigNumber(rawSftBalance).shift(-18).toFixed(2).toString())
      const rawRewardBalance = await reward_contract.balance_of(address);
      setRewardBalance(new BigNumber(rawRewardBalance).shift(-18).toFixed(2).toString())
      const rawReceiptBalance = await receipt_contract.balance_of(address);
      setReceiptBalance(new BigNumber(rawReceiptBalance).shift(-18).toFixed(2).toString())
      staking_contract.connect(account)
      const balance = await staking_contract.get_stake_balance(account.address);
      const big = new BigNumber(balance).shift(-18).toFixed(2).toString();
      setStakeBalance(big);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getBalance();
  }, [address]);
  return (
    <div className="flex items-center justify-between rounded-[10px] bg-white px-[74px] py-[36px] text-black">
      <div className="flex md:gap-x-[60px]">
        <div className="text-center">
          <h2 className="mb-[14px] text-lg font-semibold">SFT Balance</h2>
          <h3 className="flex items-center w-full justify-center text-sm font-bold text-[#3a3a3a]">
          <img src={asset} className="ml-1 h-5 w-5" alt="logo" />
             {sftBalance || "0"} SFT
          </h3>
        </div>
        <div className="text-center">
          <h2 className="mb-[14px] text-lg font-semibold">Liquidity Staked</h2>
          <h3 className="text-sm font-bold text-[#3a3a3a]">{stakeBalance || "0"} SFT</h3>
        </div>
       
       <div className="text-center">
       <h2 className="mb-[14px] text-lg font-semibold">Receipt Token</h2>
          <h3 className="text-sm font-bold text-[#3a3a3a]">
            {receiptBalance || "0"} SRT
          </h3>
       </div>
        <div className="text-center">
          <h2 className="mb-[14px] text-lg font-semibold">Reward Token</h2>
          <h3 className="text-sm font-bold text-[#3a3a3a]">
            {rewardBalance || "0"} SRWT
          </h3>
        </div>
        <div className="text-center">
          <h2 className="mb-[14px] text-lg font-semibold">Duration</h2>
          <h3 className="text-sm font-bold text-[#3a3a3a]">2 mins</h3>
        </div>
      </div>
      <button
        className="rounded-[50px] bg-[#430F5D] px-[55px] py-[10px] text-base font-black text-white"
        onClick={() => navigate(parseInt(stakeBalance) > 0 ? '/withdraw' : '/stake')}
      >
        {parseInt(stakeBalance) > 0 ? 'Withdraw' : 'Stake'}
      </button>
    </div>
  );
}

export default OverviewContainer;
