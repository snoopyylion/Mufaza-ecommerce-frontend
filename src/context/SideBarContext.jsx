import React,{ createContext,  useState } from 'react'


export const SideBarContext = createContext();

const SideBarProvider = ({children}) => {
  //sidebar state

  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
      setIsOpen(false);
  };
  
  return <SideBarContext.Provider
    value={{isOpen, setIsOpen, handleClose}}>{children}</SideBarContext.Provider>;
};

export default SideBarProvider
