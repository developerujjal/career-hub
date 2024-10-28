import CategoryList from "../CategoryList/CategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import HeroSection from "../HeroSection/HeroSection";

const Home = () => {
    return (
        <>
            <section>
                <HeroSection />
            </section>

            <section className="pt-20 pb-10">
                <CategoryList />
            </section>

            <section className="pt-20 pb-10">
                <FeaturedJobs />
            </section>
        </>

    )
};

export default Home;