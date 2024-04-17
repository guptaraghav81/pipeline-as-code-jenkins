import React from 'react'
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg"
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg"
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg"
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg"
import TimeLineImage from "../../../assets/Images/TimelineImage.png"
import "../../../App.css"

const TimeLineLogo = [
    {
        logo: Logo1,
        title: "Leadership",
        content: "Fully committed to the success company",
    },
    {
        logo:   Logo2,
        title: "Responsibility",
        content: "Students will always be our top priority",
    },
    {
        logo:   Logo3,
        title: "Flexibility",
        content: "The ability to switch is an important skills",
    },
    {
        logo:   Logo4,
        title: "Solve the problem",
        content: "Code your way to a solution",
    },
]

const TimelineSection = () => {
  return (
    <div className='w-11/12 flex items-center mx-auto mt-20'>

    <div className='text-richblack-900 flex w-[89%] justify-between mx-auto items-center gap-x-4'>
        <div>
            {
                TimeLineLogo.map((item,index) => {
                    return (
                        <div className='flex pb-6 items-center gap-x-8'>
                            <div className='w-[3rem] h-[3rem] rounded-full flex justify-center items-center shadow-md shadow-richblack-400'><img src={item.logo} alt="PictureOfStudent"/></div>
                    <div className='flex flex-col'>
                    <p className='text-[1.2rem] leading-[2rem] font-semibold text-richblack-700'>{item.title}</p>
                    <p className='text-[1rem] text-richblack-700 font-semibold opacity-80 font-inter'>{item.content}</p>
                    </div>
                </div>
                )
                })
            }
        </div>
        <div className='relative shadow-lg shadow-blue-300'>
            <img src={TimeLineImage} alt="PictureOfStudent" width={600}/>
            <div className=' absolute bg-caribbeangreen-600 flex text-white py-4 rounded-md left-[50%] translate-x-[-50%] translate-y-[-35%]'>
                <div className='flex items-center gap-3 px-5 border-r-2 border-richblack-200'>
                    <p className='text-3xl font-bold '>10</p>
                    <p className=' text-[1rem] font-semibold text-caribbeangreen-200'>Years of Experience</p>
                </div>
                <div className='flex items-center gap-3 px-5 '>
                    <p className='text-3xl font-bold'>1000+</p>
                    <p className=' text-[1rem] font-semibold text-caribbeangreen-200'>Students</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default TimelineSection