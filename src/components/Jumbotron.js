import React from "react";
import bg1 from "../assets/bg1.png";
import bg2 from "../assets/bg2.png";
import img3 from "../assets/img3.png";

const Jumbotron = () => {
  return (
    <div className="h-[1024px] relative flex bg-[#222831] ">
      <div className="  w-[50%] relative flex justify-between">
        <div className=" relative flex justify-end top-[385px] w-[89.96px] h-[221.69px] left-[72px]">
          <img src={img3} alt="" className="" />
        </div>
        <div className="  relative  justify-end top-[334px] left-[50px] w-[586px] h-[287px] ">
          <h1 className="text-white font-[700] text-[60px] leading-[96px] text-left">
            Ayu Widya Inggit{" "}
            <span className="text-[#00ADB5]">Front End Developer</span>
          </h1>
          <div className=" relative flex w-[383px] h-[47px] justify-between">
            <button className="bg-[#00ADB5] rounded-[24px] w-[136px] h-[47px]">
              Hire Me
            </button>
            <button className="bg-[#393E46] rounded-[24px] w-[223px] h-[47px]">
              Download CV
            </button>
          </div>
        </div>
      </div>

      <div className=" w-[50%] relative ">
        <div className="  relative flex justify-end">
          <img
            src={bg1}
            alt=""
            className="relative w-[514px] h-[514px] top-[295px] right-[79px]"
          />
        </div>
        <div className=" relative flex justify-end">
          <img
            src={bg2}
            alt=""
            className=" relative w-[400px] h-[472.65px] -top-[45px] right-[226px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
