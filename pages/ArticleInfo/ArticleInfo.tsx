import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Breadcrumb,
  CommentsTextArea,
  Footer,
  Navbar,
  Topbar,
} from "../../shares";
import { articleInfoBreadcrumb } from "../../constants/constants";
import {
  ArticlesInterface,
  CategoryIDInterface,
  CreatorInterface,
} from "../../types";
import DOMPurify from "dompurify";

import "./ArticleInfo.css";

const ArticleInfo = () => {
  const { articleName } = useParams();
  const [articleDetails, setArticleDetails] = useState<ArticlesInterface>();
  const [articleCategory, setArticleCategory] = useState<
    CategoryIDInterface & { description: string }
  >();
  const [articleCreator, setArticleCreator] = useState<CreatorInterface>();
  const [articleCreateDate, setArticleCreateDate] = useState<string>();

  useEffect(() => {
    fetch(`http://localhost:4000/v1/articles/${articleName}`)
      .then((res) => res.json())
      .then((data) => {
        setArticleDetails(data);
        setArticleCategory(data.categoryID);
        setArticleCreator(data.creator);
        setArticleCreateDate(data.createdAt);
      });
  }, [articleName]);
  return (
    <>
      <Topbar />
      <Navbar />
      <Breadcrumb links={articleInfoBreadcrumb} />
      <main className="main">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <div className="article">
                <h1 className="article__title">{articleDetails?.title}</h1>
                <div className="article__header">
                  <div className="article-header__category article-header__item">
                    <i className="far fa-folder article-header__icon"></i>
                    <a href="#" className="article-header__text">
                      {articleCategory?.title}
                    </a>
                  </div>
                  <div className="article-header__category article-header__item">
                    <i className="far fa-user article-header__icon"></i>
                    <span className="article-header__text">
                      ارسال شده توسط {articleCreator?.name}
                    </span>
                  </div>
                  <div className="article-header__category article-header__item">
                    <i className="far fa-clock article-header__icon"></i>
                    <span className="article-header__text">
                      {articleCreateDate?.slice(0, 10)}
                    </span>
                  </div>
                  <div className="article-header__category article-header__item">
                    <i className="far fa-eye article-header__icon"></i>
                    <span className="article-header__text"> 2.14k بازدید</span>
                  </div>
                </div>
                <img
                  src="/images/blog/1.jpg"
                  alt="Article Cover"
                  className="article__banner"
                />

                <div className="article__score">
                  <div className="article__score-icons">
                    <img
                      src="/images/svgs/star_fill.svg"
                      className="article__score-icon"
                    />
                    <img
                      src="/images/svgs/star_fill.svg"
                      className="article__score-icon"
                    />
                    <img
                      src="/images/svgs/star_fill.svg"
                      className="article__score-icon"
                    />
                    <img
                      src="/images/svgs/star_fill.svg"
                      className="article__score-icon"
                    />
                    <img
                      src="/images/svgs/star.svg"
                      className="article__score-icon"
                    />
                  </div>
                  <span className="article__score-text">
                    4.2/5 - (5 امتیاز)
                  </span>
                </div>

                <p className="article__paragraph paragraph">
                  جاوا اسکریپت یکی از زبان‌های برنامه‌نویسی اصلی حوزه فرانت‌اند
                  است که به واسطه فریم ورک‌های آن می‌توان انواع وب سایت‌ها،
                  اپلیکیشن‌ها و وب اپلیکیشن‌ها را طراحی کرد. به طور کلی بعد از
                  یادگیری html و css معمولاً باید آموزش جاوا اسکریپت را نیز فرا
                  بگیرید. . چرا که این زبان تکمیل‌کننده html و css بوده و در
                  چنین شرایطی موقعیت‌های شغلی بیشتر را در اختیار خواهید داشت و
                  همچنین می‌توانید پروژه‌های گسترده‌تری را انجام دهید. در حال
                  حاضر با وجود منابع رایگان موجود در وب شما به راحتی می‌توانید
                  زبان جاوا اسکریپت را به صورت حرفه‌ای فرا بگیرید. به همین واسطه
                  در ادامه مطلب قصد داریم سایت‌های شاخص آموزش این زبان
                  برنامه‌نویسی در جهان را به شما معرفی کنیم و در آخر بگوییم که
                  بهترین سایت آموزش جاوا اسکریپت کدام است.
                </p>

                <div className="article-read">
                  <span className="article-read__title">
                    آنچه در این مقاله خواهید خواند
                  </span>
                  <ul className="article-read__list">
                    <li className="article-read__item">
                      <a href="#" className="article-read__link">
                        معرفی بهترین سایت ‌های آموزش جاوا اسکریپت:
                      </a>
                    </li>
                    <li className="article-read__item">
                      <a href="#" className="article-read__link">
                        یک راه آسان‌تر، دوره‌ های جاوا اسکریپت آکادمی سبزلرن!
                      </a>
                    </li>
                    <li className="article-read__item">
                      <a href="#" className="article-read__link">
                        ثبت نام در دوره‌ های جاوا اسکریپت سبزلرن:
                      </a>
                    </li>
                  </ul>
                </div>

                <img
                  src="/images/blog/2.jpg"
                  alt="Article Image"
                  className="article__seconadary-banner"
                />
                <div
                  className="article-section"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(articleDetails?.body),
                  }}
                >
                  {/* <h2 className="article-section__title">
                    معرفی بهترین سایت ‌های آموزش جاوا اسکریپت:
                  </h2>
                  <p className="paragraph article-section__text">
                    توجه داشته باشید که تمام وب سایت‌هایی که به عنوان بهترین
                    سایت آموزش جاوا اسکریپت در ادامه معرفی می‌کنیم، بین‌المللی
                    هستند و منابع موجود در آن‌ها به زبان انگلیسی است. در نتیجه
                    شما باید یا تسلط متوسط و حداقلی به زبان انگلیسی داشته باشید
                    و یا اینکه با استفاده از گوگل ترنسلیت منابع موجود را ترجمه
                    کرده و از آن‌ها استفاده کنید. به همین دلیل در انتهای محتوا
                    به شما خواهیم گفت که راه آسان دیگری برای یادگیری زبان جاوا
                    اسکریپت وجود دارد که شما بتوانید به واسطه آن به صورت رایگان
                    و به زبان فارسی این زبان را یاد بگیرید.
                  </p>
                  <img
                    src="/images/blog/4.png"
                    alt="article body img"
                    className="article-section__img"
                  /> */}
                </div>

                <div className="article-social-media">
                  <span className="article-social-media__text">
                    اشتراک گذاری :
                  </span>
                  <a href="#" className="article-social-media__link">
                    <i className="fab fa-telegram-plane article-social-media__icon"></i>
                  </a>
                  <a href="#" className="article-social-media__link">
                    <i className="fab fa-twitter article-social-media__icon"></i>
                  </a>
                  <a href="#" className="article-social-media__link">
                    <i className="fab fa-facebook-f article-social-media__icon"></i>
                  </a>
                </div>

                <div className="suggestion-articles">
                  <div className="row">
                    <div className="col-6">
                      <div className="suggestion-articles__right suggestion-articles__content">
                        <a href="#" className="suggestion-articles__icon-link">
                          <i className="fas fa-arrow-right suggestion-articles__icon"></i>
                        </a>
                        <a href="#" className="suggestion-articles__link">
                          سریع ترین و بهترین راه یادگیری جاوا اسکریپت چیست؟ |
                          تجربه برنامه نویسان
                        </a>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="suggestion-articles__left suggestion-articles__content">
                        <a href="#" className="suggestion-articles__icon-link">
                          <i className="fas fa-arrow-left suggestion-articles__icon"></i>
                        </a>
                        <a href="#" className="suggestion-articles__link">
                          سریع ترین و بهترین راه یادگیری جاوا اسکریپت چیست؟ |
                          تجربه برنامه نویسان
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <CommentsTextArea comments={[]} /> */}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ArticleInfo;
