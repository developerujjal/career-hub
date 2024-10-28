import { useLoaderData, useParams } from "react-router-dom";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { MdOutlineSubtitles } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { savedData } from "../utility/localStroage";





const JobDetails = () => {
    const dataDetails = useLoaderData();
    const { id } = useParams();
    

    const idNumber = parseFloat(id);
    let getMatch = dataDetails.find((dataDetail) => dataDetail.id === idNumber)

    const { job_description,
        job_responsibility,
        educational_requirements,
        experiences,
        salary,
        job_title,
        contact_information } = getMatch;



        const handleApplidJob = ()=>{
            savedData(idNumber);
            
            toast("Successfully Applied");
        }


    return (
        <section>
            <div className="max-w-screen-xl px-10 mx-auto py-20">
                <div className="flex gap-6">
                    <div className="w-3/4">
                        <div>
                            <p><span className="font-bold">Job Description:</span>{job_description}</p>

                            <p className="mt-5"><span className="font-bold">Job Responsibility:</span>{job_responsibility}</p>

                            <h2 className="font-bold mt-5">Educational Requirements:</h2>
                            <p>{educational_requirements}</p>

                            <h2 className="font-bold mt-5">Experiences:</h2>
                            <p>{experiences}</p>
                        </div>
                    </div>
                    <div className="w-1/4">
                        <div className="bg-[#F4F2FE] py-6 px-6 rounded">
                            <div>
                                <h2 className="font-bold pb-4 border-b-2">Job Details</h2>
                                <div className="flex items-center gap-2 pt-4 mb-1">
                                    <span><AiOutlineDollarCircle /></span>
                                    <p> <span className="font-bold">Salary: </span>{salary}(Per Month)</p>
                                </div>
                                <div className="flex items-start justify-start gap-2 pb-5">
                                    <span className="pt-1"><MdOutlineSubtitles /></span>
                                    <p><span className="font-bold">Job Title:</span> {job_title}</p>
                                </div>
                            </div>

                            <div>
                                <h2 className="font-bold pb-4 border-b-2">Contact Information</h2>
                                <div className="flex items-center gap-2 pt-4 mb-1">
                                    <span><FaPhoneAlt /></span>
                                    <p><span className="font-bold">Phone: </span>{contact_information.phone}</p>
                                </div>

                            </div>
                            <div className="flex items-center gap-2 mb-1">
                                <span><MdEmail /></span>
                                <p><span className="font-bold">Address: </span>{contact_information.email}</p>
                            </div>
                            <div className="flex items-start justify-start gap-2 mb-1">
                                <span className="pt-1"><IoLocation /></span>
                                <p><span className="font-bold">Address: </span>{contact_information.address}</p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <button
                            onClick={handleApplidJob}
                            className="btn w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">Apply Now</button>
                        </div>

                        <ToastContainer />

                    </div>
                </div>
            </div>
        </section>
    );
};

export default JobDetails;

// #F4F2FE