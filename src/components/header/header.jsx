import React, {useEffect, useState} from 'react';
import './header.scss'
import {Link} from "react-router-dom";
import logo from '../../assets/images/logo.png'
import Modal from "../modal/modal.jsx";
import CallBack from "../callBack/callBack.jsx";
import Login from "../login/login.jsx";
import Register from "../register/register.jsx";
import closeImg from "../../assets/images/close.svg";
import eye from "../../assets/images/Eye.svg";
import RegisterStep2 from "../registerStep2/registerStep2.jsx";
import Reset from "../reset/reset.jsx";

const Header = () => {
        const [isActive, setIsActive] = useState(false);
        const [scrolled, setScrolled] = useState(false);
        const [callBack, setCallBack] = useState(false);
        const [login, setLogin] = useState(false);
        const [register, setRegister] = useState(false);
        const [isVisible, setIsVisible] = useState(false);
        const [reset, setReset] = useState(false);
        const [checked, setChecked] = useState(false);
        const [registerStep2, setRegisterStep2] = useState(false);
        const [errors, setErrors] = useState({});
        const [formData, setFormData] = useState({
            email: "",
            password: "",
        });
        const [touched, setTouched] = useState({}); // Чтобы отслеживать, было ли поле в фокусе


        const openRegisterStep2 = () => {
            setRegisterStep2((prev) => !prev);
        };


        useEffect(() => {
            const handleScroll = () => {
                setScrolled(window.scrollY > 0);
            };

            window.addEventListener("scroll", handleScroll);
            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }, []);

        const handleCallBack = () => {
            setCallBack(!callBack);
        }
        const handleLogin = () => {
            setLogin(!login);
        }
        const handleRegister = () => {
            setRegister(!register);

        }
        const toggleBurger = () => {
            setIsActive((prev) => !prev);
        };
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

        const validateForm = () => {
            let newErrors = {};

            if (!validateEmail(formData.email)) {
                newErrors.email = "Неверный формат почты";
            }

            if (!validatePassword(formData.password)) {
                newErrors.password = "Пароль должен быть не менее 6 символов";
            }

            setErrors(newErrors);
            return Object.keys(newErrors).length === 0;
        };

        const handleChange = (e) => {
            const {name, value} = e.target;
            setFormData({
                ...formData,
                [name]: value,
            });

            setTouched({...touched, [name]: true}); // Фиксируем, что поле было изменено

            if (name === "email") {
                if (!validateEmail(value)) {
                    setErrors((prev) => ({...prev, email: "Неверный формат почты"}));
                } else {
                    setErrors((prev) => {
                        const {email, ...rest} = prev;
                        return rest;
                    });
                }
            }

            if (name === "password") {
                if (!validatePassword(value)) {
                    setErrors((prev) => ({...prev, password: "Пароль должен быть не менее 6 символов"}));
                } else {
                    setErrors((prev) => {
                        const {password, ...rest} = prev;
                        return rest;
                    });
                }
            }
        };

        const handleSubmit = (event) => {
            event.preventDefault();
            console.log("Форма не должна обновляться!");
            if (!checked) {
                alert("Нужно согласиться с политикой!");
                return;
            }

            if (validateForm()) {
                console.log("Форма отправлена:", formData);
            }
        };

        return <>
            <header className={`header ${scrolled ? "moved" : ""}`}>
                <div className='header-container'>

                    <div className='header-body G-justify-between'>
                        <div className='header-menu G-align-center'>
                            <Link className='header-logo' to="/">
                                <img src={logo} alt=""/>
                            </Link>
                            <nav className={`menu ${isActive ? "active" : ""}`}>

                                {!login && !register && !reset ? <>
                                    <div className='menu-mobile-box '>
                                        <button onClick={handleRegister}
                                                className='bnt-register btn-primary'>Зарегистрироваться
                                        </button>
                                        <button onClick={handleLogin} className='bnt-login'>Войти</button>
                                    </div>
                                    <ul className='menu-list G-align-center'>
                                        <li className='menu-item menu-mobile-item'>
                                            <Link onClick={handleCallBack} className='menu-link' to={''}>Заказать обратный
                                                звонок</Link>
                                        </li>
                                        <li className='menu-item'>
                                            <Link className='menu-link' to={''}>Продукт</Link>
                                        </li>
                                        <li className='menu-item'>
                                            <Link className='menu-link' to={''}>Цены</Link>
                                        </li>
                                    </ul>

                                </> : null}


                                {login && <div className='login-mobile'>

                                    {!reset ? <>

                                        <div className='auth-header'>
                                            <h2 className='aut-title form-title'>Войти в аккаунт</h2>
                                            <div className='aut-sub-title form-sub-title'>
                                                <p>Добро пожаловать! Введите свои данные</p>
                                            </div>

                                        </div>

                                        <form  className='auth-form'>
                                            <div className='auth-inputs G-flex-column '>

                                                <div className={`form-input G-flex-column ${
                                                    errors.email ? "error" : touched.email ? "active" : ""}`}>
                                                    <div className='form-input-title G-align-start'>
                                                        <span>Электронная почта</span>
                                                    </div>
                                                    <label className='form-label'>
                                                        <input name='email' type="email"
                                                               placeholder='mail@youcompany.com'/>
                                                    </label>
                                                </div>

                                                <div className='form-input G-flex-column'>
                                                    <div className='form-input-title G-align-start'>
                                                        {/*{errors.password && <span className="error-text">{errors.password}</span>}*/}
                                                        <span>Пароль</span>
                                                    </div>
                                                    <label className='password-label form-label'>
                                                        <input
                                                            name='password'
                                                            type={isVisible ? 'text' : 'password'}
                                                            value={formData.password}
                                                            placeholder='Пароль'/>
                                                            onChange={handleChange}

                                                        <div onClick={toggleVisibility} className='eye'>
                                                            <img src={eye} alt=""/>
                                                        </div>
                                                    </label>

                                                </div>


                                            </div>

                                            <div className='remember-block G-justify-between'>
                                                <div
                                                    className={`remember-check G-align-center ${checked ? "checked" : ""}`}
                                                    onClick={() => setChecked(!checked)}>
                                                    <div className='remember-icon'></div>
                                                    <div className='remember-text'>
                                                        Запомнить меня
                                                    </div>
                                                </div>
                                                <button onClick={handleReset} className='forgot-password'>Забыли пароль?
                                                </button>

                                            </div>

                                            <div className='form-btn-cnt G-align-start'>
                                                <button type="submit" onClick={() => handleSubmit()}
                                                        className='btn-primary'>Войти
                                                </button>
                                            </div>

                                        </form>

                                    </> : <Reset close={handleReset}/>}
                                </div>
                                }

                                {register &&
                                    <div className='register-mobile'>
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
                                                        <label className='form-label'>
                                                            <input name='name' type="text"
                                                                   placeholder='Фамилия Имя Отчество'/>
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
                                                            <span>Номер телефона</span>
                                                        </div>
                                                        <label className='password-label form-label'>
                                                            <input
                                                                name='phone'
                                                                type={'number'}
                                                                placeholder='+7'/>

                                                        </label>

                                                    </div>

                                                    <div className='form-input G-flex-column'>
                                                        <div className='form-input-title G-align-start'>
                                                            <span>Придумайте</span>
                                                        </div>
                                                        <label className='password-label form-label'>
                                                            <input
                                                                name='password'
                                                                type={isVisible ? 'text' : 'password'}
                                                                placeholder='Пароль'/>

                                                            <div onClick={toggleVisibility} className='eye'>
                                                                <img src={eye} alt=""/>
                                                            </div>
                                                        </label>

                                                    </div>


                                                    <div className='form-input G-flex-column'>
                                                        <div className='form-input-title G-align-start'>
                                                            <span>Повторите</span>
                                                        </div>
                                                        <label className='password-label form-label'>
                                                            <input
                                                                name='password'
                                                                type={isVisible ? 'text' : 'password'}
                                                                placeholder='Пароль'/>

                                                            <div onClick={toggleVisibility} className='eye'>
                                                                <img src={eye} alt=""/>
                                                            </div>
                                                        </label>

                                                    </div>


                                                </div>


                                                <div
                                                    className={`register-agree agree-box G-align-center ${checked ? "checked" : ""}`}
                                                    onClick={() => setChecked(!checked)}>
                                                    <div className='agree-icon'></div>
                                                    <div className='agree-text'>
                                                        Вы согласны с <Link to='/'>политикой конфиденциальности</Link>
                                                    </div>

                                                </div>


                                                <div className='form-btn-cnt G-align-start'>
                                                    <button onClick={openRegisterStep2} className='btn-primary'>Далее
                                                    </button>
                                                </div>

                                            </form>


                                        </> : <>

                                            <RegisterStep2 close={openRegisterStep2}/>

                                        </>}

                                    </div>
                                }


                            </nav>
                        </div>
                        <div className='header-request'>
                            <button onClick={handleCallBack} className='request-btn header-bnt-black'>
                                Заказать обратный звонок
                            </button>
                        </div>
                        <div className='header-actions G-align-center'>
                            <div className='header-border'></div>
                            <button onClick={handleLogin} className='bnt-login'>Войти</button>
                            <button onClick={handleRegister} className='bnt-register header-bnt-black'>Зарегистрироваться
                            </button>
                        </div>

                        <div className={`burger ${isActive ? "active" : ""}`} onClick={toggleBurger}>
                            <span></span>
                        </div>


                    </div>
                </div>
            </header>

            <CallBack active={callBack} close={handleCallBack}/>
            <Modal close={handleLogin} active={login}>
                <Login close={handleLogin} active={login}/>
            </Modal>

            <Modal close={handleRegister} active={register}>
                <Register close={handleRegister} active={register}/>
            </Modal>


        </>
    }
;

export default Header;