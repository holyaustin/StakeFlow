import OverviewContainer from "../ui/components/OverviewContainer"
import DynamicWallet from "../ui/components/dynamic";

function Dashboard() {
  return (
    <div className="px-[7px] pt-20 md:px-[50px]">
      <DynamicWallet /> 
        <div className="mb-[27px] mt-[78px] md:mt-[38px] flex items-center gap-x-4">
        <button className=" rounded-[40px] bg-white px-[30px] py-[10px] text-lg font-semibold transition-all duration-200 ease-in-out hover:bg-white hover:text-[#3a3a3a]">
          My Dashboard
        </button>
        
      </div>
      
      <OverviewContainer />
    </div>
  )
}

export default Dashboard