import coinLogo from "../../assets/starknet.png";
import arrDown from "../../assets/down-arrow.svg";
import { useState } from "react";
import { useConnectWallet } from "../../context/ConnectContext";

function FaucetRequestContainer({sendFaucet, isFauceting}) {
  const {address} = useConnectWallet()
  const [value] = useState(address);
  return (
    <div className="shadow-shadowPrimary flex flex-col rounded-[5px] bg-white px-6 pb-4 pb-10 pt-6">
      <h2 className="text-lg font-medium text-[#3a3a3a]">Account Address</h2>
      <div className="relative mt-[23px] w-full">
        <button className="absolute inset-y-0 right-0 cursor-pointer bg-transparent py-[9px] pr-[24px]">
          <div className="flex h-full items-center gap-x-1 rounded-[50px] border-[0.5px] border-solid border-[#c4c4c4] bg-[#430f5d] py-[9px] pl-[12px] pr-[30px] text-sm font-bold text-white">
          <img src={coinLogo} alt="" className="ml-1 h-6 w-6 mr-5" />
            <h4>SFT</h4>
            <img src={arrDown} alt="" className="ml-3" />
          </div>
        </button>
        <input
          type="text"
          className="w-full rounded-[50px] border-[0.5px] disabled:cursor-not-allowed border-solid border-[#c4c4c4] bg-[#f5f5f5] px-6 py-[19px] text-base font-bold text-[#333]  outline-none placeholder:text-[#3a3a3a]"
          disabled={true}
          value={value.slice(0,42).concat("...")}
        />
      </div>
      <button onClick={() => {sendFaucet()}} disabled={isFauceting} className="mt-[30px] md:mt-[60px] disabled:cursor-not-allowed self-center rounded-[50px] bg-[#430F5D] disabled:opacity-90 px-[72px] md:px-[172px] py-[10px]">
        {isFauceting ? 'Sending tokens...' : "Send Request"}
      </button>
    </div>
  );
}

export default FaucetRequestContainer;
