import { useState, useEffect } from "react";

type useCountUpProps = {
  limit: number;
};

const useCountUp = ({ limit }: useCountUpProps) => {
  const [courseCounter, setCourseCounter] = useState<number>(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setCourseCounter((prev) => prev + 1);
    }, 10);

    courseCounter === limit && clearInterval(interval);

    return () => clearInterval(interval);
  });
  return <span className="landing-status__count">{courseCounter}</span>;
};

export default useCountUp;
