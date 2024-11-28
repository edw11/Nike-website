import React from "react";
import ButtonComponent from "./ButtonComponent";
import { arrowRight } from "@/public/icons";
import Image from "next/image";
import { offer } from "@/public/images";

const SpecialOffers = () => {
  return (
    <section className="flex items-center max-xl:flex-col-reverse gap-10 max-container justify-wrap">
      <div className="flex-1">
        <Image
          src={offer}
          width={773}
          height={687}
          className="object-contain w-ful"
          alt="offer"
        ></Image>
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize  font-bold lg:max-w-lg">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart
        </p>
        <p className="mt-6 lg:max-w info-text">
          Navigate a realm of possibilities designed to fullfill your unique
          desires, surparssing the loftiest expectations. Your journey with us
          is nothing short of exceptional
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <ButtonComponent
            label="Shop now"
            iconURL={arrowRight}
            borderColor=""
            backgroundColor=""
            textColor=""
            fullWidth={false}
          />
          <ButtonComponent
            label="learn more"
            iconURL={arrowRight}
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
            fullWidth={false}
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
