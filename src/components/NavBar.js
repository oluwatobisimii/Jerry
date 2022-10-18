import React, { useState } from "react";
import logo from "../assets/images/logoNav.svg";
import { MdMenu, MdClose } from "react-icons/md";

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <section className="xl:h-[12vh]  sticky top-0 z-40 bg-white">
      <div className="hidden lg:flex space-x-[60px] justify-center uppercase text-sm tracking-widest items-center p-4 md:p-10">
        <a href="#our-love">our love</a>
        <a href="#proposal">proposal</a>
        <img src={logo} alt="" />
        <a href="#photo">photo</a>
        <a href="#rsvp">rsvp</a>
        <a href="#gift">gifts</a>
      </div>
      <div className="lg:hidden flex p-4 md:p-10 justify-between items-center text-2xl h-[12vh] relative">
        <img src={logo} alt="" />
        {menu ? (
          <div onClick={toggleMenu} className="">
            <MdClose />
          </div>
        ) : (
          <div onClick={toggleMenu} className="">
            <MdMenu />
          </div>
        )}
       {menu && <div className="absolute left-0 p-4 md:p-10 top-[12vh] h-[88vh] text-4xl text-[#a90000] uppercase flex flex-col w-full bg-white z-40 space-y-6 pb-8">
          <a
            href="#our-love" onClick={toggleMenu}
            className="border-b w-full pb-2 pt-4  border-[#a90000]"
          >
            our love
          </a>
          <a
            href="#proposal" onClick={toggleMenu}
            className="border-b w-full pb-2 pt-4 border-[#a90000]"
          >
            proposal
          </a>
          <a
            href="#photo" onClick={toggleMenu}
            className="border-b w-full pb-2 pt-4 border-[#a90000]"
          >
            photo
          </a>
          <a
            href="#rsvp" onClick={toggleMenu}
            className="border-b w-full pb-2 pt-4 border-[#a90000]"
          >
            rsvp
          </a>
          <a
            href="#gift" onClick={toggleMenu}
            className="border-b w-full pb-2 pt-4 border-[#a90000]"
          >
            gifts
          </a>
        </div>}
      </div>
    </section>
  );
};

export default NavBar;
