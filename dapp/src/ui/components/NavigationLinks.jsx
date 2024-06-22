import NavigationLink from "./NavigationLink";

function NavigationLinks() {
  return (
    <ul className="flex flex-col  md:flex-row items-center gap-x-[1px] text-sm font-bold text-white">
      <NavigationLink text={"Dashboard"} to={"/"} />
      <NavigationLink text={"Stake"} to={"/stake"} />
      <NavigationLink text={"Portfolio"} to={"/portfolio"} />
      <NavigationLink text={"Faucet"} to={"/faucet"} />
      <NavigationLink text={"Withdraw"} to={"/withdraw"} />
    </ul>
  );
}

export default NavigationLinks;
