import React from "react";
import prohect1 from "../assets/project1.png";
import prohect2 from "../assets/project2.png";
import prohect3 from "../assets/project3.png";
import prohect4 from "../assets/project4.png";
import { Link } from "react-router-dom";

const MyProjects = () => {
  return (
    <div className=" h-[1024px] relative flex bg-[#222831] " id="contact">
      <div className=" w-[1200px] h-[487px] relative left-[120px] top-[268px]">
        <div className=" w-[540px] h-[96px]">
          <p className="text-white font-[700] text-[64px] leading-[96px] text-left">
            My recent <span className="text-[#00ADB5]">works</span>
          </p>
        </div>
        <div className=" w-[1200px] h-[280px] relative grid grid-cols-3 gap-8  justify-between">
          <Link to="https://ayuwidyainggit.github.io/WebsiteCoffeshop/">
            <div className="w-[368px] h-[280px] bg-[#393E46]">
              <p className="relative text-[#00ADB5] font-[400] text-[24px] leading-[30px] text-center top-[20px]">
                Landing Page Coffeshop
              </p>
              <img
                src={prohect1}
                alt=""
                className="w-[265px] h-[158px] relative left-[51px] top-[40px]"
              />
            </div>
          </Link>
          <Link to="https://ayuwidyainggit.github.io/Website-ecommerce/">
            <div className="w-[368px] h-[280px] bg-[#393E46]">
              <p className="relative text-[#00ADB5] font-[400] text-[24px] leading-[30px] text-center top-[20px]">
                Website Ecommerce
              </p>
              <img
                src={prohect2}
                alt=""
                className="w-[265px] h-[158px] relative left-[51px] top-[40px]"
              />
            </div>
          </Link>
          <Link to="https://ayuwidyainggit.github.io/frontend-mysaas/">
            <div className="w-[368px] h-[280px] bg-[#393E46]">
              <p className="relative text-[#00ADB5] font-[400] text-[24px] leading-[30px] text-center top-[20px]">
                Saas Website
              </p>
              <img
                src={prohect3}
                alt=""
                className="w-[265px] h-[158px] relative left-[51px] top-[40px]"
              />
            </div>
          </Link>
          <Link to="https://ayuwidyainggit.github.io/POS---React-Redux/">
            <div className="w-[368px] h-[280px] bg-[#393E46]">
              <p className="relative text-[#00ADB5] font-[400] text-[24px] leading-[30px] text-center top-[20px]">
                POS - React Redux
              </p>
              <img
                src={prohect4}
                alt=""
                className="w-[265px] h-[158px] relative left-[51px] top-[40px]"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
