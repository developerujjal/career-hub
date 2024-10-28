import { useEffect, useState } from "react";
import CategoryCard from "../CategoryCard/CategoryCard";
import TextBox from "../TextBox/TextBox";

const CategoryList = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('./categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    const title = "Job Category List";
    const paragraphText = "Explore thousands of job opportunities with all the information you need. Its your future";

    return (
        <div>
            <TextBox title={title} paragraph={paragraphText} />

            <div className="flex gap-5 justify-center px-36 ">
                {
                    categories.map((category) => <CategoryCard category={category} key={category.id} />)
                }
            </div>
        </div>
    );
};

export default CategoryList;