import React, {useState} from 'react';
import logo from "../../assets/images/logo.png";
import closeImg from "../../assets/images/close.svg";
import eye from "../../assets/images/Eye.svg";
import './login.scss'

const Login = ({close, active}) => {
    const [checked, setChecked] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible((prev) => !prev);
    };

    return <div className='auth-cnt'>
        <div className='auth-box login-box G-flex-column'>
            <div className='auth-header'>
                <div className='auth-logo'>
                    <img src={logo} alt=""/>
                </div>
                <h2 className='aut-title form-title'>Войти в аккаунт</h2>
                <div className='aut-sub-title form-sub-title'>
                    <p>Добро пожаловать! Введите свои данные</p>
                </div>

                <div onClick={close} className='auth-close'>
                    <img src={closeImg} alt=""/>
                </div>
            </div>

            <form className='auth-form' action="">
                <div className='auth-inputs G-flex-column '>
                    <div className='form-input G-flex-column'>
                        <div className='form-input-title G-align-start'>
                            <span>Электронная почта</span>
                        </div>
                        <label className='form-label'>
                            <input name='email' type="email" placeholder='mail@youcompany.com'/>
                        </label>
                    </div>

                    <div className='form-input G-flex-column'>
                        <div className='form-input-title G-align-start'>
                            <span>Пароль</span>
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

                <div className='remember-block G-justify-between'>
                    <div className={`remember-check G-align-center ${checked ? "checked" : ""}`}
                         onClick={() => setChecked(!checked)}>
                        <div className='remember-icon'></div>
                        <div className='remember-text'>
                            Запомнить меня
                        </div>
                    </div>
                    <button className='forgot-password'>Забыли пароль?</button>

                </div>
                <div className='form-btn-cnt G-align-start'>
                    <button className='btn-primary'>Войти</button>
                </div>

            </form>
        </div>
    </div>
};

export default Login;