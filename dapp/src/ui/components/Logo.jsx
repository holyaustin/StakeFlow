import asset from "../../assets/starknet.png";
function Logo() {
  return <div class="flex flex-row">
    <img src={asset} className="ml-1 h-8 w-8 mr-5" alt="logo" />
    <h6 className="text-2xl text-white font-extrabold"> StakeFlow  </h6>
  </div>;
}

export default Logo;
