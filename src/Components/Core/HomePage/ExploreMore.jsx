import React, { useState } from 'react'
import { HomePageExplore } from '../../../data/homepage-explore';
import HighLightedText from './HighLightedText';
import ExploreCards from './ExploreCards';
const TabsName= [
    "Free",
    "New to coding",
    "Most popular",
    "Skills paths",
    "Career paths"
];
const ExploreMore = () => {
    const [currenTab, setCurrentTab] = useState(TabsName[0]);
    const [course, setCourse] = useState(HomePageExplore[0].courses);
    const [currentCard, setCurrentCard] = useState(HomePageExplore[0].courses[0].heading);
    const setMyCards = (value) => {
        setCurrentTab(value);
        const result= HomePageExplore.filter((course) => course.tag === value);
        setCourse(result[0].courses);
        setCurrentCard(result[0].courses[0].heading)
    }
  return (
    <>
        <div className='flex flex-col gap-1 relative mb-24'>
           <div className='text-4xl font-semibold text-center'>
               Unlock the <HighLightedText text={"power of Code"}/>
           </div>
            <p className='text-center text-richblack-200 text-[1.2rem] font-semibold'>Learn to build anything you can imagine</p>

        <div className='flex gap-4 mt-6 rounded-xl bg-richblack-800 mb-7 py-2 px-4 justify-between'>
            {
                TabsName.map((item,index) => {
                    return (
                        <div className={`text-[1.2rem] ${currenTab === item ? "bg-richblack-900 text-richblack-5 font-medium" : "text-richblack-200"} rounded-full  transition-all duration-100 cursor-pointer hover:bg-richblack-900 hover:text-richblack-5 px-3 py-2`} key={index} onClick={() => setMyCards(item)}>
                            {item}
                        </div>
                    )
                })
            }
        </div>

        <div className=' flex items-center gap-x-8 mt-4 absolute z-20 mx-auto top-48 -translate-x-56'>
            {
                course.map((item,index) => {
                    return (
                        <ExploreCards item={item} key={index}/>
                    )
                })
            }
        </div>
        </div>
        </>
  )
}

export default ExploreMore