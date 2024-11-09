import { Outlet } from "react-router-dom";
import Header from "./Header";


const Main1 = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main1;