import { useNavigate } from "react-router-dom";
import {
  Button,
  Footer,
  Input,
  Navbar,
  Topbar,
  emailValidator,
  maxValidator,
  minValidator,
  requiredValidator,
  useForm,
} from "../../shares";
import React from "react";
import swal from "sweetalert";

import "./ContactUs.css";

const ContactUs = () => {
  const navigate = useNavigate();
  const [formState, onInputHandler] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      phone: {
        value: "",
        isValid: false,
      },
      body: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const addNewContact = (e: React.MouseEvent) => {
    e.preventDefault();

    const newContactInfo = {
      name: formState.inputs.name!.value,
      email: formState.inputs.email!.value,
      phone: formState.inputs.phone!.value,
      body: formState.inputs.body!.value,
    };

    fetch("http://localhost:4000/v1/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newContactInfo),
    }).then((res) => {
      if (res.ok) {
        swal({
          title: "پیغام شما با موفقیت به مدیران سایت ارسال شد",
          icon: "success",
          buttons: {
            save: {
              text: "ادامه",
            },
          },
        }).then(() => {
          navigate("/");
        });
      }
    });
  };
  return (
    <>
      <Topbar />
      <Navbar />

      <section className="login-register">
        <div className="login register-form">
          <span className="login__title">ارتباط با ما</span>
          <span className="login__subtitle">
            نظر، پیشنهاد یا انتقادتو بنویس برامون :)
          </span>
          <form className="login-form">
            <div className="login-form__username login-form__parent">
              <Input
                onInputHandler={onInputHandler}
                element="input"
                id="name"
                className="login-form__username-input"
                type="text"
                placeholder="نام و نام خانوادگی"
                validation={[
                  requiredValidator(),
                  minValidator(6),
                  maxValidator(20),
                ]}
              />
              <i className="login-form__username-icon fa fa-user"></i>
            </div>
            <div className="login-form__password login-form__parent">
              <Input
                onInputHandler={onInputHandler}
                element="input"
                id="email"
                className="login-form__password-input"
                type="text"
                placeholder="آدرس ایمیل"
                validation={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(40),
                  emailValidator(),
                ]}
              />
              <i className="login-form__password-icon fa fa-envelope"></i>
            </div>
            <div className="login-form__phone-number login-form__parent">
              <Input
                onInputHandler={onInputHandler}
                element="input"
                id="phone"
                className="login-form__password-input"
                type="text"
                placeholder="شماره تماس"
                validation={[
                  requiredValidator(),
                  minValidator(10),
                  maxValidator(11),
                ]}
              />
              <i className="login-form__password-icon fa fa-phone"></i>
            </div>
            <div className="login-form__text login-form__parent">
              <Input
                onInputHandler={onInputHandler}
                element="textarea"
                id="body"
                className="login-form__text-input"
                placeholder="متن خود را وارد کنید"
                validation={[requiredValidator(), minValidator(10)]}
                type="text"
              />
            </div>
            <Button
              className={`login-form__btn ${
                formState.isFormValid === true
                  ? "login-form__btn-success"
                  : "login-form__btn-error"
              }`}
              type="submit"
              onClick={addNewContact}
              disabled={!formState.isFormValid}
            >
              <span className="login-form__btn-text">ارسال</span>
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactUs;
