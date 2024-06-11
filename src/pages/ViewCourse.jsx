import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useParams } from 'react-router-dom';
import { getFullDetailsOfCourse } from '../services/operations/courseDetailsAPI';
import { setCompletedLectures, setCourseSectionData, setEntireCourseData, setTotalNoOfLectures } from '../Slices/viewCourseSlice';
import VideoDetailsSidebar from '../Components/Core/ViewCourse/VideoDetailsSidebar';
import CourseReviewModal from '../Components/Core/ViewCourse/CourseReviewModal';

const ViewCourse = () => {

    const [reviewModal, setReviewModal] = useState(false);
    const {courseId} = useParams();
    const {token} = useSelector((state)=>state.auth);
    const dispatch = useDispatch();

    useEffect(()=> {
        const setCourseSpecificDetails = async() => {
              const courseData = await getFullDetailsOfCourse(courseId, token);
            //   subsection data will be in the section only 
              dispatch(setCourseSectionData(courseData.courseDetails.courseContent));
              dispatch(setEntireCourseData(courseData.courseDetails));
              //see the controllers youll get it we are sending it in it.
              dispatch(setCompletedLectures(courseData.completedVideos));
              let lectures = 0;
              courseData?.courseDetails?.courseContent?.forEach((sec) => {
                lectures += sec.subSection.length
              })  
              dispatch(setTotalNoOfLectures(lectures));
        }
        setCourseSpecificDetails();
    },[]);
  return (
    <>
    <div>
        <VideoDetailsSidebar setReviewModal={setReviewModal}/>
        <div>
            <Outlet/>
        </div>
    </div>
    {reviewModal && <CourseReviewModal setReviewModal={setReviewModal} />}
    </>
  )
}

export default ViewCourse