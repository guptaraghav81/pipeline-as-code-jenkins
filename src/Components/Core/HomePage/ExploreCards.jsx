import React from 'react'
import { MdOutlinePeopleOutline } from "react-icons/md";
import pythonLogo from "../../../assets/Images/python-logo.png"

const ExploreCards = ({item}) => {
  return (
    <div className='min-h-[243px] flex flex-col gap-4 w-[360px] text-black bg-white p-6 rounded-lg shadow-lg shadow-richblue-400 '>
        <div className='text-black font-bold'>
            {item.heading}
        </div>
        <div className='text-richblack-200 font-inter pb-4 min-h-[110px]'>
            {item.description}
        </div>
        <div className='flex justify-between'>
            <div className='flex gap-2 items-center font-semibold'>
              <MdOutlinePeopleOutline className='text-[27px] text-blue-600'/>
            <p className=' text-blue-200'>{item.level}</p>
            </div>
            <p className='font-semibold text-caribbeangreen-300'>{item.lessionNumber} Lession</p>
            {/* <img src={item.lessionNumber} alt="" srcset="" width={80}/> */}
        </div>
    </div>




  )
}

export default ExploreCards