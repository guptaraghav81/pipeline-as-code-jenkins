import React from 'react'
import RenderSteps from './RenderSteps'

const AddCourse = () => {
  return (
    <>
        <div className='text-richblack-5'>
            <div>
                <h1>Add Course</h1>
                <div>
                    <RenderSteps/>
                </div>
            </div>
            <div>
                <p>Code Upload Tips</p>
            </div>
        </div>
    </>
  )
}

export default AddCourse