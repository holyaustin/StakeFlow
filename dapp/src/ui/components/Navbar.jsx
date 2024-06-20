/* eslint-disable react/prop-types */
import Logo from "./Logo";
import NavigationLinks from "./NavigationLinks";
import WalletConnector from "./WalletConnector";

function Navbar() {
  return (
    <div className="flex fixed left-0 top-[33px] z-[30] w-screen px-[50px]">
      <nav
        className={
          "shadow-shadowPrimary flex h-[70px] w-full items-center justify-between rounded-[60px] bg-[#430F5D] pb-[9px] pl-[50px] pr-[38px] pt-[12px]"
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
