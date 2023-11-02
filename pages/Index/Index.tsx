import {
  AboutUs,
  Footer,
  Header,
  LatestArticles,
  LatestCourse,
  PopularCourses,
  PreSellCourses,
} from "../../shares";

type Props = {};

const Index = (props: Props) => {
  return (
    <>
      <Header />
      <LatestCourse />
      <AboutUs />
      <PopularCourses />
      <PreSellCourses />
      <LatestArticles />
      <Footer />
    </>
  );
};

export default Index;
