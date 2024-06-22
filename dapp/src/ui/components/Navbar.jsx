/* eslint-disable react/prop-types */
import Logo from "./Logo";
import NavigationLinks from "./NavigationLinks";
import WalletConnector from "./WalletConnector";

function Navbar() {
  return (
    <div className="flex fixed left-0 top-[33px] z-[30] w-screen px-[2px] md:px-[20px] lg:px-[50px]">
      <nav
        className={
          "shadow-shadowPrimary flex h-[220px] md:h-[70px] w-full items-center justify-between rounded-[30px] md:rounded-[60px] bg-[#430F5D] pb-[9px] pl-[20px] lg-pl-[30px] pr-[38px] md:pr-[10px] pt-[12px]"
        }
      >
        <Logo />
        <NavigationLinks />
        <WalletConnector
        />
      </nav>
    </div>
  );
}

export default Navbar;
