import React from 'react'
import instructor from "../../../assets/Images/Instructor.png"
import HighLightedText from "./HighLightedText"
import CTAButton from "./Button"
import { FaArrowRight } from "react-icons/fa";
const InstructorSection = () => {
  return (
    <div className='flex gap-20 items-center'>
        <div className='mt-16 w-[50%]'>
            <img src={instructor} alt="instructorImage" srcset="" width={800} className='shadow-lg shadow-richblue-200'/>
        </div>
        <div className='w-[50%] flex flex-col gap-10 items-start'>
            <div className='text-4xl font-semibold'>Become an <HighLightedText text={"Instructor"}/></div>
            <div className='text-richblack-600 w-[90%] font-medium text-base'>
            Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.
           </div>
           <CTAButton active={true} Linkto={"/signup"}>
           <div className='flex gap-3 items-center'>
           Start Learning Today
           <FaArrowRight/>
           </div>
           </CTAButton>
        </div>
    </div>
  )
}

export default InstructorSection