import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { createSubSection, updateSection } from '../../../../../services/operations/courseDetailsAPI';
import { setCourse } from '../../../../../Slices/courseSlice';
import ModalBtn from '../../../../common/ModalBtn';
import Upload from "../Upload"
import {RxCross1} from "react-icons/rx"

const SubSectionModal = ({
  modalData,
  setModalData,
  add = false,
  edit = false,
  view = false,
}) => {

  const {
    register,
    handleSubmit,
    setValue,
    formState: {errors},
    getValues,
  } = useForm();

  const dispatch = useDispatch();
  const {course} = useSelector((state) => state.course);
  const {token} = useSelector((state) => state.auth);
  const [loading, setLoading] = useState();

  useEffect(()=> {
    if(view || edit){
      setValue("LectureTitle", modalData.title);
      setValue("LectureDesc", modalData.description);
      setValue("LectureVideo", modalData.videoUrl);
    }
  },[]);

  const isFormUpdated = () => {
    const currentValues = getValues();
    if(currentValues.LectureTitle !== modalData.title ||
       currentValues.LectureDesc !== modalData.description ||
       currentValues.LectureVideo !== modalData.videoUrl){
        return true;
       }
       return false;
  }
  
  const handleEditSubsection = async () => {
    const currentValues = getValues();
    const formData = new FormData();
    formData.append("sectionId", modalData.sectionId);
    formData.append("subSectionId", modalData._id);
    formData.append("title", currentValues.lectureTitle);
    formData.append("description", currentValues.lectureDesc);
    formData.append("video", currentValues.lectureVideo);

    setLoading(true);
    const result = await updateSection(formData, token);

    if(result){
      dispatch(setCourse(result));
    }
    setModalData(null);
    setLoading(false);
  }

  const onSubmit = async (data) => {
    if(view)return;

    if(edit){
      if(!isFormUpdated){
        toast.error("No changes made to the form");
      }
      else{
        handleEditSubsection();
      }
      return;
    }
    //ADD CASE

    const formData = new FormData();
    formData.append("sectionId", modalData);
    formData.append("title", data.lectureTitle);
    formData.append("description", data.lectureDesc);
    formData.append("video", data.lectureVideo);
    setLoading(true);

    const result = await createSubSection(formData, token);

    if(result){
      dispatch(setCourse(result));
    }
    setModalData(null);
    setLoading(false);
  }
  return (
    <div className=''>
      <div>
        <div>
            <p>{view && "Viewing"} {add && "Adding"} {edit && "Editing"} Lecture</p>
            <button onClick={() => (!loading ? setModalData(null): {})}>
                      <RxCross1 />
            </button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
                <Upload 
                    name="lectureVideo"
                    label="Lecture Video"
                    register={register}
                    setValue={setValue}
                    errors={errors}
                    video={true}
                    viewData={view ? modalData.videoUrl: null}
                    editData={edit ? modalData.videoUrl: null}
                />
                <div>
                    <label>Lecture Title</label>
                    <input 
                        id='lectureTitle'
                        placeholder='Enter Lecture Title'
                        {...register("lectureTitle", {required:true})}
                        className='w-full'
                    />
                    {errors.lectureTitle && (<span>
                        Lecture Title is required
                    </span>)}
                </div>
                <div>
                    <label>Lecture Description</label>
                    <textarea 
                        id='lectureDesc'
                        placeholder='Enter Lecture Description'
                        {...register("lectureDesc", {required:true})}
                        className='w-full min-h-[130px]'
                    />
                    {
                        errors.lectureDesc && (<span>
                            Lecture Description is required
                        </span>)
                    }
                </div>

                {
                    !view && (
                        <div>
                            <ModalBtn
                                text={loading ? "Loading...": edit ? "Save Changes" : "Save"}
                            />
                        </div>
                    )
                }
            </form>
      </div>
    </div>
  )
}

export default SubSectionModal