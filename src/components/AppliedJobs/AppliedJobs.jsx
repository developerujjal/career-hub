import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getData } from "../utility/localStroage";
import FeatureJobCard from "../FeatureJobCard/FeatureJobCard";
// import AppliedJobsCard from "../AppliedJobsCard/AppliedJobsCard";

const AppliedJobs = () => {
    const jobsData = useLoaderData()
    const [displayDatas, setDisplayDatas] = useState([])

    useEffect(() => {
        const localStroageData = getData();
        if (jobsData.length > 0) {

            //First Method with includes
            /*  const appliedjobsData = jobsData.filter(job => localStroageData.includes(job.id)) */

            //Second Method with Push in new Arraw

            const appliedjobsData = []
            for (let id of localStroageData) {
                const exist = jobsData.find(job => job.id === id)
                if (exist) {
                    appliedjobsData.push(exist)
                }
            }
            setDisplayDatas(appliedjobsData)
        }
    }, [])


    return (
        <section>
            <div className="max-w-screen-xl px-10 mx-auto py-20">
                <div className="flex justify-center items-center flex-col">
                    <h1 className="mb-10"><span className="font-bold">Applied Jobs:</span> {displayDatas.length}</h1>
                    <div>
                        {
                            displayDatas.map((jobItem, index) => <FeatureJobCard featuredJob={jobItem} key={index} isBookmark={true}/>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppliedJobs;