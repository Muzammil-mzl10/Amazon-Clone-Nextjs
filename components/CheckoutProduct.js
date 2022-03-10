import React, { useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";
const CheckoutProduct = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
  prime
}) => {

    const [rating1, setrating] = useState(Math.floor(rating + 0.1));
    let d=0;
    const Arr = []
   for (let i=0 ; i<rating1.length ; i++)
   {
      d = d+1;
      Arr.push(d)
   }
    
    const dispatch = useDispatch();
  const addItemToBasket = ()=>{
   const product = {
    id,
    title,
    price,
    description,
    category,
    image,
    rating,
    prime
   }
    dispatch(addToBasket(product))
  }

  const removeItemFromBasket = ()=>{
    console.log({id})
      dispatch(removeFromBasket({id}))
  }
    
  return (
    <>
      <div className="grid grid-cols-5">
        <Image src={image} height={200} width={200} objectFit="contain" />

        <div className="col-span-3 mx-5">
          <p>{title}</p>
          <div className="flex">
            {  
                Arr.map((_, i) => (
                <StarIcon key={i} className="h-5 text-yellow-500" />
              ))}
          </div>

          <p className="text-xs my-2 line-clamp-3">{description}</p>

          <Currency quantity={price} currency="GBP" />

          {prime && (
              <div className="flex items-center space-x-2">
                <img 
                src="https://links.papareact.com/fdw" alt="ok" 
                loading="lazy"
                className="w-12"
                />
                <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
              </div>
          )}
        </div>
        <div className="flex flex-col space-y-2 my-auto justify-self-end">

        <button onClick={addItemToBasket} className="button">Add to Basket</button>
        <button onClick={removeItemFromBasket} className="button">Remove from Basket</button>

        </div>        

      </div>
    </>
  );
};

export default CheckoutProduct;
