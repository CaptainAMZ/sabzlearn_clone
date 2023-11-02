import { Link, useNavigate } from "react-router-dom";
import "./SideBar.css";
import { useContext } from "react";
import swal from "sweetalert";
import { AuthContext } from "../../../../shares";
import { panelSidebarMenus } from "../../../../constants/constants";

const SideBar = () => {
  const pathName = window.location.pathname.split("/");
  const query = pathName[pathName.length - 1];
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const logoutAdmin = (e: React.MouseEvent) => {
    e.preventDefault();
    swal({
      title: "با موفقیت لاگ‌آوت شدین",
      icon: "success",
      buttons: {
        save: {
          text: "ادامه",
        },
      },
    }).then(() => {
      authContext.logout();
      navigate("/");
    });
  };

  return (
    <div id="sidebar" className="col-2">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <a href="#">
            <img src="/images/logo/Logo.png" alt="Logo" />
          </a>
        </div>

        <div className="sidebar-menu-btn">
          <i className="fas fa-bars"></i>
        </div>
      </div>
      <div className="sidebar-menu">
        <ul>
          {panelSidebarMenus.map(({ title, link }) => (
            <li className={`${query === link && "active-menu"}`} key={title}>
              <Link to={`${link}`}>
                <span>{title}</span>
              </Link>
            </li>
          ))}
          <li>
            <a href="#" onClick={logoutAdmin}>
              <span>خروج</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
