/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import { testimonials } from "./PageData";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import ImageRound from "../Img/Ellipse.png";
import Square from "../Img/Square.png";
import DotGrid from "../Img/Dot Grid.png";

function TestimonialSlider() {
  return (
    <>
      {testimonials.map((item, index) => {
        return (
          <div key={index}>
            <div className="mt-[15pc] md:flex items-center justify-around">
              <div>
                <Image
                  className="rounded-2xl relative"
                  src={item.authorImg}
                  alt=""
                />
              </div>
              <div>
                <Image
                  src={ImageRound}
                  className="absolute left-[450px] top-[2550px]"
                />
              </div>
              <div>
                <Image src={Square} className="absolute left-5 top-[2250px]" />
              </div>
              <div>
                <Image
                  src={DotGrid}
                  className="absolute left-[450px] top-[2050px]"
                />
              </div>
              <div className="flex flex-col max-w-3xl items-center">
                <div className="font-body text-2xl mb-8 italic font-normal">
                  {item.authorText}
                </div>
                <div>
                  <p className="text-lg text-accent">{item.authorName}</p>
                </div>
                <div className="flex items-center text-2xl cursor-pointer mt-[15pc] ml-[20pc]">
                  <HiArrowLeft className="w-[50px] h-[50px] rounded-full mr-[2pc] bg-[#14213D] text-white" />
                  <HiArrowRight className="w-[50px] h-[50px] rounded-full  bg-[#14213D] text-white" />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default TestimonialSlider;
