/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { data } from "./PageData";
import Image from "next/image";

const Card = () => {
  return (
    <section className="container mx-auto w-[90%]">
      <>
        <div className="text-center md:flex justify-between items-center mt-[8pc]">
          {data.map((item) => {
            return (
              <div key={item.id}>
                <Image
                  src={item.Image}
                  width={"300px"}
                  height={"300px"}
                  className="object-cover"
                />
                <div>
                  <h2 className="mr-[1pc] text-[#14213D] font-medium text-4xl leading-[51.px]">
                    {item.title}
                  </h2>
                  <p className=" text-[#59616D] text-lg font-normal leading-[25.6px]">
                    {item.type}
                  </p>
                  <button className="w-[267px] h-[67px] text-white bg-[#14213D] rounded-full">
                    See Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </>
    </section>
  );
};

export default Card;
