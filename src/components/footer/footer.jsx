import React from 'react';
import './footer.scss'
import {Link} from "react-router-dom";
import logo from '../../assets/images/logo.png'


const Footer = () => {
    return <footer>
        <div className='footer-container'>
            <div className='footer-body G-justify-between'>
                <div className='footer-clues G-flex-column'>
                    <h3>Вся информация на сайте носит ознакомительный характер и не является публичной офертой (ст. 437
                        ГК РФ).</h3>
                    <p>Copyright © ДИОК, 2024</p>
                </div>
                <nav className='footer-menu'>
                    <ul className='footer-menu-list G-flex-column'>
                        <li className='footer-menu-item'>
                            <Link to={'/'}>Лицензионное соглашение</Link>
                        </li>
                        <li className='footer-menu-item'>
                            <Link to={'/'}>Политика конфиденциальности</Link>
                        </li>
                        <li className='footer-menu-item'>
                            <Link to={'/'}>Пользовательское соглашение</Link>
                        </li>
                    </ul>
                </nav>
                <div className='footer-column G-flex-column'>
                    <Link className='footer-logo' to={'/'}>
                        <img src={logo} alt=""/>
                    </Link>
                    <Link className='footer-link' to={'/'}>Соглашение об уровне обслуживания (SLA)</Link>

                </div>

            </div>

        </div>
    </footer>
};

export default Footer;