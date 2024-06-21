import { useState } from "react";
import { createPortal } from "react-dom";
import FaucetRequestContainer from "../ui/components/FaucetRequestContainer";
import FaucetRequestModal from "../ui/complex/FaucetRequestModal";
import { useConnectWallet } from "../context/ConnectContext";

function FaucetPage() {
  const [step, setStep] = useState(false)
   const {address, account, faucet_contract} = useConnectWallet()
   const [isFauceting, setIsFauceting] = useState(false)
  const sendFaucet = async () => {
    try {
      setIsFauceting(true)
      console.log("address is ", address)
      console.log("account is ", account)
      console.log("faucet_contract is ", faucet_contract)
      faucet_contract.connect(account)
      console.log("about to request tokens ")
      await faucet_contract.request_bwc_token(address)
      console.log("Token requested successfully")
    } catch (error) {
        alert(error.message)
        console.log(error)
    }finally{
      setIsFauceting(false)
    }
}

  return (
    <div className="px-[324px] text-white">
      <h1 className="text-2xl font-bold">Request testnet tokens</h1>
      <p className="mb-5 mt-3 text-lg font-medium">
        This Faucet sends small amounts of SWF to an account address on Starknet.
        You can use it to test and make transactions on Starknet.
      </p>
      <FaucetRequestContainer sendFaucet={sendFaucet} isFauceting={isFauceting}/>

      {/* {step && createPortal(<FaucetRequestModal setModal={setStep} />, document.body)} */}
    </div>
  );
}

export default FaucetPage;
