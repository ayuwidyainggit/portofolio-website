import React, { useState } from "react";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <div className={navbar ? "navbar-fixed" : "navbar"}>
      <div className="w-[301px] h-[132px] pl-[96px] pr-[96px] pt-[48px] pb-[48px]">
        <p className="text-[#EEEEEE] font-['Oswald'] not-italic font-[700] text-[24px] leading-[36px]">
          MyPortofolio
        </p>
      </div>
      <div className=" relative flex w-[502px] h-[123px] justify-center pr-[96px] pl-[96px] pt-[48px] pb-[48px]">
        <div className="flex relative h-[27px] w-[310px] justify-between">
          <a href="#home">
            <p className="text-[#EEEEEE] font-['Poppins'] not-italic font-[400] text-[18px] leading-[27px]">
              Home
            </p>
          </a>
          <a href="#aboutMe">
            <p className="text-[#EEEEEE] font-['Poppins'] not-italic font-[400] text-[18px] leading-[27px]">
              About Me
            </p>
          </a>
          <a href="#contact">
            <p className="text-[#EEEEEE] font-['Poppins'] not-italic font-[400] text-[18px] leading-[27px]">
              Contact
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
