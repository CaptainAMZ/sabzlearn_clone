import { useState, useEffect } from "react";
import {
  ArticleBox,
  CourseBox,
  Footer,
  Navbar,
  SectionHeader,
  Topbar,
} from "../../shares";
import { CourseDetailsInterface, ArticlesInterface } from "../../types";
import { useParams } from "react-router-dom";

import "./Search.css";

const Search = () => {
  const [courses, setCourses] = useState<CourseDetailsInterface[]>([]);
  const [articles, setArticles] = useState<ArticlesInterface[]>([]);
  const { value } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/v1/search/${value}`)
      .then((res) => res.json())
      .then((data) => {
        setCourses(data.allResultCourses);
        setArticles(data.allResultArticles);
      });
  }, [value]);

  return (
    <>
      <Topbar />
      <Navbar />
      <div className="courses">
        <div className="container">
          <SectionHeader
            title="نتیجه جست و جو در میان دوره ها"
            desc="سکوی پرتاب شما به سمت موفقیت"
          />
          <div className="courses-content">
            <div className="container">
              <div className="row">
                {courses.length === 0 ? (
                  <div className="alert alert-warning">
                    دوره ای برای جست و جوی شما یافت نشد
                  </div>
                ) : (
                  courses.map((item) => <CourseBox key={item._id} {...item} />)
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="courses">
        <div className="container">
          <SectionHeader
            title="نتیجه جست و جو در میان مقاله ها"
            desc="سکوی پرتاب شما به سمت موفقیت"
          />
          <div className="courses-content">
            <div className="container">
              <div className="row">
                {articles.length === 0 ? (
                  <div className="alert alert-warning">
                    مقاله ای برای جست و جوی شما یافت نشد
                  </div>
                ) : (
                  articles.map((item) => (
                    <ArticleBox key={item._id} {...item} />
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Search;
