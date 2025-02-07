import React, {useState} from 'react';
import './callBack.scss'
import incoming from '../../assets/images/incoming.png'
import closeImg from '../../assets/images/close.svg'
import required from "../../assets/images/required.svg";
import {Link} from "react-router-dom";

const CallBack = ({close}) => {
    const [checked, setChecked] = useState(false);

    return <div className='callBack-cnt '>
        <div className='callBack-body G-align-start'>
            <div className='callBack-tools G-flex-column'>
                <div onClick={close} className='callBack-close'>
                    <img src={closeImg} alt=""/>
                </div>
                <p className='callBack-text'>
                    Заказать обратный звонок
                </p>
            </div>
            <form className='callBack-form'>
                 <h3 className='callBack-title'>Рабочий номер телефона</h3>
                <div className='callBack-inputs G-flex-column '>
                    <div className='form-input G-flex-column'>
                        <label className='form-label'>
                            <input name='number' type="number" placeholder='+7 (918) 000 00-00'/>
                        </label>
                    </div>

                    <div className='form-input G-flex-column'>
                        <label className='form-label'>
                            <input name='name' type="text" placeholder='Фамилия Имя Отчество'/>
                        </label>
                    </div>


                    <div className={`form-agree agree-box G-align-center ${checked ? "checked" : ""}`}
                         onClick={() => setChecked(!checked)}>
                        <div className='callBack-agree-icon'></div>
                        <div className='callBack-agree-text  '>
                            Вы согласны с <Link to='/'>политикой конфиденциальности</Link>
                        </div>

                    </div>

                    <div className='callBack-btn-cnt G-align-start'>
                        <button className='callBack-btn'>Заказать звонок</button>
                    </div>

                </div>
            </form>
        </div>

        <div className='callBack-fon'>
            <img src={incoming} alt=""/>
        </div>
    </div>
};

export default CallBack;