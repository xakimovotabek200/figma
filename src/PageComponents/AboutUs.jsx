/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import React from "react";
import AboutImage from "../Img/About.png";

const AboutUs = () => {
  return (
    <div>
      <Image
        src={AboutImage}
        width={"100%"}
        height={"400px"}
        className="object-cover mx-auto"
      />
    </div>
  );
};

export default AboutUs;
