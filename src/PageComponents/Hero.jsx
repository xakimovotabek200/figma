/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import React from "react";
import Herp from "../Img/Herp.png";
import Bg from "../Img/Bg.png";

function Hero() {
  return (
    <div className="container mx-auto w-[90%]">
      <div className="">
        <Image
          src={Bg}
          width={"100%"}
          height={"400px"}
          className="rounded-2xl mt-9 realtive object-cover overflow-hidden"
        />
        <div className="absolute top-20 z-10 left-20 flex items-center justify-around">
          <div className="text-[50px] leading-[71.2px] text-white font-bold">
            Go digital with us
            <div>
              <p className="text-[18px] leading-[25.65px] font-normal text-white">
                We have designed hundreds of websites and helped <br /> improve
                their online performance through SEO, <br /> SEM and Social
                Media Marketing
              </p>
              <div>
                <button className="w-[260px] h-[65px] text-sm bg-white text-black rounded-full">
                  See portfolio
                </button>
              </div>
            </div>
          </div>
          <div>
            <Image
              src={Herp}
              width={"670px"}
              height={"836px"}
              className="ml-[11.5pc]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
