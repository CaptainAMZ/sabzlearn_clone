import { Topbar, Navbar, Landing } from "../../../shares";
import { useEffect, useState } from "react";
import { IndexInfos } from "../../../types";

const header = () => {
  const [indexInfo, setIndexInfo] = useState<any>({});

  useEffect(() => {
    fetch("http://localhost:4000/v1/infos/index")
      .then((res) => res.json())
      .then((data) => {
        setIndexInfo(data)
      });
  }, []);

  return (
    <header className="header">
      <Topbar />
      <Navbar />
      <Landing  />
    </header>
  );
};

export default header;
