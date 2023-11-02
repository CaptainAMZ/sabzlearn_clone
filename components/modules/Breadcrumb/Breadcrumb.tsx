import { Link } from "react-router-dom";
import { BreadcrumbLinkType } from "../../../types";

import "./Breadcrumb.css";

type BreadcrumbProps = {
  links: BreadcrumbLinkType[];
};

const Breadcrumb = ({ links }: BreadcrumbProps) => {
  return (
    <section className="breadcrumb">
      <div className="container">
        <div className="breadcrumb__content">
          <div className="breadcrumb__home-content-icon">
            <i className="fas fa-home breadcrumb__home-icon"></i>
          </div>
          <ul className="breadcrumb__list">
            {links.map(({ id, title, to }, index, arr) => (
              <li key={id} className="breadcrumb__item">
                <Link to={to} className="breadcrumb__link">
                  {title}
                  {id !== arr.length ? (
                    <i className="fas fa-angle-left breadcrumb__icon"></i>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
