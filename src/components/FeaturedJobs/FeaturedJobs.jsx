import { useEffect, useState } from "react";
import TextBox from "../TextBox/TextBox";
import FeatureJobCard from "../FeatureJobCard/FeatureJobCard";

const FeaturedJobs = () => {
    const [featuredJobs, setFeatureJobs] = useState([])

    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setFeatureJobs(data))
    },[])


    const title = "Featured Jobs";
    const paragraphText = "Explore thousands of job opportunities with all the information you need. Its your future";


    return (
        <div>
            <TextBox title={title} paragraph={paragraphText}/>
            <div className="flex flex-wrap gap-10 justify-center px-36 ">
                {
                    featuredJobs.map(featuredJob=> <FeatureJobCard featuredJob={featuredJob} key={featuredJob.id}></FeatureJobCard>)
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;