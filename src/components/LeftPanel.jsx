import React from 'react'
import { foodCategories } from '../utills/categories'
import { useLocation } from 'react-router-dom';
import {FaCarrot} from "react-icons/fa"
const LeftPanel = () => {
  const hashValue= useLocation();
  const hashReplace= hashValue.hash.toString().replace(/#/g, '');
  const spaceReplace= hashReplace.replace(/%20/g, ' ')
  return (
    <div className='my-2 xs:w-full sm:w-full  lg:w-auto'>
        <div className=' flex lg:flex-col xs:items-center xs:flex-row lg:items-start sm:items-center sm:flex-row xs:gap-1 sm:gap-1 lg:gap-2 px-6 lg:w-[15rem] xs:w-full sm:w-full customScroll xs:overflow-x-scroll sm:overflow-x-scroll lg:overflow-y-scroll xs:h-auto sm:h-auto lg:h-[85vh] lg:shadow-none sm:shadow-sm '>
            {
                foodCategories.map((el,i)=>{
                    return <a href={`#${el}`} className={`${spaceReplace==el?"lg:bg-[#5DA9E9] lg:text-white rounded-lg":"text-gray-500"} md:text-xs lg:text-[1rem] xs:text-xs font-semibold flex flex-col  sm:items-center xs:w-auto sm:w-auto md:w-full  md:items-start lg:items-start  py-3 xs:px-1 sm:px-1 lg:px-3 cursor-pointer text-gray-500`}> 
                   <FaCarrot className={` ${spaceReplace==el?"bg-[#5DA9E9]   text-white ":"bg-[#EDEDED] text-gray-400"} md:visible rounded-lg mb-1 lg:hidden w-14 h-14 p-3`} /> {el}</a>
                })
            }
        </div>
    </div>
  )
}

export default LeftPanel