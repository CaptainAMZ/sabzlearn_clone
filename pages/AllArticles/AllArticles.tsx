import { useEffect, useState } from "react";
import {
  Breadcrumb,
  Footer,
  Navbar,
  Topbar,
  ArticleBox,
  Pagination,
} from "../../shares";
import { allArticlesBreadcrumb } from "../../constants/constants";
import { ArticlesInterface } from "../../types";

import "./AllArticles.css";

const AllArticles = () => {
  const [allArticles, setAllArticles] = useState<ArticlesInterface[]>([]);
  const [shownArticles, setShownArticles] = useState<ArticlesInterface[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/v1/articles")
      .then((res) => res.json())
      .then((data) => {
        setAllArticles(data);
      });
  }, []);

  return (
    <>
      <Topbar />
      <Navbar />
      <Breadcrumb links={allArticlesBreadcrumb} />
      <section className="courses">
        <div className="container">
          <div className="courses-content">
            <div className="container">
              <div className="row">
                {shownArticles
                  .map((item) => (
                    <ArticleBox {...item} />
                  ))}
              </div>
            </div>
          </div>
          <Pagination
            items={allArticles.filter((item) => item.publish === 1)}
            itemsCount={2}
            pathname="articles"
            setShown={setShownArticles}
          />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AllArticles;
