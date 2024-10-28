import TextBox from "../TextBox/TextBox";

const FeaturedJobs = () => {

    const title = "Featured Jobs";
    const paragraphText = "Explore thousands of job opportunities with all the information you need. Its your future";
    return (
        <div>
            <TextBox title={title} paragraph={paragraphText}/>
        </div>
    );
};

export default FeaturedJobs;