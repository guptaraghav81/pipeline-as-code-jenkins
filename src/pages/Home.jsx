import react from "react"
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import HighLightedText from "../Components/Core/HomePage/HighLightedText";
import CTAButton from "../Components/Core/HomePage/Button";
import Banner from "../assets/Images/banner.mp4"
import CodeBlocks from "../Components/Core/HomePage/CodeBlocks";
const Home = () => {
    return (
        <div>
          {/* Section 1 */}
          <div className="relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center text-white justify-between ">

            {/* Instructor Button */}
            <Link to={"/signup"}>
              <div className="group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 w-fit">
                <div className="flex flex-row items-center gap-2 px-11 py-[5px] rounded-full transition-all duration-200 group-hover:bg-richblack-900">
                  <p>Become an Instructor</p>
                  <FaArrowRight />
                </div>
              </div>
            </Link>
            {/* Heading */}
            <div className="text-center text-4xl font-semibold mt-6">
              Empower your Future with <HighLightedText text={"Coding Skills"}/>
            </div>
            {/* SubHeading */}
            <div className="w-[85%] text-semibold text-center mt-6 text-richblack-300">
              With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.
            </div>
            {/* Buttons */}
            <div className="flex flex-wor gap-6 mt-8">
              <CTAButton active={true} Linkto={"/signup"}>Learn More</CTAButton>
              <CTAButton active={false} Linkto={"/login"}>Book a Demo</CTAButton>
            </div>
            {/* Video */}
            <div className="w-[82%]  mx-3 my-11 shadow-2xl shadow-richblue-600 shadow-top">
              <video muted loop autoPlay>
                <source src={Banner} type="video/mp4" />
              </video>
            </div>

            {/* Code Section 1 */}
            <div>
              <CodeBlocks
                 position={"lg:flex-row"}
                 heading={<div className="text-4xl font-semibold">Unlock Your <HighLightedText text={"coding potential"}/> with our online courses</div>}
                 subHeading={"Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."}
                 ctabtn1={
                  {
                    text: "Try it Yorself",
                    Linkto: "/signup",
                    active:true,
                  }
                 }
                 ctabtn2={
                  {
                    text: "Learn more",
                    Linkto: "/login",
                    active:false,
                  }
                 }
codeblock={`app.get("/", (req,res) => {
        return res.status(200).json({
             success:true,
             message:"Your Server is up and running...."
      })
})

app.listen(PORT, () => {
          console.log("Server is running at http://localhost:4000");
})`}

                 codeColor={"text-yellow-25"}
              />
            </div>
          </div>
          {/* Section 2 */}
          
          {/* Section 3 */}
          
          {/* Section 4 */}
          
        </div>
    )
}

export default Home