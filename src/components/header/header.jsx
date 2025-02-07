import React, {useEffect, useState} from 'react';
import './header.scss'
import {Link} from "react-router-dom";
import logo from '../../assets/images/logo.png'

const Header = () => {

    const [isActive, setIsActive] = useState(false);
    const [scrolled, setScrolled] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    const toggleBurger = () => {
        setIsActive((prev) => !prev);
    };

    return <header className={`header ${scrolled ? "moved" : ""}`}>
        <div className='header-container'>

            <div className='header-body G-justify-between'>
                <div className='header-menu G-align-center'>
                    <Link className='header-logo' to="/">
                        <img src={logo} alt=""/>
                    </Link>
                    <nav className={`menu ${isActive ? "active" : ""}`}>
                        <div className='menu-mobile-box '>
                            <button className='bnt-register btn-primary'>Зарегистрироваться</button>
                            <button className='bnt-login'>Войти</button>
                        </div>
                        <ul className='menu-list G-align-center'>
                            <li className='menu-item menu-mobile-item'>
                            <Link className='menu-link' to={''}>Заказать обратный звонок</Link>
                            </li>
                            <li className='menu-item'>
                                <Link className='menu-link' to={''}>Продукт</Link>
                            </li>
                            <li className='menu-item'>
                                <Link className='menu-link' to={''}>Цены</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='header-request'>
                    <button className='request-btn header-bnt-black'>
                        Заказать обратный звонок
                    </button>
                </div>
                <div className='header-actions G-align-center'>
                    <div className='header-border'></div>
                    <button className='bnt-login'>Войти</button>
                    <button className='bnt-register header-bnt-black'>Зарегистрироваться</button>
                </div>

                <div className={`burger ${isActive ? "active" : ""}`} onClick={toggleBurger}>
                    <span></span>
                </div>
            </div>
        </div>
    </header>
};

export default Header;