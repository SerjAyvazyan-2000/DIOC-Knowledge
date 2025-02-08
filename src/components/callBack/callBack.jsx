import React, {useState} from 'react';
import './callBack.scss'
import incoming from '../../assets/images/incoming.png'
import closeImg from '../../assets/images/close.svg'
import required from "../../assets/images/required.svg";
import {Link} from "react-router-dom";
import box from "../../assets/images/box.svg";

const CallBack = ({close,active}) => {
    const [checked, setChecked] = useState(false);
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");
    const [phoneMessage, setPhoneMessage] = useState("Введите ваш номер");
    const [phoneClass, setPhoneClass] = useState("");
    const [nameMessage, setNameMessage] = useState("Введите ваше ФИО");
    const [nameClass, setNameClass] = useState("");

    const validatePhone = (phone) => {
        return /^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/.test(phone);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!checked) {
            alert("Вы должны согласиться с политикой конфиденциальности!");
            return;
        }

        let isValid = true;

        if (!phone) {
            setPhoneMessage("Неверный формат номера");
            setPhoneClass("error");
            isValid = false;
        } else {
            setPhoneMessage("");
            setPhoneClass("active");
        }

        if (name.trim().length < 5) {
            setNameMessage("Введите полное имя");
            setNameClass("error");
            isValid = false;
        } else {
            setNameMessage("");
            setNameClass("active");
        }

        if (isValid) {
            alert("Форма успешно отправлена:");
        }
    };


    return <div className={`callBack-block G-center ${active ? 'active' : ''}`}>
        <div className='callBack-cnt '>
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
                            {phoneClass &&
                                <div className="form-input-title">
                                    <span>{phoneMessage}</span>
                                </div>
                            }


                            <label className={` form-label${phoneClass}`}>
                                <input
                                    name='number'
                                    type="number"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder='+7 (918) 000 00-00'/>
                            </label>
                        </div>

                        <div className='form-input G-flex-column'>
                            {nameClass &&
                                <div className="form-input-title">
                                    <span>{nameMessage}</span>
                                </div>
                            }
                            <label className={`form-label ${nameClass}`}>
                                <input
                                    name='name'
                                    type="text"
                                    value={name}

                                    onChange={(e) => setName(e.target.value)}
                                    placeholder='Фамилия Имя Отчество'/>
                            </label>
                        </div>


                        <div className={`form-agree agree-box G-align-center ${checked ? "checked" : ""}`}
                             onClick={() => setChecked(!checked)}>
                            <div className='agree-icon'>
                                <img src={box} alt=""/>
                            </div>
                            <div className='callBack-agree-text  '>
                                Вы согласны с <Link to='/'>политикой конфиденциальности</Link>
                            </div>

                        </div>

                        <div className='callBack-btn-cnt G-align-start'>
                            <button onClick={handleSubmit} className='callBack-btn'>Заказать звонок</button>
                        </div>

                    </div>
                </form>
            </div>

            <div className='callBack-fon'>
                <img src={incoming} alt=""/>
            </div>
        </div>
    </div>


};

export default CallBack;