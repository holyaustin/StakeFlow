import asset from "../../assets/starknet.png";
function Logo() {
  return <div className="flex flex-col md:flex-row justify-center lg:mr20 ">
    <img src={asset} className=" h-20 w-20 md:h-8 md:w-8 mr-5 md:ml-4 md:mr-1 mb-5 md:mb-0 justify-center"
      alt="logo" />
    <h6 className="text-xl lg:text-2xl text-white font-extrabold md:mr-6"> StakeFlow  </h6>
  </div>;
}

export default Logo;
