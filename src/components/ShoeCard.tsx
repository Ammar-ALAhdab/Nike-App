import React from "react";

type imgURL = {
  thumbnail: string;
  bigShoe: string;
};

type shoeCardProps = {
  imgURL: imgURL;
  changeBigShoeImg: (e: string) => void;
  bigShoeImg: string;
};

const ShoeCard = React.memo(
  ({ imgURL, changeBigShoeImg, bigShoeImg }: shoeCardProps) => {
    const handleClick = () => {
      if (bigShoeImg !== imgURL.bigShoe) {
        changeBigShoeImg(imgURL.bigShoe);
      }
    };
    return (
      <div
        className={`border-2 rounded-xl ${
          bigShoeImg == imgURL.bigShoe
            ? "border-coral-red"
            : "border-transparent"
        } max-sm:flex-1 cursor-pointer `}
        onClick={handleClick}
      >
        <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl  max-sm:p-4">
          <img
            src={imgURL.thumbnail}
            alt="shoe card"
            width={127}
            height={103}
            className="object-contain"
          />
        </div>
      </div>
    );
  }
);

export default ShoeCard;
