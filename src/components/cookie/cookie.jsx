import React, {useState} from 'react';
import {Link} from "react-router-dom";
import './cookie.scss'
const Cookie = () => {

    const [hidden, setHidden] = useState(false);

    const handleClick = () => {
         setHidden(!hidden);
    }

    return <div className={`cookie-box G-justify-between ${hidden ? 'hidden': ''}`}>
        <div className='cookie-texts G-align-center'>
            <p>Мы используем куки</p>
            <Link to={'/'}>Политика конфиденциальности</Link>
        </div>
        <div onClick={handleClick} className='cookie-bnt'>
            <button>Хорошо</button>
        </div>
    </div>
};

export default Cookie;