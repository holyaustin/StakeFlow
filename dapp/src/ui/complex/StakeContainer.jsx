import { useEffect, useState } from "react";
import BigNumber from "bignumber.js";
import walletIcon from "../../assets/walletIcon.svg";
import CryptoInput from "../components/CryptoInput";
import DataROw from "../components/DataROw";
import { useConnectWallet } from "../../context/ConnectContext";

function StakeContainer() {
  const [sftBalance, setSftBalance] = useState("");
  const [amount, setAmount] = useState(0);
  const {
    address,
    account,
    sft_contract,
    staking_contract,
    rpc_provider: provider,
  } = useConnectWallet();
  const [isStaking, setIsStaking] = useState(false);

  const getBalance = async () => {
    try {
      const balance = await sft_contract.balance_of(address);
      const big = new BigNumber(balance).shift(-18).toFixed(2).toString();
      setSftBalance(big);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getBalance();
  }, [address]);

  async function handleStake() {
    try {
      setIsStaking(true);
      const big = new BigNumber(amount).shift(18).toString();
      console.log("Amount to stake is ", big)
      sft_contract.connect(account)
      console.log("Connected to SFT Token contract")
      await sft_contract.approve("0x07e500e037b86842fc3cc194febbb86959c131e5509d72401fe99725087029f4", big)
      console.log("Approval successful")
      staking_contract.connect(account);
      console.log("Connected to Staking contract")
      const { transaction_hash: stakeTxHash } =
        await staking_contract.stake(big);
        console.log("Staking Txn in progress")
      await provider.waitForTransaction(stakeTxHash);
      console.log("Staking successful with hash", stakeTxHash)
      setAmount(0);
      await getBalance();
    } catch (err) {
      console.log(err.message);
    } finally {
      setIsStaking(false);
    }
  }

  return (
    <div className="mx-auto w-[350px] md:w-[550px] rounded-[20px] bg-white p-6 text-[#3a3a3a] shadow-shadowPrimary mt-[150px]">
      <div className="mb-[21px] flex items-center justify-between font-medium">
        <h1 className="text-xl">Deposit</h1>
        <div className="flex items-center text-xs">
          <img src={walletIcon} alt="" className="mr-1 h-5 w-5" />
          <h5 className="text-sm">{sftBalance}</h5>
          <div className="ml-[10px] flex items-center gap-x-[10px]">
            <div
              onClick={() => {
                setAmount(sftBalance);
              }}
              className="cursor-pointer rounded-[50px] border-[1px] border-solid border-[#c4c4c4] px-[11px] py-[2px]"
            >
              Max
            </div>
            <div
              onClick={() => {
                setAmount(sftBalance / 2);
              }}
              className="cursor-pointer rounded-[50px] border-[1px] border-solid border-[#c4c4c4] px-[11px] py-[2px]"
            >
              Half
            </div>
          </div>
        </div>
      </div>
      <CryptoInput amount={amount} setAmount={setAmount} balance={sftBalance} />
      <div className="mt-[21px] flex items-center justify-between text-sm font-medium text-[#3a3a3a]">
        <h3 className="text-black">You will receive</h3>
        <h3>{amount} SRT</h3>
      </div>
      <button disabled={isStaking}
        className="mt-[48px] w-full disabled:cursor-not-allowed disabled:opacity-90 rounded-[50px] bg-[#430F5D] py-[10px] text-center text-base font-black text-white"
        onClick={handleStake}
      >
        {isStaking ? 'Staking...' : 'Stake'}
      </button>
      <div className="mt-[23px] flex flex-col gap-y-4">
        <DataROw title={"Current price"} value={"1 SFT = 1 SRT"} />
      </div>
    </div>
  );
}

export default StakeContainer;
