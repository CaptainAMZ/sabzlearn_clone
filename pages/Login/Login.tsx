import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Footer,
  Input,
  Navbar,
  Topbar,
  requiredValidator,
  minValidator,
  maxValidator,
  useForm,
  AuthContext,
} from "../../shares";
import swal from "sweetalert/";
import "./Login.css";

const Login = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

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
    },
    false
  );

  const userLogin = (e: React.MouseEvent): void => {
    e.preventDefault();
    const userData = {
      identifier: formState.inputs.username!.value,
      password: formState.inputs.password!.value,
    };
    fetch("http://localhost:4000/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => {
        if (!res.ok) {
          return res.text().then((text) => {
            throw new Error(text);
          });
        } else {
          return res.json();
        }
      })
      .then((res) => {
        swal({
          title: "با موفقیت وارد شدید",
          icon: "success",
          buttons: {
            save: {
              text: "ادامه",
            },
          },
        });
        authContext.login({}, res.accessToken);
      })
      .then((value) => navigate("/"))
      .catch(() =>
        swal({
          title: "چنین کاربری وجود ندارد",
          icon: "error",
          buttons: {
            save: {
              text: "بازگشت",
            },
          },
        })
      );
  };

  return (
    <>
      <Topbar />
      <Navbar />

      <section className="login-register">
        <div className="login">
          <span className="login__title">ورود به حساب کاربری</span>
          <span className="login__subtitle">
            خوشحالیم دوباره میبینیمت دوست عزیز :)
          </span>
          <div className="login__new-member">
            <span className="login__new-member-text">کاربر جدید هستید؟</span>
            <Link className="login__new-member-link" to="/register">
              ثبت نام
            </Link>
          </div>
          <form action="#" className="login-form">
            <div className="login-form__username">
              <Input
                id="username"
                element="input"
                className="login-form__username-input"
                type="text"
                placeholder="نام کاربری یا آدرس ایمیل"
                validation={[requiredValidator(), minValidator(8)]}
                onInputHandler={onInputHandler}
              />
              <i className="login-form__username-icon fa fa-user"></i>
            </div>
            <div className="login-form__password">
              <Input
                id="password"
                element="input"
                className="login-form__password-input"
                type="password"
                placeholder="رمز عبور"
                validation={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(20),
                ]}
                onInputHandler={onInputHandler}
              />
              <i className="login-form__password-icon fa fa-lock-open"></i>
            </div>
            <Button
              onClick={userLogin}
              disabled={!formState.isFormValid}
              className={`login-form__btn ${
                formState.isFormValid
                  ? "login-form__btn-success"
                  : "login-form__btn-error"
              }`}
              type="submit"
            >
              <i className="login-form__btn-icon fas fa-sign-out-alt"></i>
              <span className="login-form__btn-text">ورود</span>
            </Button>
            <div className="login-form__password-setting">
              <label className="login-form__password-remember">
                <input
                  className="login-form__password-checkbox"
                  type="checkbox"
                />
                <span className="login-form__password-text">
                  مرا به خاطر داشته باش
                </span>
              </label>
              <label className="login-form__password-forget">
                <a className="login-form__password-forget-link" href="#">
                  رمز عبور را فراموش کرده اید؟
                </a>
              </label>
            </div>
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

export default Login;
