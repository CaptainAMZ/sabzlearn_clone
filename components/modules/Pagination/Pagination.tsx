import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArticlesInterface, CommentsInterface, CourseDetailsInterface } from "../../../types";

import "./Pagination.css";

type PaginationProps = {
  items: CourseDetailsInterface[] | ArticlesInterface[] | CommentsInterface[];
  itemsCount: number;
  pathname: string;
  // setShown: (item: (CourseDetailsInterface | ArticlesInterface)[]) => void;
  setShown: any;
};

const Pagination = ({
  items,
  itemsCount,
  pathname,
  setShown,
}: PaginationProps) => {
  const [pagesCount, setPagesCount] = useState<number>(1);
  const { page } = useParams();

  useEffect(() => {
    let endIndex = Number(page) * itemsCount;
    let startIndex = endIndex - itemsCount;
    let paginatedItems = items.slice(startIndex, endIndex);
    setShown(paginatedItems);

    let pageNumbers = Math.ceil(items.length / itemsCount);
    setPagesCount(pageNumbers);
  }, [page, items]);

  return (
    <div className="courses-pagination">
      <ul className="courses__pagination-list">
        {Array(pagesCount)
          .fill(0)
          .map((item, index) => (
            <li className="courses__pagination-item">
              <Link
                to={`/${pathname}/${index + 1}`}
                className={`courses__pagination-link ${
                  Number(page) === index + 1 &&
                  "courses__pagination-link--active"
                }`}
              >
                {index + 1}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Pagination;
