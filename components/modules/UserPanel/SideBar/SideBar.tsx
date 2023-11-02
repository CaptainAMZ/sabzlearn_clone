import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import {useContext} from 'react'
import { AuthContext } from '../../../../shares';

const SideBar = () => {
    const authContext = useContext(AuthContext);
    const navigate = useNavigate();
  
    const logoutUser = (e) => {
      e.preventDefault();
  
      swal({
        title: "آیا از خروج اطمینان داری؟",
        icon: "warning",
        buttons: ["نه", "آره"],
      }).then((result) => {
        console.log(result);
        if (result) {
          swal({
            title: "با موفقیت خارج شدید",
            icon: "success",
            buttons: "اوکی",
          }).then(() => {
            authContext.logout();
            navigate("/");
          });
        }
      });
    };
  
    return (
      <div className="col-3">
        <div className="sidebar">
          <span className="sidebar__name">محمدامین سعیدی راد</span>
          <ul className="sidebar__list">
            <li className="sidebar__item">
              <Link className="sidebar__link" to="/my-account">
                پیشخوان
              </Link>
            </li>
            <li className="sidebar__item">
              <Link className="sidebar__link" to="orders">
                سفارش‌ها
              </Link>
            </li>
            <li className="sidebar__item">
              <a className="sidebar__link" href="#">
                کیف پول من
              </a>
            </li>
            <li className="sidebar__item">
              <Link className="sidebar__link" to="edit-account">
                جزئیات حساب کاربری
              </Link>
            </li>
            <li className="sidebar__item">
              <Link className="sidebar__link" to="buyed">
                دوره های خریداری شده
              </Link>
            </li>
            <li className="sidebar__item">
              <Link className="sidebar__link" to="tickets">
                تیکت های پشتیبانی
              </Link>
            </li>
            <li className="sidebar__item" onClick={logoutUser}>
              <a className="sidebar__link" href="#">
                خروج از سیستم
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }

export default SideBar