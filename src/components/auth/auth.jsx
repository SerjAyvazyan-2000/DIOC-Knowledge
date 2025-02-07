import React, {useState} from 'react';
import './auth.scss'
import logo from '../../assets/images/logo.png'
import closeImg from '../../assets/images/close.svg'
import required from "../../assets/images/required.svg";
import {Link} from "react-router-dom";

const Auth = ({close , active}) => {
    const [checked, setChecked] = useState(false);

    return <div className='auth-cnt'>
        <div className='login-box'>
            <div className='auth-header'>
                <div className='auth-logo'>
                    <img src={logo} alt=""/>
                </div>
                <h2 className='form-title'>Войти в аккаунт</h2>
                <div className='form-sub-title'>
                    <p>Добро пожаловать! Введите свои данные</p>
                </div>

                <div onClick={close} className='auth-close'>
                    <img src={closeImg} alt=""/>
                </div>
            </div>

            <form className='auth-form' action="">
                <div className='auth-inputs G-flex-column form-inputs'>
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
                        <label className='form-label'>
                            <input name='password' type="password" placeholder='Пароль'/>
                        </label>
                    </div>



                    <div className={`form-agree agree-box G-align-center ${checked ? "checked" : ""}`}
                         onClick={() => setChecked(!checked)}>
                        <div className='agree-icon'></div>
                        <div className='agree-text'>
                            Вы согласны с <Link to='/'>политикой конфиденциальности</Link>
                        </div>

                    </div>
                    <div className='form-btn-cnt G-align-start'>
                        <button className='btn-black'>Написать нам</button>

                    </div>


                </div>

            </form>
        </div>
    </div>
};

export default Auth;