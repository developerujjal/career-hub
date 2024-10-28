import { IoLocationOutline } from "react-icons/io5";
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import { Link } from "react-router-dom";


const FeatureJobCard = ({ featuredJob }) => {
    const {
        id,
        logo,
        job_title,
        company_name,
        remote_or_onsite,
        location,
        job_type,
        salary
    } = featuredJob;


    return (
        <div className="card card-compact bg-base-100 w-2/5 border p-6">
            <div className="mb-3">
                <img
                    src={logo}
                    alt="" />
            </div>
            <div className="">
                <h2 className="card-title">{job_title}</h2>
                <h3>{company_name}</h3>
                <div className="my-4">
                    <button className="btn btn-outline btn-primary mr-4">{remote_or_onsite}</button>
                    <button className="btn btn-outline btn-primary">{job_type}</button>
                </div>
                <div className="flex gap-5 mb-5">
                    <div className="flex gap-1 items-center">
                        <span><IoLocationOutline></IoLocationOutline></span>
                        <p><span>{location}</span></p>
                    </div>
                    <div className="flex gap-1 items-center">
                        <span><HiMiniCurrencyDollar></HiMiniCurrencyDollar></span>
                        <p><span>{salary}</span></p>
                    </div>
                </div>
                <div className="card-actions">
                    <Link to={`/job/${id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default FeatureJobCard;

// card-body