import { Outlet } from "react-router-dom";
import DashboardNav from "../pages/Dashboard/DashBoardNav";


const DashboardLayout = () => {
    return (
        <div>
            <DashboardNav><Outlet /></DashboardNav>

        </div>
    );
};

export default DashboardLayout;