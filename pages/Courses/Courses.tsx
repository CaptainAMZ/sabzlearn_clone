import { useState, useEffect } from "react";
import {
  Breadcrumb,
  CourseBox,
  Footer,
  Navbar,
  Pagination,
  Topbar,
} from "../../shares";
import { coursesInfoBreadcrumb } from "../../constants/constants";
import { CourseDetailsInterface } from "../../types";
import "./Courses.css";

const Courses = () => {
  const [courses, setCourses] = useState<CourseDetailsInterface[]>([]);
  const [shownCourses, setShownCourses] = useState<CourseDetailsInterface[]>(
    []
  );
  useEffect(() => {
    fetch(`http://localhost:4000/v1/courses`)
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <>
      <Topbar />
      <Navbar />
      <Breadcrumb links={coursesInfoBreadcrumb} />
      <section className="courses">
        <div className="container">
          <div className="courses-content">
            <div className="container">
              <div className="row">
                {shownCourses.slice().map((item) => (
                  <CourseBox {...item} />
                ))}
              </div>
            </div>
          </div>
          <Pagination
            items={courses}
            itemsCount={3}
            pathname="courses"
            setShown={setShownCourses}
          />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Courses;
