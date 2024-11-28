import Image from "next/image";
import React from "react";

const ButtonComponent = ({
  label,
  iconURL,
  borderColor,
  backgroundColor,
  textColor,
  fullWidth,
}: {
  label: string;
  iconURL: string;
  borderColor: string;
  backgroundColor: string;
  textColor: string;
  fullWidth: boolean;
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full  ${
        backgroundColor
          ? borderColor + " " + backgroundColor + " " + textColor
          : `border-coral-red bg-coral-red text-white `
      } ${fullWidth && "w-full"}`}
    >
      {label}
      <Image
        src={iconURL}
        alt="icon arrow right"
        className="ml-2 rounded-full w-5 h-5"
      ></Image>
    </button>
  );
};

export default ButtonComponent;
