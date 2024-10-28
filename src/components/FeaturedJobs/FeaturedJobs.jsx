import { useEffect, useState } from "react";
import TextBox from "../TextBox/TextBox";
import FeatureJobCard from "../FeatureJobCard/FeatureJobCard";

const FeaturedJobs = () => {
    const [featuredJobs, setFeatureJobs] = useState([])
    const [dataLoads, setDataLoads]=useState(4)

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setFeatureJobs(data))
    }, [])


    const title = "Featured Jobs";
    const paragraphText = "Explore thousands of job opportunities with all the information you need. Its your future";


    return (
        <div>
            <TextBox title={title} paragraph={paragraphText} />
            <div className="flex flex-wrap gap-10 justify-center px-24 ">
                {
                    featuredJobs.slice(0, dataLoads).map((featuredJob, index) => <FeatureJobCard featuredJob={featuredJob} key={index}></FeatureJobCard>)
                }
            </div>
            <div className={`text-center mt-10 ${dataLoads === featuredJobs.length && 'hidden' }`}>
                <button onClick={()=> setDataLoads(featuredJobs.length)} className="btn btn-accent">Show All</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;