import React, {useState} from 'react';
import logo from "../../assets/images/logo.png";
import closeImg from "../../assets/images/close.svg";
import eye from "../../assets/images/Eye.svg";
import './register.scss'
import {Link} from "react-router-dom";

const Register = ({close, active}) => {
    const [checked, setChecked] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible((prev) => !prev);
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

            <form className='auth-form' action="">
                <div className='auth-inputs G-flex-column '>
                    <div className='form-input G-flex-column'>
                        <label className='form-label'>
                            <input name='name' type="text" placeholder='Фамилия Имя Отчество'/>
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


                <div className={`register-agree agree-box G-align-center ${checked ? "checked" : ""}`}
                     onClick={() => setChecked(!checked)}>
                    <div className='agree-icon'></div>
                    <div className='agree-text'>
                        Вы согласны с <Link to='/'>политикой конфиденциальности</Link>
                    </div>

                </div>


                <div className='form-btn-cnt G-align-start'>
                    <button className='btn-primary'>Далее</button>
                </div>

            </form>
        </div>
    </div>
};

export default Register;