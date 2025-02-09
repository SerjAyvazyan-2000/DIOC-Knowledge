import React, {useEffect, useState} from 'react';
import './header.scss'
import {Link} from "react-router-dom";
import logo from '../../assets/images/logo.png'
import Modal from "../modal/modal.jsx";
import CallBack from "../callBack/callBack.jsx";
import Login from "../login/login.jsx";
import Register from "../register/register.jsx";
import RegisterStep2 from "../registerStep2/registerStep2.jsx";
import Reset from "../reset/reset.jsx";

const Header = () => {
        const [isActive, setIsActive] = useState(false);
        const [scrolled, setScrolled] = useState(false);
        const [callBack, setCallBack] = useState(false);
        const [login, setLogin] = useState(false);
        const [register, setRegister] = useState(false);
        const [reset, setReset] = useState(false);
        const [registerStep2, setRegisterStep2] = useState(false);

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
        useEffect(() => {
            if (callBack || login || register) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "";
            }
        }, [callBack, login, register]);

        const toggleBurger = () => {
            setIsActive((prev) => !prev);
        };

        const handleReset = () => {
            setReset((prev) => !prev);
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


                                {login && <>
                                    {!reset ? <>
                                        <Login close={handleLogin}/>

                                    </> : <Reset close={handleReset}/>}
                                </>
                                }

                                {register &&
                                    <>


                                        {!registerStep2 ? <>
                                            <Register close={handleRegister}/>

                                        </> : <>
                                            <RegisterStep2 close={openRegisterStep2}/>

                                        </>}

                                    </>
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