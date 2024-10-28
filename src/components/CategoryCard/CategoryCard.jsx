
const CategoryCard = ({category}) => {

    const {
        logo,
        category_name,
        availability
    }=category;


    return (
        <div className="card bg-base-100 bg-[#F9F9FF] border w-80 px-5 py-8">
            <div className="mb-5">
                <img src={logo} alt="" />
            </div>
            <div className="">
                <h2 className="card-title mb-2">{category_name}</h2>
                <p>{availability}</p>
            </div>
        </div>
    );
};

export default CategoryCard;