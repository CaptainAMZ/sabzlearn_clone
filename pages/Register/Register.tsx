import { useContext } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Footer,
  Input,
  Navbar,
  Topbar,
  useForm,
  requiredValidator,
  minValidator,
  maxValidator,
  emailValidator,
  AuthContext,
} from "../../shares";

import "./Register.css";
import swal from "sweetalert";

const Register = () => {
  const authContext = useContext(AuthContext);

  const [formState, onInputHandler] = useForm(
    {
      username: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
      phone: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      name: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const registerNewUser = (e: React.MouseEvent): void => {
    e.preventDefault();
    const newUserInfo = {
      name: formState.inputs.name?.value,
      username: formState.inputs.username?.value,
      phone: formState.inputs.phone?.value,
      email: formState.inputs.email?.value,
      password: formState.inputs.password?.value,
      confirmPassword: formState.inputs.password?.value,
    };

    fetch("http://localhost:4000/v1/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUserInfo),
    })
      .then((res) => {
        if (res.ok) return res.json();
        else {
          if (res.status === 403)
            swal({
              title: "این شماره تماس مسدود شده است",
              icon: "error",
              buttons: {
                item: {
                  text: "بازگشت",
                },
              },
            });
        }
      })
      .then((result) => {
        authContext.login(result.user, result.accessToken);
      });
  };
  return (
    <>
      <Topbar />
      <Navbar />

      <section className="login-register">
        <div className="login register-form">
          <span className="login__title">ساخت حساب کاربری</span>
          <span className="login__subtitle">
            خوشحالیم قراره به جمع ما بپیوندی
          </span>
          <div className="login__new-member">
            <span className="login__new-member-text">
              قبلا ثبت‌نام کرده‌اید؟{" "}
            </span>
            <Link className="login__new-member-link" to="/login">
              وارد شوید
            </Link>
          </div>
          <form action="#" className="login-form">
            <div className="login-form__username">
              <Input
                element="input"
                className="login-form__username-input"
                type="text"
                placeholder="نام و نام خانوادگی"
                id="name"
                onInputHandler={onInputHandler}
                validation={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(20),
                ]}
              />
              <i className="login-form__username-icon fa fa-user"></i>
            </div>
            <div className="login-form__username">
              <Input
                element="input"
                className="login-form__username-input"
                type="text"
                placeholder="نام کاربری"
                id="username"
                onInputHandler={onInputHandler}
                validation={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(20),
                ]}
              />
              <i className="login-form__username-icon fa fa-user"></i>
            </div>
            <div className="login-form__username">
              <Input
                element="input"
                className="login-form__username-input"
                type="text"
                placeholder="شماره همراه"
                id="phone"
                onInputHandler={onInputHandler}
                validation={[
                  requiredValidator(),
                  minValidator(10),
                  maxValidator(11),
                ]}
              />
              <i className="login-form__username-icon fa fa-user"></i>
            </div>
            <div className="login-form__password">
              <Input
                element="input"
                className="login-form__password-input"
                type="text"
                placeholder="آدرس ایمیل"
                id="email"
                onInputHandler={onInputHandler}
                validation={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(30),
                  emailValidator(),
                ]}
              />
              <i className="login-form__password-icon fa fa-envelope"></i>
            </div>
            <div className="login-form__password">
              <Input
                element="input"
                className="login-form__password-input"
                type="text"
                placeholder="رمز عبور"
                id="password"
                onInputHandler={onInputHandler}
                validation={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(30),
                ]}
              />
              <i className="login-form__password-icon fa fa-lock-open"></i>
            </div>
            <Button
              disabled={!formState.isFormValid}
              type="submit"
              onClick={registerNewUser}
              className={`login-form__btn ${
                formState.isFormValid
                  ? "login-form__btn-success"
                  : "login-form__btn-error"
              }`}
            >
              <i className="login-form__btn-icon fa fa-user-plus"></i>
              <span className="login-form__btn-text">عضویت</span>
            </Button>
          </form>
          <div className="login__des">
            <span className="login__des-title">سلام کاربر محترم:</span>
            <ul className="login__des-list">
              <li className="login__des-item">
                لطفا از مرورگر های مطمئن و بروز مانند گوگل کروم و فایرفاکس
                استفاده کنید.
              </li>
              <li className="login__des-item">
                ما هرگز اطلاعات محرمانه شمارا از طریق ایمیل درخواست نمیکنیم.
              </li>
              <li className="login__des-item">
                لطفا کلمه عبور خود را در فواصل زمانی کوتاه تغییر دهید.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Register;
