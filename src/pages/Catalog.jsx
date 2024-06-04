import React, { useEffect, useState } from 'react'
import Footer from '../Components/common/Footer'
import { useParams } from 'react-router-dom'
import { apiConnector } from '../services/apiConnector';
import { categories } from '../services/apis';
import { getCatalogaPageData } from '../services/operations/pageAndComponentData';
import CourseSlider from '../Components/Core/Catalog/CourseSlider';
const Catalog = () => {

    const {catalogName} = useParams();
    const [catalogPageData, setCatalogPageData] = useState(null);
    const [categoryId, setCategoryId] = useState("");

    useEffect(()=> {
        const getCategories = async() => {
            const res = await apiConnector("GET", categories.CATEGORIES_API);
            const category_id = 
            res?.data?.data?.filter((ct) => ct.name.split(" ").join("-").toLowerCase() === catalogName)[0]._id;
            setCategoryId(category_id);
        }
        getCategories();
    },[catalogName]);

    useEffect(() => {
        const getCategoryDetails = async() => {
            try{
                const res = await getCatalogaPageData(categoryId);
                console.log("PRinting res: ", res);
                setCatalogPageData(res);
            }
            catch(error) {
                console.log(error)
            }
        }
        if(categoryId) {
            getCategoryDetails();
        }
        
    },[categoryId]);
  return (
    <div className='text-richblack-5'>

        <div>
            <p>{`Home / Catalog /`}
            <span>
                {catalogPageData?.data?.selectedCategory?.name}
            </span></p>
            <p> {catalogPageData?.data?.selectedCategory?.name} </p>
            <p> {catalogPageData?.data?.selectedCategory?.description}</p>
        </div>
        
        <div>
            {/* section1 */}
            <div>
            <div>Courses to get you started</div>
                <div className=' flex gap-x-3'>
                    <p>Most Popular</p>
                    <p>New</p>
                </div>
                <div>
                    <CourseSlider Courses={catalogPageData?.data?.selectedCategory?.courses} />
                </div>
            </div>  

            {/* section2 */}
            <div>
            <div>Top Courses in {catalogPageData?.data?.selectedCategory?.name}</div>
                <div>
                    <CourseSlider Courses={catalogPageData?.data?.differentCategory?.courses}/>
                </div>
            </div>

            {/* section3 */}

        </div>
    <Footer />


    </div>
  )
}

export default Catalog