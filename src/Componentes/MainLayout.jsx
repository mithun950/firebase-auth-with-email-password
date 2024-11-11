import { Outlet } from "react-router-dom";
import Header from "./Header";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
    return (
        <div className="max-w-5xl mx-auto">
            <ToastContainer />
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;