import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getData } from "../utility/localStroage";

const AppliedJobs = () => {
    const jobsData = useLoaderData()

    useEffect(()=>{
        const localStroageData = getData();

    },[])

    
    return (
        <div>
            <h1>Applied Jobs</h1>
        </div>
    );
};

export default AppliedJobs;