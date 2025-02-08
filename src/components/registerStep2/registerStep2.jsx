import React, {useState} from 'react';
import arrowUp from "../../assets/images/arrowUp.svg";
import {InputText} from "primereact/inputtext";
import {Slider} from 'primereact/slider';
import "primereact/resources/themes/lara-light-cyan/theme.css";

const RegisterStep2 = ({close}) => {
    const [checked, setChecked] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [value, setValue] = useState(50);

    const toggleVisibility = () => {
        setIsVisible((prev) => !prev);
    };

    return <form className='auth-form' action="">
        <div className='auth-inputs G-flex-column '>
            <div className='form-input G-flex-column'>
                <label className='form-label'>
                    <input name='name' type="text" placeholder='Название вашей компании'/>
                </label>
            </div>

            <div className='form-input G-flex-column'>
                <label className='password-label form-label'>
                    <input
                        name='nickname'
                        type={'text'}
                        placeholder='Отрасль'/>
                    <div className='slider-select-icons '>
                        <div className='select-icon'>
                            <img src={arrowUp} alt=""/>
                        </div>
                        <div className='select-icon select-icon-down'>
                            <img src={arrowUp} alt=""/>
                        </div>
                    </div>
                </label>


            </div>

            <div className='form-input G-flex-column'>
                <div className='form-input-title G-align-start'>
                    <span>Электронная почта</span>
                </div>
                <label className='password-label form-label'>
                    <input
                        name='email'
                        type={'email'}
                        placeholder='mail@youcompany.com'/>

                </label>

            </div>
            <div className='email-btn-cnt'>

                <button className='email-btn'>Отправить код</button>

            </div>

            <div className='form-input G-flex-column'>
                <div className='form-input-title G-align-start'>
                    <span>Отправим вам код на почту</span>
                </div>
                <label className='password-label form-label'>
                    <input
                        name='email'
                        type={'email'}
                        placeholder='Код'/>

                </label>

            </div>

            <div className='form-slider '>
                <div className='form-input-title '>
                    <span>Количество человек</span>
                </div>
                <div className='form-slider-tools G-align-center'>
                    <Slider value={value} onChange={(e) => setValue(e.value)}/>

                    <div className='form-slider-input'>
                        <InputText value={value} onChange={(e) => setValue(e.target.value)}/>

                        <div className='slider-select-icons '>
                            <div className='select-icon'>
                                <img src={arrowUp} alt=""/>
                            </div>
                            <div className='select-icon select-icon-down'>
                                <img src={arrowUp} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>



            </div>


        </div>


        <div className='register-buttons G-align-start'>

            <button onClick={close} className='register-btn-black'>Назад</button>

            <button className='btn-primary'>Зарегистрироваться</button>
        </div>

    </form>
};

export default RegisterStep2;