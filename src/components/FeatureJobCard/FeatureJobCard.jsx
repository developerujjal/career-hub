
const FeatureJobCard = ({ featuredJob }) => {
    const {
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
                    <div>
                        <span></span>
                        <p><span>{location}</span></p>
                    </div>
                    <div>
                        <span></span>
                        <p><span>{salary}</span></p>
                    </div>
                </div>
                <div className="card-actions">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default FeatureJobCard;

// card-body