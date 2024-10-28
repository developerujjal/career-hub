import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error)
    return (
        <div className="text-center flex flex-col justify-center items-center min-h-screen">
            <h1 className="text-3xl font-bold">{error.status}</h1>
            {
                error.status === 404 && (
                    <div>
                        <h1 className="text-lg mb-2">This Page Empty, Please Go Back to the Home!</h1>
                        <Link to={'/'}><button className="btn btn-outline">Home</button></Link>
                    </div>
                )
            }
        </div>
    );
};

export default ErrorPage;