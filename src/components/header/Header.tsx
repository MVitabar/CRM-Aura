import React from "react";
import Logo from "../../assets/icons/Isologo-Icon.png";

interface HeaderProps {
  toggleSidebar: () => void; // Prop to toggle sidebar's visibility
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-10 justify-center">
      <div className="max-w-[1440px] h-[60px] mx-auto px-4 flex items-center justify-between">
        <button
          className="bg-white
            rounded-md px-4 py-2"
          onClick={toggleSidebar}
        >
          ...
        </button>
        <img src={Logo} alt="Logo" className="h-8" />
      </div>
    </header>
  );
};

export default Header;
