import { useState } from "react";
import { BoxLoader } from "../../../shares";
import { CourseDetailsInterface } from "../../../types";
import "./CourseBox.css";
import { Link } from "react-router-dom";

const CourseBox = ({
  cover,
  name,
  shortName,
  price,
  isSlide = false,
  creator,
  courseAverageScore,
  discount,
}: CourseDetailsInterface) => {
  const [isImgLoaded, setIsImgLoaded] = useState<Boolean>(false);

  const onImageLoad = () => setIsImgLoaded(true);
  return (
    <div className={`${isSlide ? "w-100" : "col-4"}`}>
      <div className="course-box">
        <Link to={`course-info/${shortName}/1`}>
          <img
            src={`/images/courses/${cover}`}
            alt="Course img"
            className="course-box__img"
            onLoad={onImageLoad}
          />
          {!isImgLoaded && <BoxLoader />}
        </Link>

        <div className="course-box__main">
          <Link to={`/course-info/${shortName}/1`} className="course-box__title">
            {name}
          </Link>

          <div className="course-box__rating-teacher">
            <div className="course-box__teacher">
              <i className="fas fa-chalkboard-teacher course-box__teacher-icon"></i>
              <a href="#" className="course-box__teacher-link">
                {creator.name}
              </a>
            </div>
            <div className="course-box__rating">
              {Array(courseAverageScore)
                .fill("")
                .map((item) => (
                  <img
                    src="/images/svgs/star_fill.svg"
                    alt="rating"
                    className="course-box__star"
                  />
                ))}
              {Array(5 - courseAverageScore)
                .fill("")
                .map((item) => (
                  <img
                    src="/images/svgs/star.svg"
                    alt="rating"
                    className="course-box__star"
                  />
                ))}
            </div>
          </div>

          <div className="course-box__status">
            <div className="course-box__users">
              <i className="fas fa-users course-box__users-icon"></i>
              <span className="course-box__users-text">500</span>
            </div>
            <span className="course-box__price">
              {price === 0 ? "رایگان" : price.toLocaleString()}
            </span>
          </div>
        </div>

        <div className="course-box__footer">
          <Link
            to={`/course-info/${shortName}/1`}
            className="course-box__footer-link"
          >
            مشاهده اطلاعات
            <i className="fas fa-arrow-left course-box__footer-icon"></i>
          </Link>
        </div>
        {discount && price !== 0 && (
          <span className="courses-box__discount">{discount}</span>
        )}
      </div>
    </div>
  );
};

export default CourseBox;
