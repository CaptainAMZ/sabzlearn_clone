import { useEffect, useState } from "react";
import { CourseBox, SectionHeader } from "../../../shares";
import { CourseDetailsInterface } from "../../../types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./PopularCourses.css";

const PopularCourses = () => {
  const [popularCourses, setPopularCourses] = useState<
    CourseDetailsInterface[]
  >([]);

  useEffect(() => {
    fetch("http://localhost:4000/v1/courses/popular")
      .then((res) => res.json())
      .then((data) => {
        setPopularCourses(data);
      });
  }, []);
  return (
    <div className="popular">
      <div className="container">
        <SectionHeader
          title="محبوب ترین دوره ها"
          desc="دوره های محبوب بر اساس امتیاز دانشجو ها"
        />
        <div className="articles__content">
          <div className="row">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              className="mySwiper"
            >
              {popularCourses.map((item) => (
                <SwiperSlide>
                  <CourseBox {...item} isSlide={true} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCourses;
