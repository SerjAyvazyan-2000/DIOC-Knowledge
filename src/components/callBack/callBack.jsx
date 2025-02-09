import React, {useState} from 'react';
import './callBack.scss'
import incoming from '../../assets/images/incoming.png'
import closeImg from '../../assets/images/close.svg'
import {Link} from "react-router-dom";
import box from "../../assets/images/box.svg";

const CallBack = ({close, active}) => {
        const [checked, setChecked] = useState(false);

        const [formData, setFormData] = useState({
            phone: "",
            name: '',
        });
        const [errors, setErrors] = useState({
            phone: "",
            name: '',
        });
        const [touched, setTouched] = useState({
            phone: "",
            name: '',
        });


        const validatePhoneNumber = (phone) => /^\+7\d{1,15}$/.test(phone);


        const handleChange = (e) => {
            const {name, value} = e.target;
            setFormData({...formData, [name]: value});
            setTouched((prev) => ({...prev, [name]: true}));

            setErrors((prev) => {
                const newErrors = {...prev};

                if (name === "phone") {
                    if (!value) {
                        newErrors.phone = "Напишите номер";
                    } else if (!validatePhoneNumber(value)) {
                        newErrors.phone = "Неверный формат номера";
                    } else {
                        newErrors.phone = "";
                    }
                }

                if (name === "name") {
                    newErrors.name = value ? "" : "Напишите имя";
                }

                return newErrors;
            });


        };

        const handleSubmit = (e) => {
            e.preventDefault()
            if (!checked) {
                alert("Вы должны согласиться с политикой конфиденциальности!");
                return;
            }

            const newErrors = {
                phone: validatePhoneNumber(formData.phone) ? "" : "Неверный формат номера",
                name: formData.name ? "" : "Напишите имя",
            };
            setErrors(newErrors);

            setTouched({phone: true, name: true});

            if (Object.values(newErrors).some((error) => error)) return;
            alert("Ваша заявка отправлено  !");

        };


        return <div className={`callBack-block G-center ${active ? 'active' : ''}`}>
            <div onClick={close} className='callBack-bg'></div>

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
                                {errors.phone && errors.phone.length &&
                                    <div className="form-input-title">
                                        <span>{errors?.phone}</span>
                                    </div>
                                }
                                <label
                                    className={`form-label ${
                                        formData.phone && !errors.phone
                                            ? "active"
                                            : errors.phone
                                                ? "error"
                                                : ""
                                    }`}>
                                    <input
                                        name='phone'
                                        type="text"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder='+7 (918) 000 00-00'
                                    />
                                </label>
                            </div>

                            <div className='form-input G-flex-column'>
                                {errors.name && errors.name.length &&
                                    <div className="form-input-title">
                                        <span>{errors?.name}</span>
                                    </div>
                                }

                                <label
                                    className={`form-label ${
                                        formData.name && !errors.name
                                            ? "active"
                                            : errors.name
                                                ? "error"
                                                : ""
                                    }`}>
                                    <input
                                        name='name'
                                        type="text"
                                        value={formData.name}
                                        onChange={handleChange}
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


    }
;

export default CallBack;