import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { buyCourse } from '../services/operations/studentFeaturesAPI';
import { useNavigate, useParams } from 'react-router-dom';
import GetAvgRating from '../utils/avgRating';
import { fetchCourseDetails } from '../services/operations/courseDetailsAPI';
import Error from "./Error"
import RatingStars from "../Components/common/RatingStars"
import ConfirmationModal from "../Components/common/ConfirmationModal"
import {formatDate} from "../services/formDate"
import CourseDetailsCard from '../Components/Core/Course/CourseDetailsCard';
const CourseDetails = () => {

    const {token} = useSelector((state) => state.auth);
    const {user} = useSelector((state) => state.profile);
    const {loading} = useSelector((state) => state.profile);
    const {paymentLoading} = useSelector((state)=> state.course);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {courseId} = useParams();

    const [courseData , setCourseData] = useState(null);
    const [confirmationModal, setConfirmationModal] = useState(null);
    useEffect(()=> {
        const getCourseFullDetails = async() => {
            try{
                const result = await fetchCourseDetails(courseId);
                console.log("Printing CourseData-> " , result);
                setCourseData(result);
            }
            catch(error) {
                console.log("Could not fetch coursse details");
            }
        }
        getCourseFullDetails();
        
    }, [courseId]);


    const [avgReviewCount, setAverageReviewCount] = useState(0);

    useEffect(()=> {
        const count = GetAvgRating(courseData?.data?.courseDetails.ratingAndReviews);
        setAverageReviewCount(count);
    },[courseData])


    //no of subSections or lectues
    const [totalNoOfLectures, setTotalNoOfLectures] = useState(0);
    useEffect(()=> {
        let lectures = 0;
        courseData?.data?.courseDetails?.courseContent?.forEach((sec) => {
            lectures += sec.subSection.length || 0
        })
        setTotalNoOfLectures(lectures);

    },[courseData]);

    const handleBuyCourse = () => {
        
        if(token) {
            buyCourse(token, [courseId], user, navigate, dispatch);
            return;
        }
        setConfirmationModal({
            text1:"you are not Logged in",
            text2:"Please login to purchase the course",
            btn1Text:"Login",
            btn2Text:"Cancel",
            btn1Handler:() => navigate("/login"),
            btn2Handler:()=>setConfirmationModal(null),
        })

    }

    if(loading || !courseData) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    if(!courseData.success) {
        return (
            <div className='flex my-auto justify-center'>
                <Error />
            </div>
        )
    }
    //just destructuring so that we dont have to write the complete {{courseData.data?.courseDetails}} this thing
    const {
        _id: course_id,
        courseName,
        courseDescription,
        thumbnail:thumbNail,
        price,
        whatYouWillLearn,
        courseContent,
        ratingAndReviews,
        instructor,
        studentsEnrolled,
        createdAt,
    } = courseData.data?.courseDetails;

    return (
    <div className='flex flex-col text-white'>
        <div className='relative flex flex-col justify-start p-8'>
            <p>{courseName}</p>
            <p>{courseDescription}</p>
            <div className='flex gap-x-2'>
                <span>{avgReviewCount}</span>
                <RatingStars Review_Count={avgReviewCount} Star_Size={24} />
                <span>{`(${ratingAndReviews.length} reviews) `}</span>
                <span>{`(${studentsEnrolled.length} students enrolled)`}</span>
            </div>

            <div>
                <p>Created By {`${instructor.firstName}`}</p>
            </div>

            <div className='flex gap-x-3'>
                <p>
                    Created At {formatDate(createdAt)}
                </p>
                <p>
                    {" "} English
                </p>
            </div>

            <div>
                <CourseDetailsCard 
                    course = {courseData?.data?.courseDetails}
                    setConfirmationModal = {setConfirmationModal}
                    handleBuyCourse = {handleBuyCourse}
                />
            </div>
        </div>

        {confirmationModal && <ConfirmationModal/>}
    </div>
  )
}

export default CourseDetails