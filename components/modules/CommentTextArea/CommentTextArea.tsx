import React, { useContext, useState } from "react";
import { CommentsInterface } from "../../../types";
import { AuthContext, Pagination } from "../../../shares";
import { useParams } from "react-router-dom";

import "./CommentsTextArea.css";
import { Link } from "react-router-dom";

type CommentsTextAreaProps = {
  comments: CommentsInterface[] | [];
  submitComment: any;
};

export default function CommentsTextArea({
  comments,
  submitComment,
}: CommentsTextAreaProps) {
  const { courseName, commentsPage } = useParams();
  const [newcommentBody, setNewCommentBody] = useState<any>();
  const [commentScore, setCommentScore] = useState<string>("-1");
  const authContext = useContext(AuthContext);
  const [shownComments, setShownComments] = useState([]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setNewCommentBody(e.target.value);
  };

  const selectOnchangeHandler = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setCommentScore(e.target.value);
  };

  return (
    <div className="comments">
      <div className="comments__header">
        <div className="comments__header-icon-content">
          <i className="comments__header-icon far fa-comment"></i>
        </div>
        <span className="comments__header-title">نظرات</span>
      </div>
      <div className="comments__content">
        {comments.length === 0 ? (
          <div className="alert alert-warning">
            هنوز کامنتی برای این دوره ثبت نشده
          </div>
        ) : (
          <>
            {comments.map((comment: CommentsInterface) => (
              <>
                <div className="comments__item" key={comment._id}>
                  <div className="comments__question">
                    <div className="comments__question-header">
                      <div className="comments__question-header-right">
                        <span className="comments__question-name comment-name">
                          {comment.creator.name}
                        </span>
                        <span className="comments__question-status comment-status">
                          {comment.creator.role === "ADMIN" ? "مدیر" : "کاربر"}
                        </span>
                        <span className="comments__question-date comment-date">
                          {comment.createdAt.slice(0, 10)}
                        </span>
                      </div>
                      <div className="comments__question-header-left">
                        <a
                          className="comments__question-header-link comment-link"
                          href="#"
                        >
                          پاسخ
                        </a>
                      </div>
                    </div>
                    <div className="comments__question-text">
                      <p className="comments__question-paragraph comment-paragraph">
                        {comment.body}
                      </p>
                    </div>
                    {comment.answerContent && (
                      <div className="comments__item">
                        <div className="comments__question">
                          <div className="comments__question-header">
                            <div className="comments__question-header-right">
                              <span className="comments__question-name comment-name">
                                {comment.answerContent.creator.name}
                              </span>
                              <span className="comments__question-status comment-status">
                                {comment.answerContent.creator.role === "ADMIN"
                                  ? "مدیر"
                                  : "کاربر"}
                              </span>
                              <span className="comments__question-date comment-date">
                                {comment.answerContent.createdAt.slice(0, 10)}
                              </span>
                            </div>
                            <div className="comments__question-header-left">
                              <a
                                className="comments__question-header-link comment-link"
                                href="#"
                              >
                                پاسخ
                              </a>
                            </div>
                          </div>
                          <div className="comments__question-text">
                            <p className="comments__question-paragraph comment-paragraph">
                              {comment.answerContent.body}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </>
            ))}
            {/* <Pagination
              items={comments}
              itemsCount={5}
              setShown={setShownComments}
              pathname={`/course-info/${courseName}/1`}
            /> */}
            {/* <div className="comments__pagantion">
              <ul className="comments__pagantion-list">
                <li className="comments__pagantion-item">
                  <a href="#" className="comments__pagantion-link">
                    <i className="fas fa-long-arrow-alt-right comments__pagantion-icon"></i>
                  </a>
                </li>
                <li className="comments__pagantion-item">
                  <a href="#" className="comments__pagantion-link">
                    1
                  </a>
                </li>
                <li className="comments__pagantion-item">
                  <a href="#" className="comments__pagantion-link">
                    2
                  </a>
                </li>
                <li className="comments__pagantion-item">
                  <a
                    href="#"
                    className="comments__pagantion-link comments__pagantion-link--active"
                  >
                    3
                  </a>
                </li>
              </ul>
            </div> */}
          </>
        )}
      </div>
      {authContext.isLoggedIn === true ? (
        <>
          <div className="comments__rules">
            <span className="comments__rules-title">قوانین ثبت دیدگاه</span>
            <span className="comments__rules-item">
              <i className="fas fa-check comments__rules-icon"></i>
              اگر نیاز به پشتیبانی دوره دارید از قسمت پرسش سوال در قسمت نمایش
              انلاین استفاده نمایید و سوالات مربوط به رفع اشکال تایید نخواهند شد
            </span>
            <span className="comments__rules-item">
              <i className="fas fa-check comments__rules-icon"></i>
              دیدگاه های نامرتبط به دوره تایید نخواهد شد.
            </span>
            <span className="comments__rules-item">
              <i className="fas fa-check comments__rules-icon"></i>
              سوالات مرتبط با رفع اشکال در این بخش تایید نخواهد شد.
            </span>
            <span className="comments__rules-item">
              <i className="fas fa-check comments__rules-icon"></i>
              از درج دیدگاه های تکراری پرهیز نمایید.
            </span>
          </div>
          <div className="comments__respond">
            <div className="comments__score">
              <span className="comments__score-title">امتیاز شما</span>
              <div className="col-12">
                <select
                  className="form-select form-control font-style"
                  onChange={selectOnchangeHandler}
                >
                  <option value="-1">
                    امتیاز خود نسبت به دوره را ثبت کنید
                  </option>
                  <option value="5">عالی</option>
                  <option value="4">خوب</option>
                  <option value="3">متوسط</option>
                  <option value="2">بد</option>
                  <option value="1">خیلی بد</option>
                </select>
              </div>
            </div>
            <div className="comments__respond-content">
              <div className="comments__respond-title">دیدگاه شما *</div>
              <textarea
                className="comments__score-input-respond "
                onChange={onChangeHandler}
              >
                {newcommentBody}
              </textarea>
            </div>
            <button
              type="submit"
              className="comments__respond-btn"
              onClick={() => submitComment(newcommentBody, commentScore)}
            >
              ارسال
            </button>
          </div>
        </>
      ) : (
        <div className="alert alert-danger">
          برای ثبت کامنت باید <Link to={"/login"}>وارد شوید</Link>
        </div>
      )}
    </div>
  );
}
