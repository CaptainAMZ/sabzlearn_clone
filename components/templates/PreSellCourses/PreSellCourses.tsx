import { useEffect, useState } from "react";
import { CourseBox, SectionHeader } from "../../../shares";
import { CourseDetailsInterface } from "../../../types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "./PreSellCourses.css";

const PreSellCourses = () => {
  const [preSellCourses, setPreSellCourses] = useState<
    CourseDetailsInterface[]
  >([]);

  useEffect(() => {
    fetch("http://localhost:4000/v1/courses/presell")
      .then((res) => res.json())
      .then((data) => {
        setPreSellCourses(data);
      });
  }, []);

  return (
    <div className="presell">
      <div className="container">
        <SectionHeader
          title="دوره های در حال پیش فروش"
          desc="متن تستی برای دوره های پیش فروش"
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
              {preSellCourses.map((item) => (
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

export default PreSellCourses;
