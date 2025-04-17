import arrowUp from "../../assets/images/arrowUp.svg";
import { InputText } from "primereact/inputtext";
import { Slider } from "primereact/slider";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import Select from "../Select";
import { INDUSTRY_OPTIONS } from "../../constants";
import PropTypes from "prop-types";

const RegisterStep2 = ({
  close,
  formData,
  onChange,
  onSliderChange,
  onSubmit,
}) => {
  return (
    <form className="auth-form" onSubmit={onSubmit}>
      <div className="auth-inputs G-flex-column ">
        <div className="form-input G-flex-column">
          <label className="form-label">
            <input
              name="company_name"
              type="text"
              placeholder="Название вашей компании"
              value={formData.company_name}
              onChange={onChange}
            />
          </label>
        </div>

        <div className="form-input G-flex-column">
          <Select
            name="industry"
            value={formData.industry}
            onChange={onChange}
            placeholder="Отрасль"
            options={INDUSTRY_OPTIONS}
          />
        </div>

        <div className="form-input G-flex-column">
          <div className="form-input-title G-align-start">
            <span>Электронная почта</span>
          </div>
          <label className="password-label form-label">
            <input
              name="email"
              type={"email"}
              placeholder="mail@youcompany.com"
              value={formData.email}
              onChange={onChange}
            />
          </label>
        </div>
        <div className="email-btn-cnt">
          <button className="email-btn">Отправить код</button>
        </div>

        <div className="form-input G-flex-column">
          <div className="form-input-title G-align-start">
            <span>Отправим вам код на почту</span>
          </div>
          <label className="password-label form-label">
            <input
              name="otp"
              type={"text"}
              placeholder="Код"
              value={formData.otp}
              onChange={onChange}
            />
          </label>
        </div>

        <div className="form-slider ">
          <div className="form-input-title ">
            <span>Количество человек</span>
          </div>
          <div className="form-slider-tools G-align-center">
            <Slider
              value={formData.employee_count}
              onChange={(e) => onSliderChange(e)}
              min={0}
              max={100}
              step={1}
            />

            <div className="form-slider-input">
              <InputText
                value={formData.employee_count}
                onChange={(e) => {
                  const value = parseInt(e.target.value) || 0;
                  onSliderChange({ value });
                }}
              />

              <div className="slider-select-icons ">
                <div className="select-icon">
                  <img src={arrowUp} alt="" />
                </div>
                <div className="select-icon select-icon-down">
                  <img src={arrowUp} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="register-buttons G-align-start">
        <button type="button" onClick={close} className="register-btn-black">
          Назад
        </button>

        <button type="submit" className="btn-primary">
          Зарегистрироваться
        </button>
      </div>
    </form>
  );
};

RegisterStep2.propTypes = {
  close: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSliderChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default RegisterStep2;
