import React from "react";
import bg1 from "../assets/doodle items.png";
import bg2 from "../assets/bg-aboutme2.png";

const AboutMe = () => {
  return (
    <div className=" h-[1024px] relative   bg-[#222831]" id="aboutMe">
      <div className="relative flex justify-between">
        <div className="w-[50%] relative ">
          <div className="relative left-[96px] top-[256px]  w-[322px] h-[96px]">
            <p className="text-white font-[700] text-[64px] leading-[96px] text-left">
              About <span className="text-[#00ADB5] ">Me</span>
            </p>
          </div>
          <div className="relative left-[96px] top-[256px]  w-[389px] h-[189px]">
            <p className="text-white font-[400] text-[18px] leading-[27px] text-left">
              My name is Ayu Widya Inggit and I have the ability to quickly
              adapt to different environments and cultures. With my experience
              in building web applications using React JS, I am confident in my
              ability to contribute to any team and make an immediate impact.
            </p>
          </div>
        </div>
        <div className="w-[50%] relative ">
          <img
            src={bg1}
            alt=""
            className="relative w-[665.33px] h-[499px] right-[110.67px] top-[230px]"
          />
          <img src={bg2} alt="" className="relative z-10 -top-[30px]" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
