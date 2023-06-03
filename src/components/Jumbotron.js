import React from "react";
import bg1 from "../assets/bg1.png";
import bg2 from "../assets/bg2.png";
import img3 from "../assets/img3.png";
import { Link } from "react-router-dom";

const CV_DOWNLOAD = "http://localhost:3000/cvayuwidyainggit.pdf";
const Jumbotron = () => {
  const downloadFileURL = (url) => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]));
        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = blobURL;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      });
  };
  return (
    <div className="  h-[1024px] relative lg:flex bg-[#222831] sm:block">
      <div className="  lg:w-[50%] relative flex justify-between">
        <div className=" relative lg:flex  justify-end lg:top-[385px] w-[89.96px] h-[221.69px] lg:left-[72px] ">
          <img src={img3} alt="" className="  " />
        </div>
        <div className="  relative  justify-end lg:top-[334px] left-[50px] w-[586px] h-[287px] ">
          <h1 className="text-white font-[700]  lg:text-[60px]  sm:text-[50px] md-[50px] leading-[96px] text-left">
            Ayu Widya Inggit
            <span className="text-[#00ADB5]">Front End Developer</span>
          </h1>
          <div className=" relative flex w-[383px] h-[47px] justify-between">
            <Link to="https://api.whatsapp.com/send?phone=087832171593">
              <button className="bg-[#00ADB5] rounded-[24px] w-[136px] h-[47px]">
                Hire Me
              </button>
            </Link>
            <button
              onClick={() => {
                downloadFileURL(CV_DOWNLOAD);
              }}
              className="bg-[#393E46] rounded-[24px] w-[223px] h-[47px]"
            >
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
