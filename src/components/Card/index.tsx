import Image from "next/image";
import shopBag from "@/assets/shopping-bag.svg";
import { useState } from "react";

export interface ContentProduct {
  id: number;
  name: string;
  brand: string;
  description: string;
  price: number;
  photo: string;
}

export default function Card({
  id,
  name,
  brand,
  description,
  price,
  photo,
  updateCart,
}: ContentProduct & { updateCart: () => void }) {
  let priceFormatted = parseInt(price.toString());

  const handleProductClick = () => {
    updateCart();
  };

  return (
    <div className="flex flex-col card w-full rounded-lg h-full ">
      <div className="flex flex-col justify-center items-center  w-full h-full">
        <div className="flex w-full items-center justify-center h-1/2">
          <Image
            className="w-[55%]"
            src={`${photo}`}
            alt="Product Image"
            width={100}
            height={100}
          />
        </div>
        <div className="flex flex-col px-3 justify-evenly w-full items-center h-1/2">
          <div className="flex justify-between gap-2 w-full">
            <h3 className="text-sm text-[#2C2C2C]">
              {brand} - {name}
            </h3>
            <p className=" flex text-sm rounded-md items-center px-1 justify-center font-bold text-white w-28 h-10 bg-[#373737]">
              R${priceFormatted}
            </p>
          </div>
          <p className="text-xs text-[#2C2C2C]">{description}</p>
        </div>
        <button
          onClick={handleProductClick}
          className="w-full rounded-b-lg uppercase h-10 text-white flex items-center hover:opacity-60 transition justify-center gap-2"
        >
          <Image
            className="w-5"
            src={shopBag}
            alt="Shopping image"
            width={100}
            height={100}
          />
          comprar
        </button>
      </div>
    </div>
  );
}
