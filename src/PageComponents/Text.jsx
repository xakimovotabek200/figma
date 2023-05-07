import React from "react";
import { HiArrowLeft, HiOutlineArrowRight } from "react-icons/hi";

const Text = () => {
  return (
    <div className="container mx-auto w-[90%]">
      <div>
        <p className="font-normal text-[#303948] text-[18px] leading-6">
          Our Product
        </p>
        <h1 className="text-[#14213D] text-[36px] font-medium leading-10">
          We’ll let our work speak for itself
        </h1>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-[#59616D] font-normal text-lg leading-6 ">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco
        </p>
        <div className="flex items-center text-2xl cursor-pointer">
          <HiArrowLeft className="w-[50px] h-[50px] rounded-full bg-[#14213D80] text-white" />
          <HiOutlineArrowRight className="w-[50px] h-[50px] rounded-full bg-[#14213D] text-white" />
        </div>
      </div>
    </div>
  );
};

export default Text;
