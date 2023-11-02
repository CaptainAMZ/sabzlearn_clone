import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../shares";
import { Link } from "react-router-dom";
import { AllmenusType } from "../../../types";

import "./Navbar.css";

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const [allMenus, setAllMenus] = useState<AllmenusType[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/v1/menus")
      .then((res) => res.json())
      .then((data) => setAllMenus(data));
  }, []);

  return (
    <div className="main-header">
      <div className="container-fluid">
        <div className="main-header__content">
          <div className="main-header__right">
            <Link to="/">
              <img
                src="/images/logo/Logo.png"
                className="main-header__logo"
                alt="لوگوی سبزلرن"
              />
            </Link>
            <ul className="main-header__menu">
              {allMenus.map(({ title, href, submenus }) => (
                <li className="main-header__item">
                  <Link
                    to={`/category-info/${href}/1`}
                    className="main-header__link"
                  >
                    {title}
                    {submenus!.length !== 0 && (
                      <>
                        <i className="fas fa-angle-down main-header__link-icon"></i>
                        <ul className="main-header__dropdown">
                          {submenus!.map((submenu: AllmenusType) => (
                            <li className="main-header__dropdown-item">
                              <Link
                                to={`/course-info/${submenu.href}`}
                                className="main-header__dropdown-link"
                              >
                                {submenu.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="main-header__left">
            <a href="#" className="main-header__search-btn">
              <i className="fas fa-search main-header__search-icon"></i>
            </a>
            <a href="#" className="main-header__cart-btn">
              <i className="fas fa-shopping-cart main-header__cart-icon"></i>
            </a>
            {authContext.isLoggedIn ? (
              <Link to="/my-account" className="main-header__profile">
                <span className="main-header__profile-text">
                  {authContext.userInfos?.name}
                </span>
              </Link>
            ) : (
              <Link to="/login" className="main-header__profile">
                <span className="main-header__profile-text">
                  ورود / ثبت نام
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
