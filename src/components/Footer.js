import React from "react";
import logo from "../assets/images/logoGold.svg";

const Footer = () => {
  return (
    <section className="hidden lg:flex bg-black p-4 md:p-10 py-[105px] items-center gap-10 justify-center">
      <p className="text-4xl text-white font-newYork">Elizabeth Oiza</p>
      <img src={logo} alt="" />
      <p className="text-4xl text-white font-newYork">Jeremiah Oluwadara</p>
    </section>
  );
};

export default Footer;
