import React from 'react'
import {AiOutlineMinus,AiOutlinePlus} from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { AddToCartAction, RemoveFromCartAction } from '../redux/cart/actions';
const Cards = ({id,image,name,cal,price,newPrice,quantity}) => {
  const dispatch= useDispatch();

  const addTOCart=()=>{
    const data={id,image,name,cal,price,newPrice}
    dispatch(AddToCartAction(data));
  }
  const removeFromCart=(id)=>{
    dispatch(RemoveFromCartAction(id))
  }
  return (
    <div className='py-3'>
        <div className=' w-24 h-24 overflow-hidden relative'>
            <img src={image} className=' aspect-square object-cover' alt="" />
            {quantity?<span onClick={()=>removeFromCart(id)} className='absolute bg-[#40D589] text-md font-bold right-0 bottom-2 cursor-pointer text-white w-8 h-8 rounded-full flex items-center justify-center'><AiOutlineMinus/></span>:
            <span onClick={addTOCart} className='absolute bg-[#40D589] text-md font-bold right-0 bottom-2 cursor-pointer text-white w-8 h-8 rounded-full flex items-center justify-center'><AiOutlinePlus/></span>}
            
        </div>
        <div className='flex flex-col gap-2'>
            <div className='text-sm font-semibold flex items-center gap-4'>
            {newPrice&&<p className='text-gray-400 line-through'>${newPrice}</p>}
            <p>${price}</p>
            </div>
            <p className='text-sm font-semibold'>{name}</p>
            <p className='text-xs font-semibold text-gray-400'>{cal}</p>
        </div>
    </div>
  )
}

export default Cards