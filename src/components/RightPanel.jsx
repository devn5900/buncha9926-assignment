import React, { useContext, useEffect } from 'react'
import { data } from '../utills/categories'
import Foods from './Foods'
import { handleScroll } from '../utills/helpers';
import { ActivePageContext } from '../context/ActivePage';

const RightPanel = () => {

  const {active,setActive}= useContext(ActivePageContext);
    let headings= null;
useEffect(()=>{
 headings = document.querySelectorAll('.product-heading');
},[active])
   
  const scrollDiv=(headings)=>{
     handleScroll(headings,setActive);
     
  }

  return (
    <div onScroll={()=>scrollDiv(headings)}  className=' transition-all duration-500 overflow-y-scroll relative cstScroll w-full flex flex-col gap-8   pl-5'>
        {
            data.map((el,i)=>{
                return <Foods key={i} {...el} />
            })
        }
    </div>
  )
}

export default RightPanel