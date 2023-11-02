import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CourseBox, Footer, Navbar, Pagination, Topbar } from "../../shares";
import { CourseDetailsInterface } from "../../types";
import { orderStatus } from "../../constants/constants";

import "./Category.css";

const Category = () => {
  const [courses, setCourses] = useState<CourseDetailsInterface[]>([]);
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const [shownCourses, setShownCourses] = useState<CourseDetailsInterface[]>(
    []
  );

  const [orderedCourses, setOrderedCourses] = useState<
    CourseDetailsInterface[]
  >([]);
  const [status, setStatus] = useState<string>();
  const [statusTitle, setStatusTitle] = useState<string>("مرتب سازی پیش فرض");
  const [searchValue, setSearchValue] = useState<string>("");
  const [courseDisplayType, setCourseDisplayType] = useState<"row" | "col">(
    "row"
  );

  useEffect(() => {
    fetch(`http://localhost:4000/v1/courses/category/${categoryName}`)
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        setOrderedCourses(data);
      });
  }, [categoryName]);

  useEffect(() => {
    switch (status) {
      case "latest": {
        navigate(`/category-info/${categoryName}/1`);
        setOrderedCourses(courses);
        break;
      }
      case "cheapest": {
        navigate(`/category-info/${categoryName}/1`);
        const cheapestCourses = courses
          .slice()
          .sort((a, b) => a.price - b.price);
        setOrderedCourses(cheapestCourses);
        break;
      }
      case "most expensive": {
        navigate(`/category-info/${categoryName}/1`);
        const expensiveCourses = courses
          .slice()
          .sort((a, b) => b.price - a.price);
        setOrderedCourses(expensiveCourses);
        break;
      }
      default: {
        navigate(`/category-info/${categoryName}/1`);
        setOrderedCourses(courses);
        break;
      }
    }
  }, [status]);

  const clickHandler = (title: string, status: string) => {
    setStatusTitle(title);
    setStatus(status);
  };

  const searchValueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    navigate(`/category-info/${categoryName}/1`);
    setSearchValue(e.target.value);
    const filteredCourses = courses.filter((course) =>
      course.name.includes(e.target.value)
    );
    setOrderedCourses(filteredCourses);
  };

  return (
    <>
      <Topbar />
      <Navbar />
      <section className="courses">
        <div className="container">
          <div className="courses-content">
            <div className="container">
              <div className="row">
                {courses.length === 0 ? (
                  <div className="alert alert-warning">دوره ای یافت نشد</div>
                ) : (
                  <>
                    <div className="courses-top-bar">
                      <div className="courses-top-bar__right">
                        <div
                          className={`courses-top-bar__row-btn ${
                            courseDisplayType === "row"
                              ? "courses-top-bar__icon--active"
                              : null
                          }`}
                          onClick={() => setCourseDisplayType("row")}
                        >
                          <i className="fas fa-border-all courses-top-bar__icon"></i>
                        </div>
                        <div
                          className={`courses-top-bar__column-btn ${
                            courseDisplayType === "col"
                              ? "courses-top-bar__icon--active"
                              : null
                          }`}
                          onClick={() => setCourseDisplayType("col")}
                        >
                          <i className="fas fa-align-left courses-top-bar__icon"></i>
                        </div>

                        <div className="courses-top-bar__selection">
                          <span className="courses-top-bar__selection-title">
                            {statusTitle}
                            <i className="fas fa-angle-down courses-top-bar__selection-icon"></i>
                          </span>
                          <ul className="courses-top-bar__selection-list">
                            {orderStatus.map(({ title, status }) => (
                              <li
                                onClick={() => clickHandler(title, status)}
                                className={`courses-top-bar__selection-item ${
                                  statusTitle === title
                                    ? "courses-top-bar__selection-item--active"
                                    : null
                                }`}
                              >
                                {title}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="courses-top-bar__left">
                        <form action="#" className="courses-top-bar__form">
                          <input
                            type="text"
                            className="courses-top-bar__input"
                            placeholder="جستجوی دوره ..."
                            value={searchValue}
                            onChange={searchValueChangeHandler}
                          />
                          <i className="fas fa-search courses-top-bar__search-icon"></i>
                        </form>
                      </div>
                    </div>

                    {shownCourses.length !== 0 ? (
                      courseDisplayType === "row" ? (
                        shownCourses.map((item) => (
                          <>
                            <CourseBox {...item} />
                          </>
                        ))
                      ) : (
                        <>
                          {shownCourses.map((course) => (
                            <div className="col-12">
                              <div className="course-box">
                                <div className="course__box-header">
                                  <div className="course__box-right">
                                    <a
                                      className="course__box-right-link"
                                      href="#"
                                    >
                                      <img
                                        src="/images/courses/fareelancer.png"
                                        className="course__box-right-img"
                                      />
                                    </a>
                                  </div>
                                  <div className="course__box-left">
                                    <div className="course__box-left-top">
                                      <a
                                        href="#"
                                        className="course__box-left-link"
                                      >
                                        {course.name}
                                      </a>
                                    </div>
                                    <div className="course__box-left-center">
                                      <div className="course__box-left-teacher">
                                        <i className="course__box-left-icon fa fa-chalkboard-teacher"></i>
                                        <span className="course__box-left-name">
                                          محمد امین سعیدی راد
                                        </span>
                                      </div>
                                      <div className="course__box-left-stars">
                                        {Array(course.courseAverageScore)
                                          .fill("")
                                          .map((item) => (
                                            <span className="course__box-left-star">
                                              <img src="/images/svgs/star_fill.svg" />
                                            </span>
                                          ))}
                                      </div>
                                    </div>
                                    <div className="course__box-left-bottom">
                                      <div className="course__box-left-des">
                                        <p>{course.description}</p>
                                      </div>
                                    </div>
                                    <div className="course__box-footer">
                                      <div className="course__box-footer-right">
                                        <i className="course__box-footer-icon fa fa-users"></i>
                                        <span className="course__box-footer-count">
                                          202
                                        </span>
                                      </div>
                                      <span className="course__box-footer-left">
                                        {course.price === 0
                                          ? "رایگان"
                                          : course.price.toLocaleString()}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </>
                      )
                    ) : (
                      <div className="alert alert-warning">
                        دوره ای با این مشخضات یافت نشد
                      </div>
                    )}

                    <Pagination
                      items={orderedCourses}
                      itemsCount={3}
                      pathname={`category-info/${categoryName}`}
                      setShown={setShownCourses}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Category;
