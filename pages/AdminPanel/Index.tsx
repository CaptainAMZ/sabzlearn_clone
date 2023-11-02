import { SideBar, TopBar } from "../../shares";
import { Outlet } from "react-router-dom";
import "./Index.css";

const AdminPanel = () => {
  return (
    <>
      <div id="content">
        <SideBar />
        <div id="home" className="col-10">
          <TopBar />
          <div className="container-fluid" id="home-content">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
