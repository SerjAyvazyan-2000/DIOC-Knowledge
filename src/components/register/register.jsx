import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import closeImg from "../../assets/images/close.svg";
import "./register.scss";
import { Link } from "react-router-dom";
import RegisterStep2 from "../registerStep2/registerStep2.jsx";
import box from "../../assets/images/box.svg";
import PasswordField from "../passwordField/passwordField.jsx";
import arrow from "../../assets/images/arrowUp.svg";
import AuthService from "../../services/authService.js";

const Register = ({ close }) => {
  const [checked, setChecked] = useState(false);
  const [registerStep2, setRegisterStep2] = useState(false);
  const [formData, setFormData] = useState({
    //step 1
    fullname: "",
    username: "",
    phone: "",
    password: "",
    password_repeat: "",
    //step 2
    company_name: "",
    industry: "",
    email: "",
    website: "",
    employee_count: 0,
    otp: "",
    policy_consent: false,
  });
  const [errors, setErrors] = useState({
    fullname: "",
    username: "",
    phone: "",
    password: "",
    password_repeat: "",
  });
  const [touched, setTouched] = useState({
    fullname: false,
    username: false,
    phone: false,
    password: false,
    password_repeat: false,
  });
  const validatePasswordLength = (password) => password.length >= 6;
  const validatePasswordCharacters = (password) =>
    /^[a-zA-Z0-9]+$/.test(password);
  const validatePhoneNumber = (phone) => /^\+7\d{1,15}$/.test(phone);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    setTouched((prev) => ({ ...prev, [name]: true }));

    if (name === "phone") {
      if (!validatePhoneNumber(value)) {
        errors.phone = "Неверный формат номера";
      } else {
        errors.phone = "";
      }
      setErrors((prev) => ({ ...prev, ...errors }));
    }
    if (name === "password") {
      if (!validatePasswordLength(value)) {
        errors.password = "Пароль должен быть минимум 6 символов";
      } else if (!validatePasswordCharacters(value)) {
        errors.password = "Пароль должен состоять из латиницы";
      } else {
        errors.password = "";
      }
      setErrors((prev) => ({ ...prev, ...errors }));
    }
    if (name === "password") {
      if (!value) {
        errors.password = "Пароль не может быть пустым";
      } else if (!validatePasswordLength(value)) {
        errors.password = "Пароль должен быть минимум 6 символов";
      } else if (!validatePasswordCharacters(value)) {
        errors.password = "Пароль должен состоять из латиницы";
      } else {
        errors.password = "";
      }
    }
    if (name === "password_repeat") {
      if (value !== formData.password) {
        setErrors((prev) => ({
          ...prev,
          password_repeat: "Пароли не совпадают",
        }));
      } else {
        setErrors((prev) => ({ ...prev, password_repeat: "" }));
      }
    }
  };

  const handleStep2Change = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSliderChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      employee_count: e.value,
    }));
  };

  const openRegisterStep2 = (e) => {
    e.preventDefault();

    if (!checked) {
      alert("Вы должны согласиться с политикой конфиденциальности!");
      return;
    }
    let newErrors = {
      fullname: formData.fullname ? "" : "Напишите имя",
      phone: formData.phone ? "" : "Напишите номер ",
      password: formData.password ? "" : "Напишите Пароль  ",
      password_repeat:
        formData.password === formData.password_repeat
          ? ""
          : "Пароли не совпадают",
    };
    setErrors(newErrors);
    setTouched({
      fullname: true,
      phone: true,
      password: true,
      password_repeat: false,
    });

    if (Object.values(newErrors).some((error) => error)) return;
    setRegisterStep2((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await AuthService.register(formData);
      close();
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <div className="auth-cnt">
      <div className="auth-box  G-flex-column">
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
          <h2 className="aut-title form-title">Создать аккаунт</h2>
          <div className="aut-sub-title form-sub-title">
            <p>Добро пожаловать! Введите свои данные</p>
          </div>

          <div onClick={close} className="auth-close">
            <img src={closeImg} alt="" />
          </div>
        </div>

        {!registerStep2 ? (
          <>
            <form className="auth-form" action="">
              <div className="auth-inputs G-flex-column ">
                <div className="form-input G-flex-column">
                  <label
                    className={`password-label form-label ${
                      formData.fullname
                        ? "active"
                        : errors.fullname
                        ? "error"
                        : ""
                    }`}
                  >
                    <input
                      name="fullname"
                      type="text"
                      placeholder="Фамилия Имя Отчество"
                      value={formData.fullname}
                      onChange={handleChange}
                    />
                  </label>
                </div>

                <div className="form-input G-flex-column">
                  <div className="form-input-title G-align-start">
                    <span>Придумайте короткое имя</span>
                  </div>
                  <label className="password-label form-label">
                    <input
                      name="username"
                      type={"text"}
                      placeholder="Никнейм"
                      value={formData.username}
                      onChange={handleChange}
                    />
                  </label>
                </div>

                <div className="form-input G-flex-column">
                  <div className="form-input-title G-align-start">
                    <span>{errors?.phone || "Номер телефона"}</span>
                  </div>
                  <label
                    className={`form-label ${
                      formData.phone && !errors.phone
                        ? "active"
                        : errors.phone
                        ? "error"
                        : ""
                    }`}
                  >
                    <input
                      name="phone"
                      type={"text"}
                      placeholder="+7"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </label>
                </div>

                <PasswordField
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Придумайте пароль"
                  error={errors.password}
                  touched={touched.password}
                />
                <PasswordField
                  name="password_repeat"
                  value={formData.password_repeat}
                  onChange={handleChange}
                  placeholder="Повторите пароль"
                  error={errors.password_repeat}
                  touched={touched.password_repeat}
                />
              </div>

              <div
                className={`register-agree agree-box G-align-center ${
                  checked ? "checked" : ""
                }`}
                onClick={() => setChecked(!checked)}
              >
                <div className="agree-icon">
                  <img src={box} alt="" />
                </div>
                <div className="agree-text">
                  Вы согласны с <Link to="/">политикой конфиденциальности</Link>
                </div>
              </div>

              <div className="form-btn-cnt G-align-start">
                <button onClick={openRegisterStep2} className="btn-primary">
                  Далее
                </button>
              </div>
            </form>
          </>
        ) : (
          <>
            <RegisterStep2
              close={openRegisterStep2}
              formData={formData}
              onChange={handleStep2Change}
              onSliderChange={handleSliderChange}
              onSubmit={handleSubmit}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Register;
