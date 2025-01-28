import React, { useContext, useState } from 'react'
import { SideBarContext } from '../context/SideBarContext';
import { BsBag } from 'react-icons/bs';

 const Header = () => {

    const {isOpen, setIsOpen} = useContext(SideBarContext);
  return (
    <div>
        <div>Header</div>
        <div onClick={()=>setIsOpen(!isOpen)}>
        <BsBag className='text-2xl'/>

        </div>
    </div>
  )
}

export default Header;