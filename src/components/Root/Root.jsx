import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Root = () => {
    return (
        <main>
            <header>
                <Header />
            </header>
            <div>
                <Outlet />
            </div>
            <Footer />
        </main>
    );
};

export default Root;