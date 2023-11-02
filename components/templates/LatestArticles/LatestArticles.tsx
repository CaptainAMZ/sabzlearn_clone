import { useState, useEffect } from "react";
import { ArticleBox, SectionHeader } from "../../../shares";
import "./LatestArticles.css";
import { ArticlesInterface } from "../../../types";

const LatestArticles = () => {
  const [articles, setArticles] = useState<ArticlesInterface[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/v1/articles")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
      });
  }, []);

  return (
    <div className="articles">
      <div className="container">
        <SectionHeader
          title="جدیدترین مقاله ها"
          desc="پیش به سوی ارتقای دانش"
          btnTitle="تمامی مقاله ها"
          btnHref="articles/1"
        />
        <div className="articles__content">
          <div className="row">
            {articles
              .filter((item) => item.publish === 1)
              .map((item) => (
                <ArticleBox {...item} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestArticles;
