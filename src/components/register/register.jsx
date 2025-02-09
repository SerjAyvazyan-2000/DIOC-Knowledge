import React, {useState} from 'react';
import logo from "../../assets/images/logo.png";
import closeImg from "../../assets/images/close.svg";
import eye from "../../assets/images/Eye.svg";
import './register.scss'
import {Link} from "react-router-dom";
import RegisterStep2 from "../registerStep2/registerStep2.jsx";
import box from "../../assets/images/box.svg";
import PasswordField from "../passwordField/passwordField.jsx";

const Register = ({close, active}) => {
    const [checked, setChecked] = useState(false);
    const [registerStep2, setRegisterStep2] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        nickname: "",
        phone: "",
        password: '',
        confirmPassword: "",
    });
    const [errors, setErrors] = useState({
        name: "",
        nickname: "",
        phone: "",
        password: "",
        confirmPassword: "",
    });
    const [touched, setTouched] = useState({
        name: false,
        nickname: false,
        phone: false,
        password: false,
        confirmPassword: false,
    });
    const validatePasswordLength = (password) => password.length >= 6;
    const validatePasswordCharacters = (password) => /^[a-zA-Z0-9]+$/.test(password);
    const validatePhoneNumber = (phone) => /^\+7\d{1,15}$/.test(phone);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});

        setTouched((prev) => ({...prev, [name]: true}));

        if (name === "phone") {
            if (!validatePhoneNumber(value)) {
                errors.phone = "Неверный формат номера";
            } else {
                errors.phone = "";

            }
            setErrors((prev) => ({...prev, ...errors}));
        }
        if (name === "password") {
            if (!validatePasswordLength(value)) {
                errors.password = "Пароль должен быть минимум 6 символов";
            } else if (!validatePasswordCharacters(value)) {
                errors.password = "Пароль должен состоять из латиницы";
            } else {
                errors.password = "";
            }
            setErrors((prev) => ({...prev, ...errors}));
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
        if (name === "confirmPassword") {
            if (value !== formData.password) {
                setErrors((prev) => ({...prev, confirmPassword: "Пароли не совпадают"}));
            } else {
                setErrors((prev) => ({...prev, confirmPassword: ""}));
            }

        }

    };

    const openRegisterStep2 = (e) => {
        e.preventDefault();

        if (!checked) {
            alert("Вы должны согласиться с политикой конфиденциальности!");
            return;
        }
        let newErrors = {
            name: formData.name ? "" : "Напишите имя",
            phone: formData.phone ? "" : "Напишите номер ",
            password: formData.password ? "" : "Напишите Пароль  ",
            confirmPassword: formData.password === formData.confirmPassword ? "" : "Пароли не совпадают",
        };
        setErrors(newErrors);
        setTouched({name: true, phone: true, password: true, confirmPassword: false});

        if (Object.values(newErrors).some((error) => error)) return;
        alert("Вы успешно прошли первый этап !");
        setRegisterStep2((prev) => !prev);
    };

    return <div className='auth-cnt'>
        <div className='auth-box  G-flex-column'>
            <div className='auth-header'>
                <div className='auth-logo'>
                    <img src={logo} alt=""/>
                </div>
                <h2 className='aut-title form-title'>Создать аккаунт</h2>
                <div className='aut-sub-title form-sub-title'>
                    <p>Добро пожаловать! Введите свои данные</p>
                </div>

                <div onClick={close} className='auth-close'>
                    <img src={closeImg} alt=""/>
                </div>
            </div>

            {!registerStep2 ? <>
                <form className='auth-form' action="">
                    <div className='auth-inputs G-flex-column '>
                        <div className='form-input G-flex-column'>
                            <label
                                className={`password-label form-label ${
                                    formData.name
                                        ? "active"
                                        : errors.name
                                            ? "error"
                                            : ""
                                }`}>
                                <input
                                    name='name'
                                    type="text"
                                    placeholder='Фамилия Имя Отчество'
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>

                        <div className='form-input G-flex-column'>
                            <div className='form-input-title G-align-start'>
                                <span>Придумайте короткое имя</span>
                            </div>
                            <label className='password-label form-label'>
                                <input
                                    name='nickname'
                                    type={'text'}
                                    placeholder='Никнейм'/>


                            </label>

                        </div>

                        <div className='form-input G-flex-column'>
                            <div className='form-input-title G-align-start'>
                                <span>{errors?.phone || "Номер телефона"}</span>
                            </div>
                            <label
                                className={`password-label form-label ${
                                    formData.phone
                                        ? "active"
                                        : errors.phone
                                            ? "error"
                                            : ""
                                }`}>


                                <input
                                    name='phone'
                                    type={'text'}
                                    placeholder='+7'
                                    value={formData.phone}
                                    onChange={handleChange}/>


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
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Повторите пароль"
                            error={errors.confirmPassword}
                            touched={touched.confirmPassword}
                        />


                    </div>


                    <div className={`register-agree agree-box G-align-center ${checked ? "checked" : ""}`}
                         onClick={() => setChecked(!checked)}>
                        <div className='agree-icon'>
                            <img src={box} alt=""/>
                        </div>
                        <div className='agree-text'>
                            Вы согласны с <Link to='/'>политикой конфиденциальности</Link>
                        </div>

                    </div>


                    <div className='form-btn-cnt G-align-start'>
                        <button onClick={openRegisterStep2} className='btn-primary'>Далее</button>
                    </div>

                </form>


            </> : <>

                <RegisterStep2 close={openRegisterStep2}/>

            </>}


        </div>
    </div>
};

export default Register;





