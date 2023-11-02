import { useState, useEffect } from "react";
import { CourseBox, SectionHeader } from "../../../shares";
import { CourseDetailsInterface } from "../../../types";

import "./LatestCourse.css";

type Props = {};

const LatestCourse = (props: Props) => {
  const [allCourses, setAllCourses] = useState<CourseDetailsInterface[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/v1/courses")
      .then((res) => res.json())
      .then((data) => setAllCourses(data));
  }, []);
  return (
    <div className="courses">
      <div className="container">
        <SectionHeader
          title="جدیدترین دوره ها"
          desc="سکوی پرتاپ شما به سمت موفقیت"
          btnTitle="تمامی دوره ها"
          btnHref="courses/1"
        />

        <div className="courses-content">
          <div className="container">
            <div className="row">
              {allCourses.splice(0, 6).map((item) => (
                <CourseBox {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestCourse;
