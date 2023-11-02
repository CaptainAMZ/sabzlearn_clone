import { Button, FooterItem, Input, emailValidator, useForm } from "../../../shares";
import { FooterLinks, FooterQuickAccess } from "../../../constants/constants";
import { Link } from "react-router-dom";
import swal from "sweetalert";

import "./Footer.css";

const Footer = () => {
  const [formState, onInputHandler] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const addNewEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    const newEmail = {
      email: formState.inputs.email!.value,
    };

    fetch("http://localhost:4000/v1/newsletters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEmail),
    }).then((res) => {
      if (res.ok) {
        swal({
          title: "ایمیل شما با موفقیت در خبرنامه ثبت شد",
          icon: "success",
          buttons: {
            save: {
              text: "ادامه",
            },
          },
        });
      }
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-widgets">
          <div className="row">
            <FooterItem title="درباره ما">
              <p className="footer-widgets__text">
                وقتی تازه شروع به یادگیری برنامه نویسی کردم. یکی از مشکلاتی که
                در فرآیند یادگیری داشتم، کمبود آموزش های خوب با پشتیبانی قابل
                قبول بود که باعث شد اون موقع تصمیم بگیرم اگر روزی توانایی مالی و
                فنی قابل قبولی داشتم یک وب سایت برای حل این مشکل راه اندازی کنم!
                و خب امروز آکادمی آموزش برنامه نویسی سبزلرن به عنوان یک آکادمی
                خصوصی فعالیت میکنه و این به این معنی هست که هر مدرسی اجازه تدریس
                در اون رو نداره و باید از فیلترینگ های خاص آکادمی سبزلرن رد شه!
                این به این معنی هست که ما برامون فن بیان و نحوه تعامل مدرس با
                دانشجو بسیار مهمه! ما در آکادمی سبزلرن تضمین پشتیبانی خوب و با
                کیفیت رو به شما میدیم . چرا که مدرسین وب سایت سبزلرن حتی برای
                پشتیبانی دوره های رایگان شون هم هزینه دریافت میکنند و متعهد
                هستند که هوای کاربر های عزیز رو داشته باشند !
              </p>
            </FooterItem>

            <FooterItem title="آخرین مطالب">
              <div className="footer-widgets__links">
                {FooterLinks.map((text) => (
                  <a key={text} href="#" className="footer-widgets__link">
                    {text}
                  </a>
                ))}
              </div>
            </FooterItem>

            <FooterItem title="دسترسی سریع">
              <div className="row">
                {FooterQuickAccess.map((text) => (
                  <div key={text} className="col-6">
                    <a href="#" className="footer-widgets__link">
                      {text}
                    </a>
                  </div>
                ))}
                <div className="col-6">
                  <Link to="/contact-us" className="footer-widgets__link">
                    ارتباط با ما
                  </Link>
                </div>
              </div>
              <div className="col-12">
                <span className="footer-widgets__title">اشتراک در خبرنامه</span>
                <span className="footer-widgets__text text-center d-block">
                  جهت اطلاع از آخرین اخبار و تخفیف های سایت مشترک شوید!
                </span>
                <form action="#" className="footer-widgets__form">
                  <Input
                    element="input"
                    id="email"
                    type="email"
                    className="footer-widgets__input"
                    placeholder="ایمیل خود را وارد کنید."
                    onInputHandler={onInputHandler}
                    validation={[emailValidator()]}
                  />
                  <Button
                    type="submit"
                    className="footer-widgets__btn"
                    onClick={addNewEmail}
                    disabled={!formState.isFormValid}
                  >
                    عضویت
                  </Button>
                </form>
              </div>
            </FooterItem>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <span className="footer__copyright-text">
          کلیه حقوق برای آکادمی آموزش برنامه نویسی سبز لرن محفوظ است.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
