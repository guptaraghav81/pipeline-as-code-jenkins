import React from 'react'
import HighLightedText2 from './HighLightedText2'
import knowYourProgress from "../../../assets/Images/Know_your_progress.png"
import compareWithOther from "../../../assets/Images/Compare_with_others.png"
import planYourLessons from "../../../assets/Images/Plan_your_lessons.png"
import CTAbutton from "./Button"

const LearningLanguageSection = () => {
  return (
    <div className='mt-[120px] w-11/12 mx-auto'>
    <div className='flex flex-col gap-4 w-[80%] mx-auto'>
      <div className='text-4xl font-semibold text-center'>
         Your Swiss Knife for <HighLightedText2 text={"learning any language"}/>
      </div>
      <div className='text-center text-richblack-600 w-[60%] mx-auto font-medium text-base'>
      Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.
      </div>
      {/* Boxes */}
      <div className='flex items-center justify-center mt-4 mx-auto '>
        <img src={knowYourProgress} alt="knowYourProgress" srcset="" className='-mr-36' />
        <img src={compareWithOther} alt="compareWithOthers" srcset="" className='-mr-36' />
        <img src={planYourLessons} alt="planYourLessons" srcset="" className='' />
      </div>
      <div className='flex justify-center items-center'>
        <CTAbutton active={true} Linkto={"login"}>Learn More</CTAbutton>
      </div>
    </div>
    </div>
  )
}

export default LearningLanguageSection