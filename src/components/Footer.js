import React from "react";
import { Link } from "react-router-dom";
import linkedIn from "../assets/linkedin.png";
import gitlab from "../assets/gitlab.png";
import github from "../assets/github.png";
import phone from "../assets/phone.png";
import user from "../assets/user.png";
import home from "../assets/home.png";

const Footer = () => {
  return (
    <div className=" h-[400px] relative  bg-[#222831] ">
      <div className="relative flex justify-center">
        <div className="w-[475px] h-[48px] relative flex justify-between top-[100px]">
          <div className=" w-[108px] h-[47px] relative flex justify-between ">
            <img
              src={home}
              alt=""
              className="w-[24px] h-[24px] relative left-[10px] top-[10px]"
            />
            <p className="text-white font-[400] text-[18px] leading-[27px] text-left relative right-[10px] top-[10px]">
              Home
            </p>
          </div>
          <div className="w-[143px] h-[47px] relative flex justify-between ">
            <img
              src={user}
              alt=""
              className="w-[24px] h-[24px] relative left-[10px] top-[10px]"
            />
            <p className="text-white font-[400] text-[18px] leading-[27px] text-left relative right-[10px] top-[10px]">
              About Me
            </p>
          </div>
          <div className=" w-[128px] h-[47px] relative flex justify-between ">
            <img
              src={phone}
              alt=""
              className="w-[24px] h-[24px] relative left-[10px] top-[10px]"
            />
            <p className="text-white font-[400] text-[18px] leading-[27px] text-left relative right-[10px] top-[10px]">
              Contact
            </p>
          </div>
        </div>
      </div>
      <div className="relative flex justify-center top-[185px] ">
        <div className=" w-[264px] h-[48px] relative flex justify-between">
          <Link to="https://www.linkedin.com/in/ayu-widya-inggit-0573b7192/">
            <div className="w-[48px] h-[48px] ">
              <img src={linkedIn} alt="" className="" />
            </div>
          </Link>
          <Link to="https://gitlab.com/ayuwidyainggit">
            <div className="w-[48px] h-[48px] ">
              <img src={gitlab} alt="" className="" />
            </div>
          </Link>
          <Link to="https://github.com/ayuwidyainggit">
            <div className="w-[48px] h-[48px] ">
              <img src={github} alt="" className="" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
