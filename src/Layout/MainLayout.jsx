import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";

const MainLayout = () => {
    return (
      <div className="">
        <Header className="max-w-[1140px] mx-auto"></Header>
        <Outlet></Outlet>
      </div>
    );
};

export default MainLayout;