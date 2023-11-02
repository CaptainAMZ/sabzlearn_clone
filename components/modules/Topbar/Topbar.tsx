import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AllmenusType, IndexInfos } from "../../../types";

import "./Topbar.css";

type randomItemGenType = (arr: any[], count: number) => any[];
const Topbar = () => {
  const [indexInfo, setIndexInfo] = useState<any>({});
  const [allTopbarLinks, setAllTopbarLinks] = useState<AllmenusType[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/v1/menus/topbar")
      .then((res) => res.json())
      .then((data) => setAllTopbarLinks(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:4000/v1/infos/index")
      .then((res) => res.json())
      .then((data) => {
        setIndexInfo(data);
      });
  }, []);

  const randomItemGen: randomItemGenType = (arr, count) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  return (
    <div className="top-bar">
      <div className="container-fluid">
        <div className="top-bar__content">
          <div className="top-bar__right">
            <ul className="top-bar__menu">
              {randomItemGen(allTopbarLinks, 6).map(({ href, title }) => (
                <li className="top-bar__item">
                  <Link to={`/course-info/${href}`} className="top-bar__link">
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="top-bar__left">
            <div className="top-bar__email">
              <a href="#" className="top-bar__email-text top-bar__link">
                {indexInfo.email}
              </a>
              <i className="fas fa-envelope top-bar__email-icon"></i>
            </div>
            <div className="top-bar__phone">
              <a href="#" className="top-bar__phone-text top-bar__link">
                {indexInfo.phone}
              </a>
              <i className="fas fa-phone top-bar__phone-icon"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
