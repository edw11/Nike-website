import React from "react";
import ButtonComponent from "./ButtonComponent";
import { arrowRight } from "@/public/icons";
import Image from "next/image";
import { shoe8 } from "@/public/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize  font-bold lg:max-w-lg">
          We Provide You <span className="text-coral-red">Super</span>
          <span className="text-coral-red"> Quality </span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Enusring premium comfort and style, Our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <ButtonComponent
            label="view-details"
            iconURL={arrowRight}
            borderColor=""
            backgroundColor=""
            textColor=""
            fullWidth={false}
          />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <Image
          src={shoe8}
          width={570}
          height={522}
          alt="shoe8"
          className="object-contain"
        ></Image>
      </div>
    </section>
  );
};

export default SuperQuality;
