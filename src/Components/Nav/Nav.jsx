import React, { useState,useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Avatar from "../../images/image-avatar.png";
import Cart from "./Cart";
import {CountingContext} from "../../store/CountingProvider"

const Nav = () => {

  const {select} = useContext(CountingContext)

  const DUMMYMENU = ["Collections", "Men", "Women", "About", "Contact"];

  const [show, setShow] = useState(false);

  const handleToggle = () => setShow((pre) => !pre);

  return (
    <div className="flex fixed w-[80%] justify-between items-center border-b border-b-blue-300">
      <div className="space-x-20 flex items-center">
        <div>
          <h1 className="text-3xl font-[700]">sneakers</h1>
        </div>
        <div>
          <ul className="flex space-x-10">
            {DUMMYMENU.map((i, index) => (
              <li
                className="text-[14px] text-blue-200 font-[400] cursor-pointer py-8 after:w-full after:h-[2px] 
                relative after:absolute after:bottom-0 after:left-0 after:bg-orange-100 after:scale-x-0
                hover:after:scale-x-[1] after:duration-500"
                key={index}
              >
                {i}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex items-center space-x-5">
        <div>    
          <button className="relative" onClick={handleToggle}>
          {select > 0 && (
            <div className="absolute bg-orange-100 text-white text-[9px] -right-[8px] -top-[7px] px-[6px] rounded-lg">
              <p>{select}</p>
            </div>
          )}

          <AiOutlineShoppingCart />
          <Cart toggle={show} />
        </button>
        </div>
        <div className="w-[45px] h-[45px] rounded-full hover:ring-1 duration-500 hover:ring-orange-100 ">
          <img src={Avatar} className="object-cover" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
