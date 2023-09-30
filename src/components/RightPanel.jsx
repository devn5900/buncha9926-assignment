import React, { useEffect } from 'react'
import { data } from '../utills/categories'
import Foods from './Foods'
import { handleScroll } from '../utills/helpers';

const RightPanel = () => {

  
    let headings= null;
useEffect(()=>{
 headings = document.querySelectorAll('.product-heading');
},[])
   


  return (
    <div onScroll={()=>handleScroll(headings)}  className=' transition-all duration-500 overflow-y-scroll relative cstScroll w-full flex flex-col gap-8   pl-5'>
        {
            data.map((el,i)=>{
                return <Foods key={i} {...el} />
            })
        }
    </div>
  )
}

export default RightPanel