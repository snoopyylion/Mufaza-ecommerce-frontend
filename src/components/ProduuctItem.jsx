import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';
import { BsPlus, BsEyeFill } from 'react-icons/bs'

const ProductItem = ({id, image, name, price}) => {

    const {currency} = useContext(ShopContext);

  return (
    <Link className='text-gray-700 cursor-pointer  relative group transition' to={`/product/${id}`}>
        <div className='overflow-hidden'>
            {/* <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" /> */}
            <img className='max-h-[160px] group-hover:scale-110 transition duration-300' src={image[0]} alt="" />
        </div>
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        <p className='text-sm font-medium'>{currency}{price}</p>
        {/* buttons */}
        <div className='absolute top-6 -right-11 group-hover:right-5  p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
          <button>
            <div className='flex justify-center items-center text-white w-12 h-12 rounded bg-red-500'>
              <BsPlus className='text-3xl'/>
            </div>
          </button>
          <Link to={`/product/${id}`} className='w-12 h-12 bg-white flex justify-center items-center rounded text-primary drop-shadow-xl'>
           <BsEyeFill/>
          </Link>
        </div>
        <div>2</div>
    </Link>
  )
}

export default ProductItem