import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getData } from "../utility/localStroage";
import FeatureJobCard from "../FeatureJobCard/FeatureJobCard";
import DropDown from "../DropDown/DropDown";
// import AppliedJobsCard from "../AppliedJobsCard/AppliedJobsCard";

const AppliedJobs = () => {
    const jobsData = useLoaderData()
    const [displayDatas, setDisplayDatas] = useState([])
    const [filterDisplayDatas, setFilterDisplayDatas]= useState([])

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
            setFilterDisplayDatas(appliedjobsData)
        }
    }, [])


    const handleFilter = filter =>{
        if(filter === "all"){
            setFilterDisplayDatas(displayDatas)
        }
        else if(filter === "remote"){
            const remoteDatas = displayDatas.filter(data => data.remote_or_onsite === "Remote")
            setFilterDisplayDatas(remoteDatas)
        }
        else if(filter === "onsite"){
            const onsiteData = displayDatas.filter(data => data.remote_or_onsite === "Onsite")
            setFilterDisplayDatas(onsiteData)
        }
    }


    return (
        <section>
            <div className="max-w-screen-xl px-10 mx-auto py-20">
                <div className="text-right pr-20">
                    {
                        <DropDown handleFilter={handleFilter}></DropDown>
                    }
                </div>
                <div className="flex justify-center items-center flex-col">
                    <h1 className="mb-10"><span className="font-bold">Applied Jobs:</span> {displayDatas.length}</h1>
                    <div>
                        {
                            filterDisplayDatas.map((jobItem, index) => <FeatureJobCard featuredJob={jobItem} key={index} isBookmark={true}/>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppliedJobs;