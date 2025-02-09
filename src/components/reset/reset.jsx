import React, {useState} from 'react';
import logo from "../../assets/images/logo.png";
import closeImg from "../../assets/images/close.svg";
import eye from "../../assets/images/Eye.svg";
import PasswordField from "../passwordField/passwordField.jsx";


const Reset = ({close}) => {

    const [checked, setChecked] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [reset, setReset] = useState(false);


    const toggleVisibility = () => {
        setIsVisible((prev) => !prev);
    };
    const handleReset = () => {
        setReset((prev) => !prev);
    };


    const [formData, setFormData] = useState({
        email: "",
        code: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({
        email: "",
        code: "",
        password: "",
        confirmPassword: "",
    });

    const [touched, setTouched] = useState({
        email: false,
        code: false,
        password: false,
        confirmPassword: false,
    });


    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const validatePassword = (password) => password.length >= 6;

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});

        setTouched((prev) => ({...prev, [name]: true}));

        if (name === "email") {
            if (!validateEmail(value)) {
                setErrors((prev) => ({...prev, email: "Неверный формат почты"}));
            } else {
                setErrors((prev) => ({...prev, email: ""}));
            }
        }

        if (name === "password") {
            if (!validatePassword(value)) {
                setErrors((prev) => ({...prev, password: "Пароль должен быть минимум 6 символов"}));
            } else {
                setErrors((prev) => ({...prev, password: ""}));
            }
        }

        if (name === "confirmPassword") {
            if (value !== formData.password) {
                setErrors((prev) => ({...prev, confirmPassword: "Пароли не совпадают"}));
            } else {
                setErrors((prev) => ({...prev, confirmPassword: ""}));
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let newErrors = {
            email: validateEmail(formData.email) ? "" : "Неверный формат почты",
            password: validatePassword(formData.password) ? "" : "Пароль должен быть минимум 6 символов",
            confirmPassword: formData.password === formData.confirmPassword ? "" : "Пароли не совпадают",
        };

        setErrors(newErrors);
        setTouched({email: true, password: true, confirmPassword: false});

        if (Object.values(newErrors).some((error) => error)) return;

        alert("Пароль успешно сброшен!");
    };


    return <div className='reset-box G-flex-column'>
        <div className='auth-header'>
            <div className='auth-logo'>
                <img src={logo} alt=""/>
            </div>
            <h2 className='aut-title form-title'>Восстановление доступа</h2>

            <div onClick={close} className='auth-close'>
                <img src={closeImg} alt=""/>
            </div>
        </div>

        <form className='auth-form' action="">
            <div className='auth-inputs G-flex-column '>
                <div className='form-input G-flex-column'>
                    <div className='form-input-title G-align-start'>
                        <span>{errors.email || "Электронная почта"}</span>
                    </div>
                    <label className={`form-label ${errors.email ? "error" : touched.email ? "active" : ""}`}>
                        <input
                            name='email' type="email"
                            placeholder='mail@youcompany.com'
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div className='reset-btn-send'>
                    <button className='email-btn'>Отправить код</button>
                </div>

                <div className='form-input G-flex-column'>
                    <div className='form-input-title G-align-start'>
                        <span>Отправим вам код восстановления на почту</span>
                    </div>
                    <label className='form-label'>
                        <input name="code" type="text" placeholder="Код" value={formData.code} onChange={handleChange}/>
                    </label>
                </div>


                {/*<div className='form-input G-flex-column'>*/}
                {/*    <div className='form-input-title G-align-start'>*/}
                {/*        <span>{errors.password || "Придумайте новый пароль"}</span>*/}
                {/*    </div>*/}
                {/*    <label*/}
                {/*        className={`password-label form-label ${errors.password ? "error" : touched.password ? "active" : ""}`}>*/}
                {/*        <input*/}
                {/*            name='password'*/}
                {/*            type={isVisible ? 'text' : 'password'}*/}
                {/*            placeholder='Новый пароль'*/}
                {/*            value={formData.password}*/}
                {/*            onChange={handleChange}*/}
                {/*        />*/}

                {/*        <div onClick={toggleVisibility} className='eye'>*/}
                {/*            <img src={eye} alt=""/>*/}
                {/*        </div>*/}
                {/*    </label>*/}

                {/*</div>*/}


                {/*<div className='form-input G-flex-column'>*/}
                {/*    <div className='form-input-title G-align-start'>*/}
                {/*        <span>{errors.confirmPassword || "Повторите пароль"}</span>*/}
                {/*    </div>*/}
                {/*    <label*/}
                {/*        className={`password-label form-label ${errors.confirmPassword ? "error" : touched.confirmPassword ? "active" : ""}`}>*/}
                {/*        <input*/}
                {/*            name="confirmPassword"*/}
                {/*            type={isVisible ? 'text' : 'password'}*/}
                {/*            placeholder='Пароль'*/}
                {/*            value={formData.confirmPassword}*/}
                {/*            onChange={handleChange}*/}
                {/*        />*/}

                {/*        <div onClick={toggleVisibility} className='eye'>*/}
                {/*            <img src={eye} alt=""/>*/}
                {/*        </div>*/}
                {/*    </label>*/}

                {/*</div>*/}


                <PasswordField
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Придумайте пароль"
                    error={errors.password}
                    touched={touched.password}
                />
                <PasswordField
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Повторите пароль"
                    error={errors.confirmPassword}
                    touched={touched.confirmPassword}
                />

            </div>

            <div className='reset-btn-cnt G-align-start'>
                <button onClick={handleSubmit} className='reset-btn'>Далее</button>
            </div>

        </form>
    </div>
};

export default Reset;