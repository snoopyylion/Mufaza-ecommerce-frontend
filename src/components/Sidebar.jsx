import React, { useContext, useEffect, useState } from "react";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import CartTotal from "./CartTotal";
import { SideBarContext } from "../context/SideBarContext";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import Cart from "../pages/Cart";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SideBarContext);
  
  return (
    <div className={`${ isOpen ? 'right-0' : '-right-full' } w-[50vw] xs:w-[70vw]  bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px] `}>
      
      <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400">
        <div>
          <IoMdArrowForward className="text-2xl" onClick={handleClose} />
        </div>
        <Cart/>
      </div>
    </div>
  );
};

export default Sidebar;
