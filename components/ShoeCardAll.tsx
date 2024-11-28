"use client";
import { shoes } from "@/constants";
import Image, { StaticImageData } from "next/image";
import { bigShoe1 } from "@/public/images";
import ShoeCard from "./ShoeCard";
import { SetStateAction, useState } from "react";

const ShoeCardAll = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center max-sm:hidden">
      <Image
        src={bigShoeImg}
        alt="shoe collection"
        width={610}
        height={610}
        className="object-contain relative z-10"
      ></Image>
      <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
        {shoes.map((shoe, index) => (
          <div key={index}>
            <ShoeCard
              imgURL={shoe}
              changeBigShoeImage={(
                shoeChange: SetStateAction<StaticImageData>
              ) => {
                setBigShoeImg(shoeChange);
              }}
              bigShoeImg={bigShoeImg}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoeCardAll;
