import coinLogo from "../../assets/starknet.png";
import arrDown from "../../assets/down-arrow.svg";
function CryptoInput({getSymbol, symbol,balance, amount, setAmount}) {
  return (
    <div className="relative w-full">
      <button className="absolute inset-y-0 left-0 cursor-pointer bg-transparent px-[7px] py-[9px]">
        <div className="flex h-full items-center gap-x-1 rounded-[50px] border-[0.5px] border-solid border-[#c4c4c4] bg-[#430f5d] py-[9px] pl-[12px] pr-[30px] text-sm font-bold text-white">
          <img src={coinLogo} alt="" className="ml-1 h-6 w-6 mr-5" />
          <h4
          >SFT</h4>
          <img src={arrDown} alt="" className="ml-3" />
        </div>
      </button>
      <input
        type="number"
        className="w-full rounded-[50px] border-[0.5px] border-solid border-[#c4c4c4] bg-white px-6 py-[19px] text-right text-base font-bold text-black outline-none placeholder:text-[#3a3a3a]"
        placeholder="0"
        value={amount}
        onChange={(e) => {
          if(e.target.value > parseInt(balance)){
            setAmount(amount)
            return
          }
          setAmount(e.target.value)
        }}
      />
    </div>
  );
}

export default CryptoInput;
