import react from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

const Header = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const Items = useSelector(selectItems);


  return (
    <>
      <header>
        <div className="flex items-center flex-grow p-1  bg-amazon_blue pt-2">
          <div className=" mt-2 flex items-center sm:flex-grow-0 flex-grow">
            <Image
              onClick={() => router.push("/")}
              src="https://links.papareact.com/f90"
              width={150}
              height={40}
              alt="Okay"
              objectFit="contain"
              className="cursor-pointer"
            />
          </div>
          <div
            className="hidden sm:flex items-center h-10 rounded-md flex-grow bg-yellow-400 
          cursor-pointer hover:bg-yellow-500"
          >
            <input
              type="text"
              className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
            />
            <SearchIcon className="h-12 p-4" />
          </div>
          <div className="text-white flex items-center text-xs space-x-6 mx-5 whitespace-nowrap">
            <div
              onClick={!session ? signIn : signOut}
              className="cursor-pointer link"
            >
              <p className="hover:underline">
                {session ? `Hello, ${session.user.name}` : "Sign In"}
              </p>
              <p className="font-extrabold md:text-sm">Account & List</p>
            </div>
            <div className="cursor-pointer  link">
              <p>Returns</p>
              <p className="font-extrabold md:text-sm">& Orders</p>
            </div>

            <div
              onClick={() => router.push("/checkout")}
              className=" relative cursor-pointer link flex items-center"
            >
              <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
               {Items.length}
              </span>
              <ShoppingCartIcon className="h-10" />
              <p className="hidden md:inline font-extrabold md:text-sm mt-2">
                Basket
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center bg-amazon_blue-light text-white text-sm space-x-3 p-2 pl-6">
          <p className="link flex items-center ">
            <MenuIcon className="h-6 mr-1" />
            All
          </p>
          <p className="link ">Prime Video</p>
          <p className="link ">Amazon Business</p>
          <p className="link ">Todays Deals</p>
          <p className="link hidden lg:inline-flex">Electronics</p>
          <p className="link hidden lg:inline-flex">Food & Grocery</p>
          <p className="link hidden lg:inline-flex">Prime</p>
          <p className="link hidden lg:inline-flex">Buy Apple</p>
          <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
          <p className="link hidden lg:inline-flex">Health & Personal Care </p>
        </div>
      </header>
    </>
  );
};

export default Header;
