import React, {useState} from 'react';
import eye from "../../assets/images/Eye.svg";

const PasswordField = ({ name, value, onChange, placeholder, error, touched }) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible((prev) => !prev);
    };

    return (
        <div className='form-input G-flex-column'>
            <div className='form-input-title G-align-start'>
                <span>{error || placeholder}</span>
            </div>
            <label
                className={`password-label form-label ${value ? (error ? "error" : "active") : touched && value === "" ? "error" : ""}`}>
                <input
                    name={name}
                    type={isVisible ? 'text' : 'password'}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
                <div onClick={toggleVisibility} className='eye'>
                    <img src={eye} alt=""/>
                </div>
            </label>
        </div>
    );
};

export default PasswordField;