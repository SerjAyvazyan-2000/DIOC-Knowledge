import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import closeImg from "../../assets/images/close.svg";
import eye from "../../assets/images/Eye.svg";
import "./login.scss";
import Reset from "../reset/reset.jsx";
import box from "../../assets/images/box.svg";
import AuthService from "../../services/authService";

const Login = ({ close }) => {
  const [checked, setChecked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [reset, setReset] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  const handleReset = () => {
    setReset((prev) => !prev);
  };
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "email") {
      if (!validateEmail(value)) {
        setErrors((prev) => ({ ...prev, email: "Неверный формат почты" }));
      } else {
        setErrors((prev) => ({ ...prev, email: "" }));
      }
    }

    if (name === "password") {
      if (!validatePassword(value)) {
        setErrors((prev) => ({
          ...prev,
          password: "Пароль должен быть от 6 символов",
        }));
      } else {
        setErrors((prev) => ({ ...prev, password: "" }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {
      email: validateEmail(formData.email) ? "" : "Неверный формат почты",
      password: validatePassword(formData.password)
        ? ""
        : "Пароль должен быть от 6 символов",
    };

    setErrors(newErrors);
    setTouched({ email: true, password: true });

    if (newErrors.email || newErrors.password) return;

    try {
      await AuthService.login(formData);
    } catch (error) {
      console.error("Login error:", error);
    }

    alert("Форма отправлена:");
  };

  return (
    <div className="auth-cnt">
      <div className="auth-box login-box G-flex-column">
        {!reset ? (
          <>
            <div className="auth-header">
              {/*<div onClick={close} className='mobile-back-btn G-align-center'>*/}
              {/*    <div className='back-icon'>*/}
              {/*        <img src={arrow} alt=""/>*/}
              {/*    </div>*/}
              {/*    <span>Назад</span>*/}
              {/*</div>*/}
              <div className="auth-logo">
                <img src={logo} alt="" />
              </div>
              <h2 className="aut-title form-title">Войти в аккаунт</h2>
              <div className="aut-sub-title form-sub-title">
                <p>Добро пожаловать! Введите свои данные</p>
              </div>

              <div onClick={close} className="auth-close">
                <img src={closeImg} alt="" />
              </div>
            </div>

            <form className="auth-form" action="">
              <div className="auth-inputs G-flex-column ">
                <div className={`form-input G-flex-column`}>
                  <div className="form-input-title G-align-start">
                    <span>{errors.email || "Электронная почта"}</span>
                  </div>
                  <label
                    className={`form-label ${
                      errors.email ? "error" : touched.email ? "active" : ""
                    }`}
                  >
                    <input
                      name="email"
                      type="email"
                      placeholder="mail@youcompany.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </label>
                </div>

                <div className={`form-input G-flex-column `}>
                  <div className="form-input-title G-align-start">
                    <span>{errors.password || "Пароль"}</span>
                  </div>
                  <label
                    className={`form-label password-label ${
                      errors.password
                        ? "error"
                        : touched.password
                        ? "active"
                        : ""
                    }`}
                  >
                    <input
                      name="password"
                      type={isVisible ? "text" : "password"}
                      value={formData.password}
                      onChange={handleChange}
                      placeholder={"Пароль"}
                    />
                    <div onClick={toggleVisibility} className="eye">
                      <img src={eye} alt="" />
                    </div>
                  </label>
                </div>
              </div>
              <div className="remember-block G-justify-between">
                <div
                  className={`remember-check G-align-center ${
                    checked ? "checked" : ""
                  }`}
                  onClick={() => setChecked(!checked)}
                >
                  <div className="remember-icon">
                    <img src={box} alt="" />
                  </div>

                  <div className="remember-text">Запомнить меня</div>
                </div>
                <button onClick={handleReset} className="forgot-password">
                  Забыли пароль?
                </button>
              </div>
              <div className="form-btn-cnt G-align-start">
                <button onClick={handleSubmit} className="btn-primary">
                  Войти
                </button>
              </div>
            </form>
          </>
        ) : (
          <Reset close={handleReset} />
        )}
      </div>
    </div>
  );
};

export default Login;
