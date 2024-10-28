
const TextBox = ({ title, paragraph }) => {
    return (
        <div className=" text-center">
            <div className="px-80">
                <h1 className="text-4xl font-bold">{title}</h1>
                <p className="py-6">{paragraph}</p>
            </div>
        </div>
    );
};

export default TextBox;