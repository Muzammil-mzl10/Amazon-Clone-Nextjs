import react, { useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";

const Products = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}) => {
  //   console.log(rating);

  const [rating1, setrating] = useState(Math.floor(rating + 0.1));
  const [prime, setprime] = useState(Math.random() < 0.5);

  return (
    <>
      <div className="relative flex flex-col m-5 bg-white
      z-30 p-10">
        <p className="text-gray-400 absolute top-2 right-2 text-xs italic">{category}</p>

        <Image src={image} height={200} width={200} objectFit="contain" />
        <h4 className="my-3">{title}</h4>
        <div className="flex">
          {Array(rating1)
            .fill()
            .map((_, i) => (
              <StarIcon className="h-5 text-yellow-500" />
            ))}
        </div>

                <p className="text-xs my-2 line-clamp-2">{description}</p>

        <div className="mb-5">
          <Currency quantity={price} currency="GBP" />
        </div>
        {prime && (
          <div className="flex items-center space-x-2 -mt-5">
            <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}

        <button className="mt-auto button">Add to Basket</button>
      </div>
    </>
  );
};

export default Products;