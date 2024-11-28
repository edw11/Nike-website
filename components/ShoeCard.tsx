import Image, { StaticImageData } from "next/image";

interface Shoe {
  thumbnail: string; // or StaticImageData if you import images as modules
  bigShoe: StaticImageData;
}

type ShoeData = {
  imgURL: Shoe;
  bigShoeImg: StaticImageData;
  changeBigShoeImage: (img: StaticImageData) => void;
};

const ShoeCard = (props: ShoeData) => {
  const handleClick = () => {
    if (props.bigShoeImg !== props.imgURL.bigShoe) {
      props.changeBigShoeImage(props.imgURL.bigShoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        props.bigShoeImg == props.imgURL.bigShoe
          ? `border-coral-red`
          : `border-transparent`
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <Image
          src={props.imgURL.thumbnail}
          alt="shoe collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
