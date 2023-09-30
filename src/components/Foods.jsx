import React, { useEffect } from 'react'
import Cards from './Cards'
import {LiaAngleRightSolid}from 'react-icons/lia'
import { useSelector } from 'react-redux'
import { filterOutCart } from '../utills/helpers'
const Foods = ({title,data}) => {
  const {cart}= useSelector(store=>store.reducer);

  useEffect(()=>{

  },[cart])

 
  return (
    <div id={title} >
        <h1 className=' bg-white w-full pb-2 shadow-sm  flex items-center gap-2 text-2xl font-bold product-heading'>{title} <span><LiaAngleRightSolid/></span></h1>
        <div className='flex csScroll items-center gap-8 overflow-x-scroll'>
            {
                data.map((el,i)=>{
                    const isInCart= filterOutCart(el.id,cart);
                  return  isInCart? <Cards key={i*2} {...isInCart} />:<Cards key={i*2} {...el} />
                })
            }
        </div>
    </div>
  )
}

export default Foods