import { AboutUsBox, SectionHeader } from "../../../shares";
import "./AboutUs.css";

type Props = {};

const AboutUs = (props: Props) => {
  return (
    <div className="about-us">
      <div className="container">
        <SectionHeader
          title="ما چه کمکی بهتون میکنیم؟"
          desc="از اونجایی که آکادمی آموزشی سبزلرن یک آکادمی خصوصی هست"
        />

        <div className="container">
          <div className="row">
            <AboutUsBox 
            title="دوره های اختصاصی" 
            desc="با پشتیبانی و کیفیت بالا ارائه میده !" 
            icon="copyright"
            />
            
            <AboutUsBox 
            title="دوره های اختصاصی" 
            desc="با پشتیبانی و کیفیت بالا ارائه میده !" 
            icon="copyright"
            />
            
            <AboutUsBox 
            title="دوره های اختصاصی" 
            desc="با پشتیبانی و کیفیت بالا ارائه میده !" 
            icon="copyright"
            />
            
            <AboutUsBox 
            title="دوره های اختصاصی" 
            desc="با پشتیبانی و کیفیت بالا ارائه میده !" 
            icon="copyright"
            />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
