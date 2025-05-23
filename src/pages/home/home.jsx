import { useEffect, useRef, useState, useCallback } from "react";
import "./home.scss";
import lock from "../../assets/images/IconLock.svg";
import IconTree from "../../assets/images/IconTree.svg";
import IconLogicalElement from "../../assets/images/IconLogicalElement.svg";
import serviceItemDecor from "../../assets/images/serviceItemDecor.png";
import IconWrench from "../../assets/images/IconWrench.svg";
import IconTeam from "../../assets/images/IconTeam.svg";
import chooseImg1 from "../../assets/images/chooseImg1.png";
import chooseImg2 from "../../assets/images/chooseImg2.png";
import chooseImg2Mobile from "../../assets/images/chooseImg2Mobile.png";
import chooseImg1Mobile from "../../assets/images/chooseImg1Mobile.png";
import subscribeDecor from "../../assets/images/subscribeDecor.png";
import subscribeDecorMobile from "../../assets/images/subscribeDecorMobile.png";
import convenientImg from "../../assets/images/convenientImg.png";
import convenientImg2 from "../../assets/images/convenientImg2.png";
import convenientImg3 from "../../assets/images/convenientImg3.png";
import convenientImg4 from "../../assets/images/convenientImg4.png";
import convenientImgMobile from "../../assets/images/convenientImgMobile.png";
import convenientImg2Mobile from "../../assets/images/convenientImg2Mobile.png";
import convenientImg3Mobile from "../../assets/images/convenientImg3Mobile.png";
import convenientImg4Mobile from "../../assets/images/convenientImg4Mobile.png";
import search from "../../assets/images/search.svg";
import flag from "../../assets/images/flag.svg";
import trending from "../../assets/images/trending.svg";
import IconOperators from "../../assets/images/IconOperators.svg";
import IconSearchStroked from "../../assets/images/IconSearchStroked.svg";
import IconHelmet from "../../assets/images/IconHelmet.svg";
import IconDataNull from "../../assets/images/IconDataNull.svg";
import IconSpeed from "../../assets/images/IconSpeed.svg";
import rateIcon from "../../assets/images/rateIcon.svg";
import rateDecor from "../../assets/images/rateDecor.png";
import faqDecor1 from "../../assets/images/faqDeco1.png";
import faqDecor2 from "../../assets/images/faqDecor2.png";
import faqDecor2Mobile from "../../assets/images/faqDecor2Mobile.png";
import aboutUsDecor from "../../assets/images/aboutUsDecor.png";
import aboutUsDecoMobile from "../../assets/images/aboutUsDecoMobile.png";
import feedbackMedia from "../../assets/images/feedbackMedia.png";
import required from "../../assets/images/required.svg";
import box from "../../assets/images/box.svg";
import iconMail from "../../assets/images/IconMail.svg";
import IconArrowLeft from "../../assets/images/IconArrowLeft.svg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";
import Cookie from "../../components/cookie/cookie.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import stripeService from "../../services/stripeService";

const Home = () => {
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("Электронная почта");
  const [labelClass, setLabelClass] = useState("");
  const [placeholder, setPlaceholder] = useState("mail@youcompany.com");
  const [formErrors, setFormErrors] = useState({});
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const [feedbackData, setFeedbackData] = useState({
    fullname: "",
    phoneNumber: "",
    email: "",
    message: "",
    privacyPolicyConsent: false,
  });

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChangeFeedbackData = useCallback(
    (e) => {
      setFeedbackData({
        ...feedbackData,
        [e.target.name]: e.target.value,
      });
    },
    [feedbackData]
  );

  const handleSubmit = () => {
    if (!checked && email) {
      setMessage("Вы должны согласиться с политикой конфиденциальности");
      setLabelClass("error");
      return;
    }

    const savedEmail = localStorage.getItem("subscribedEmail");

    if (savedEmail === email) {
      setMessage("Вы уже подписаны");
      setLabelClass("active");
      setEmail("");
    } else if (!validateEmail(email)) {
      setMessage("Неверный формат почты");
      setLabelClass("error");
    } else {
      localStorage.setItem("subscribedEmail", email);
      setMessage("Вы подписаны");
      setLabelClass("active");
      setEmail("");
    }
  };

  const handleSubmitFeedback = useCallback(
    async (e) => {
      e.preventDefault();
      setFormErrors({});

      try {
        await stripeService.sendFeedback(feedbackData);
        setFeedbackData({
          fullname: "",
          phoneNumber: "",
          email: "",
          message: "",
          privacyPolicyConsent: false,
        });
        setFormErrors({});
      } catch (error) {
        if (error.name === "ValidationError" && error.details?.errors) {
          const errors = error.details.errors.reduce((acc, err) => {
            acc[err.field] = err.message;
            return acc;
          }, {});
          setFormErrors(errors);
        } else {
          setFormErrors({ general: error.message });
        }
      }
    },
    [feedbackData]
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 567) {
        setPlaceholder("you@company.com");
      } else {
        setPlaceholder("mail@youcompany.com");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.params.navigation.prevEl = prevRef.current;
      swiperRef.current.swiper.params.navigation.nextEl = nextRef.current;
      swiperRef.current.swiper.navigation.init();
      swiperRef.current.swiper.navigation.update();
    }
  }, []);

  const isDisabledFeedbackForm =
    !feedbackData.fullname ||
    !feedbackData.phoneNumber ||
    !feedbackData.email ||
    !feedbackData.message ||
    !feedbackData.privacyPolicyConsent;

  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="hero-body G-column-center">
            <h1 className="hero-title">
              Сотрудничайте <span className="mobile-text-wrap">без усилий</span>{" "}
              <span className="text-wrap">с ДИОК.Знания</span>
            </h1>
            <p className="hero-sub-title">
              <span className="mobile-text-wrap">
                Создавайте знания, делитесь ими
              </span>{" "}
              и применяйте их{" "}
              <span className="desktop-text-wrap">в разных командах</span>
            </p>
            <button className="hero-btn btn-primary">Начать работу</button>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <div className="services-items G-flex">
            <div className="service-item G-image">
              <div className="service-item-header G-align-center">
                <div className="service-icon">
                  <img src={lock} alt="" />
                </div>
                <h3 className="service-item-title">Надежное решение</h3>
              </div>
              <p className="service-item-text">
                Защита данных, Гарантированная доступность
              </p>
              <div className="service-item-decor">
                <img src={serviceItemDecor} alt="" />
              </div>
            </div>

            <div className="service-item G-image">
              <div className="service-item-header G-align-center">
                <div className="service-icon">
                  <img src={IconTree} alt="" />
                </div>
                <h3 className="service-item-title">Единая база знаний</h3>
              </div>
              <p className="service-item-text">
                Накопление опыта, Повышение эффективности
              </p>

              <div className="service-item-decor">
                <img src={serviceItemDecor} alt="" />
              </div>
            </div>

            <div className="service-item G-image">
              <div className="service-item-header G-align-center">
                <div className="service-icon">
                  <img src={IconLogicalElement} alt="" />
                </div>
                <h3 className="service-item-title">Выгода</h3>
              </div>
              <p className="service-item-text">
                Снижение издержек, Оптимизация{" "}
                <span className="text-wrap">процессов</span>
              </p>

              <div className="service-item-decor">
                <img src={serviceItemDecor} alt="" />
              </div>
            </div>

            <div className="service-item G-image">
              <div className="service-item-header G-align-center">
                <div className="service-icon">
                  <img src={IconWrench} alt="" />
                </div>
                <h3 className="service-item-title">Управление доступами</h3>
              </div>
              <p className="service-item-text">
                Роли и права, Контроль доступа
              </p>

              <div className="service-item-decor">
                <img src={serviceItemDecor} alt="" />
              </div>
            </div>

            <div className="service-item G-image">
              <div className="service-item-header G-align-center">
                <div className="service-icon">
                  <img src={IconTeam} alt="" />
                </div>
                <h3 className="service-item-title">Кроссплатформенность</h3>
              </div>
              <p className="service-item-text">
                Доступ к данным с любого устройства и места
              </p>

              <div className="service-item-decor">
                <img src={serviceItemDecor} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="services-decor"></div>
      </section>

      <section className="why-choose-section section">
        <div className="choose-container">
          <div className="why-choose-body">
            <h2 className="section-title">Почему выбирают ДИОК.Знания?</h2>
            <div className="why-choose-cnt G-align-center block-cnt">
              <div className="choose-average-item block-item">
                <div className="choose-item-texts block-texts">
                  <h3 className="block-title">Настраиваемые шаблоны</h3>
                  <p className="block-text">
                    Начните с готовых шаблонов или создайте свои.
                  </p>
                </div>
                <div className="choose-item-img block-img G-flex">
                  <img className="img-desktop" src={chooseImg1} alt="" />
                  <img className="img-mobile" src={chooseImg1Mobile} alt="" />
                </div>
              </div>

              <div className="choose-big-item block-item">
                <div className="choose-item-texts block-texts">
                  <h3 className="block-title">Централизованные знания</h3>
                  <p className="block-text">
                    Храните все знания вашей команды в одном месте.
                  </p>
                </div>
                <div className="choose-item-img block-img G-flex">
                  <img className="img-desktop" src={chooseImg2} alt="" />
                  <img className="img-mobile" src={chooseImg2Mobile} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="subscribe-section ">
        <div className="container">
          <div className="subscribe-body G-align-start">
            <div className="subscribe-text-cnt">
              <h2 className="subscribe-text text-desktop">
                Не пропустите наши лучшие материалы!
                <span className="desktop-bold-text">
                  <span className="mobile-bold-text">
                    {" "}
                    Подпишитесь на нашу почтовую рассылку
                  </span>{" "}
                  о бизнесе и организации процессов
                </span>
              </h2>
              <h2 className="subscribe-text text-mobile">
                Не пропустите наши лучшие материалы!{" "}
                <span className="mobile-bold-text">
                  Подписывайтесь на рассылку,
                </span>{" "}
                и мы подготовим для вас интересные письма.
              </h2>
            </div>

            <div className="subscribe-tools">
              <h3 className="subscribe-tools-title">{message}</h3>
              <label className={`subscribe-label ${labelClass}`}>
                <input
                  className="subscribe-input"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={placeholder}
                />

                <div className="mobile-icon-email">
                  <img src={iconMail} alt="" />
                </div>
              </label>
              <div
                className={`subscribe-agree  agree-box G-align-center ${
                  checked ? "checked" : ""
                }`}
                onClick={() => setChecked(!checked)}
              >
                <div className="agree-icon">
                  <img src={box} alt="" />
                </div>
                <div className="agree-text">
                  Вы согласны с <Link to="/">политикой конфиденциальности</Link>
                </div>
              </div>

              <div className="agree-btn G-justify-end">
                <button onClick={handleSubmit} className="btn-primary">
                  Подписаться
                </button>
              </div>
            </div>
            <div className="subscribe-decor">
              <img className="img-desktop" src={subscribeDecor} alt="" />
              <img className="img-mobile" src={subscribeDecorMobile} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="convenient-section ">
        <div className="container">
          <div className="why-choose-body">
            <h2 className="section-title">
              Больше <span className="mobile-text-wrap">удобных</span> функций
            </h2>
            <div className="convenient-columns G-flex-column">
              <div className="why-choose-cnt convenient-column G-align-center block-cnt">
                <div className="convenient-average-item block-item">
                  <div className="choose-item-texts block-texts">
                    <h3 className="block-title">Расширенный поиск</h3>
                    <p className="block-text">
                      Находите нужное быстро с помощью мощного поиска.
                    </p>
                  </div>
                  <div className="choose-item-img block-img G-flex">
                    <img className="img-desktop" src={convenientImg} alt="" />
                    <img
                      className="img-mobile"
                      src={convenientImgMobile}
                      alt=""
                    />
                  </div>
                  <div className="convenient-item-tools">
                    <div className="convenient-search">
                      <label className="convenient-search-label">
                        <div className="search-icon G-flex">
                          <img src={search} alt="" />
                        </div>
                        <input type="text" placeholder="Поиск по..." />
                      </label>
                    </div>
                    <div className="convenient-filter">
                      <div className="convenient-filter-icon G-flex">
                        <img src={flag} alt="" />
                      </div>
                      <p className="filter-text">Фильт...</p>
                    </div>
                  </div>
                </div>
                <div className="convenient-big-item block-item">
                  <div className="choose-item-texts block-texts">
                    <h3 className="block-title">История страниц</h3>
                    <p className="block-text">
                      Отслеживайте{" "}
                      <span className="mobile-text-wrap">изменения и</span>{" "}
                      возвращайтесь к предыдущим версиям.
                    </p>
                  </div>
                  <div className="choose-item-img block-img G-flex">
                    <img className="img-desktop" src={convenientImg2} alt="" />
                    <img
                      className="img-mobile"
                      src={convenientImg2Mobile}
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="why-choose-cnt convenient-column G-align-center ">
                <div className="convenient-average-item block-item">
                  <div className="choose-item-texts block-texts">
                    <h3 className="block-title choose-desktop-title">
                      Гибкая настройка прав
                    </h3>
                    <h3 className="block-title choose-mobile-title">
                      Разрешения
                    </h3>

                    <p className="block-text">
                      Контролируйте, кто может просматривать и редактировать
                      ваши страницы.
                    </p>
                  </div>
                  <div className="choose-item-img block-img G-flex">
                    <img className="img-desktop" src={convenientImg3} alt="" />
                    <img
                      className="img-mobile"
                      src={convenientImg3Mobile}
                      alt=""
                    />
                  </div>
                </div>
                <div className="convenient-big-item block-item">
                  <div className="choose-item-texts block-texts">
                    <h3 className="block-title">Уведомления</h3>
                    <p className="block-text">
                      Будьте в курсе событий с помощью уведомлений в реальном
                      времени.
                    </p>
                  </div>
                  <div className="choose-item-img block-img G-flex">
                    <img className="img-desktop" src={convenientImg4} alt="" />
                    <img
                      className="img-mobile"
                      src={convenientImg4Mobile}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="implementations-section section">
        <div className="container">
          <div className="implementations-titles G-align-center">
            <div className="implementations-icon G-align-center">
              <img src={trending} alt="" />
            </div>
            <div className="implementations-title G-align-center">
              <p>Эффект от внедрения </p>
              <span>ДИОК.Знания</span>
            </div>
          </div>
          <div className="services-items implementations-services G-flex">
            <div className="service-item implementations-big-item ">
              <div className="service-item-header G-align-center">
                <div className="service-icon">
                  <img src={IconOperators} alt="" />
                </div>
                <h3 className="service-item-title">Упрощение коммуникации</h3>
              </div>
              <p className="service-item-text">
                Делитесь знаниями со всей компанией в 3 клика. Обсуждайте и
                улучшайте внутренние процессы
              </p>
              <div className="service-item-decor">
                <img src={serviceItemDecor} alt="" />
              </div>
            </div>

            <div className="service-item implementations-average-item ">
              <div className="service-item-header G-align-center">
                <div className="service-icon">
                  <img src={IconSearchStroked} alt="" />
                </div>
                <h3 className="service-item-title">Экономия времени</h3>
              </div>
              <p className="service-item-text">
                Быстрый поиск по знаниям экономит время сотрудников для
                нахождении ответа на их вопрос и освобождает экспертов от лишней
                нагрузки
              </p>
              <div className="service-item-decor">
                <img src={serviceItemDecor} alt="" />
              </div>
            </div>

            <div className="service-item  implementations-average-item ">
              <div className="service-item-header G-align-center">
                <div className="service-icon">
                  <img src={IconHelmet} alt="" />
                </div>
                <h3 className="service-item-title">Снижение рисков</h3>
              </div>
              <p className="service-item-text">
                ДИОК.Знания исключает риск потери необходимых документов,
                обеспечивает конфиденциальность, целостность и доступность
                информации
              </p>
              <div className="service-item-decor">
                <img src={serviceItemDecor} alt="" />
              </div>
            </div>

            <div className="service-item  implementations-average-item">
              <div className="service-item-header G-align-center">
                <div className="service-icon">
                  <img src={IconDataNull} alt="" />
                </div>
                <h3 className="service-item-title">
                  Сокращение требований к уровню нового сотрудника
                </h3>
              </div>
              <p className="service-item-text">
                Оформленная база знаний организации экономит до 30% на ФОТ.
                Формируйте процессы и оцифровывайте их в ДИОК.Знания.
              </p>
              <div className="service-item-decor">
                <img src={serviceItemDecor} alt="" />
              </div>
            </div>

            <div className="service-item  implementations-average-item">
              <div className="service-item-header G-align-center">
                <div className="service-icon">
                  <img src={IconSpeed} alt="" />
                </div>
                <h3 className="service-item-title">
                  Ускорение адаптации новых сотрудников
                </h3>
              </div>
              <p className="service-item-text">
                Экономим до 80 часов на онбординг процессах новых сотрудников
              </p>
              <div className="service-item-decor">
                <img src={serviceItemDecor} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="services-decor"></div>
      </section>

      <section id="rate" className="rate-section">
        <div className="container">
          <div className="rate-body G-align-center">
            <div className="rate-description G-flex-column">
              <div className="rate-header G-align-center">
                <div className="rate-icon G-flex">
                  <img src={rateIcon} alt="" />
                </div>
                <p className="rate-name">Тариф "Единый"</p>
              </div>

              <div className="rate-price G-flex-column">
                <h2 className="rate-value">499 руб/мес.</h2>
                <p className="rate-from">С пользователя</p>
              </div>

              <div className="rate-advantages G-flex-column">
                <p className="rate-advantage">Пространства и страницы</p>
                <p className="rate-advantage">Права доступа</p>
                <p className="rate-advantage">Умный поиск</p>
                <p className="rate-advantage">Контроль версий</p>
                <p className="rate-advantage">Кроссплатформенность</p>
              </div>

              <div className="rate-bnt G-justify-end">
                <button className="">Попробовать бесплатно</button>
              </div>

              <div className="rate-decor">
                <img src={rateDecor} alt="" />
              </div>
            </div>
            <h2 className="rate-text">
              Персональный
              <span className="text-wrap">тариф для вас</span>
            </h2>
          </div>
        </div>
      </section>

      <section id="product" className="about-us-section ">
        <div className="container">
          <div className="about-us-body G-flex-column">
            <Swiper
              spaceBetween={30}
              ref={swiperRef}
              slidesPerView={1}
              className="step-swiper"
              modules={[Navigation, Pagination]}
              pagination={{ clickable: true }}
              navigation={{
                prevEl: ".arrow-1",
                nextEl: ".arrow-2",
              }}
            >
              <SwiperSlide>
                <div className={`about-us-step1`}>
                  <div className="about-us-texts G-flex-column">
                    <h2 className="about-title">НПЗ</h2>
                    <p className="about-us-clue">Более 2000 сотрудников</p>
                    <p className="about-us-text">
                      — Внедрили систему и упростили обслуживание оборудования{" "}
                      <span className="desktop-text-wrap">
                        благодаря умному поиску по содержанию
                      </span>
                    </p>
                    <p className="about-us-clue">Какой эффект дало</p>
                    <div className="about-us-assessment G-align-center">
                      <h3>+50%</h3>
                      <p>
                        Эффективность{" "}
                        <span className="text-wrap">обслуживания</span>
                      </p>
                      <h3>+10%</h3>
                      <p>
                        Эффективность{" "}
                        <span className="text-wrap">производства</span>
                      </p>
                    </div>
                  </div>
                  <div className="about-us-comments">
                    <p>Комментарий</p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={`about-us-step2`}>
                  <div className="about-us-texts G-flex-column">
                    <h2 className="about-title">Сфера обслуживания</h2>
                    <p className="about-us-clue">Более 2000 сотрудников</p>
                    <p className="about-us-text">
                      — Внедрили решение и снизили стоимость обучения бариста
                    </p>
                    <p className="about-us-clue">Какой эффект дало</p>
                    <div className="about-us-assessment G-align-center">
                      <h3>+120%</h3>
                      <p>
                        Скорость <span className="text-wrap">обучения</span>
                      </p>
                      <h3>+50%</h3>
                      <p>
                        Эффективность{" "}
                        <span className="text-wrap">обслуживания</span>
                      </p>
                    </div>
                  </div>
                  <div className="about-us-comments">
                    <p>Комментарий</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="about-us-arrows">
              <div ref={prevRef} className="about-us-arrow arrow-1 G-center">
                <img src={IconArrowLeft} alt="" />
              </div>
              <div ref={nextRef} className="about-us-arrow arrow-2 G-center">
                <img src={IconArrowLeft} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="about-us-decor G-flex">
          <img className="img-desktop" src={aboutUsDecor} alt="" />
          <img className="img-mobile" src={aboutUsDecoMobile} alt="" />
        </div>
      </section>

      <section className="faq-section ">
        <div className="container">
          <div className="faq-body">
            <h2 className="faq-title ">Часто задаваемые вопросы</h2>

            <div className="faq-items G-flex-column">
              <div className="faq-item G-flex-column">
                <h2 className="faq-item-title">
                  Возможно ли использование системы несколькими сотрудниками с
                  разными ролями?
                </h2>
                <p className="faq-sub-title">
                  Да, вы можете разграничить права доступа к отдельным файлам
                  как для групп пользователей, так и для отдельных сотрудников
                </p>
              </div>
              <div className="faq-item G-flex-column">
                <h2 className="faq-item-title">
                  Какие встроенные шаблоны есть в системе?
                </h2>
                <p className="faq-sub-title">
                  Вы можете создавать шаблоны самостоятельно, которые будут
                  подходить под ваши конкретные нужды или же привлекать помощь
                  наших партнеров или нас для этого.
                </p>
              </div>

              <div className="faq-item G-flex-column">
                <h2 className="faq-item-title">
                  Есть ли ограничения по количеству хранимой информации?
                </h2>
                <p className="faq-sub-title">
                  Да, они зависят от изначально подключенного плана. Но Вы
                  можете включить авторасширение пространства для хранения
                  информации, когда места не хватать.
                </p>
              </div>

              <div className="faq-item G-flex-column">
                <h2 className="faq-item-title">
                  Могу ли получить доступ к файлам в пространстве с мобильного
                  устройства?
                </h2>
                <p className="faq-sub-title">
                  Да, у нас доступно мобильное приложение, поддерживающее все
                  необходимые функции
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="faq-decor faq-decor--one">
          <img src={faqDecor1} alt="" />
        </div>
        <div className="faq-decor faq-decor--two">
          <img className="img-desktop" src={faqDecor2} alt="" />
          <img className="img-mobile" src={faqDecor2Mobile} alt="" />
        </div>
      </section>

      <section className="feedback-section ">
        <div className="container">
          <div className="feedback-body G-align-center">
            <div className="feedback-media">
              <img src={feedbackMedia} alt="" />
            </div>

            <form className="feedback-form form" action="">
              <h2 className="feedback-title form-title">
                У вас еще есть вопросы? Мы готовы ответить!
              </h2>
              <div className="feedback-sub-title form-sub-title G-align-center">
                <p>Или напиши нам на почту:</p>
                <a href="mailto:sales@dioc.tech">sales@dioc.tech</a>
              </div>

              <div className="feedback-inputs G-flex-column form-inputs">
                <div className="form-input G-flex-column">
                  <div className="form-input-title G-align-start">
                    <span>Имя Фамилия</span>
                    <div className="form-required G-flex">
                      <img src={required} alt="required" />
                    </div>
                  </div>
                  <label
                    className={`form-label ${
                      formErrors.fullname ? "error" : ""
                    }`}
                  >
                    <input
                      name="fullname"
                      type="text"
                      placeholder="Иван Иванов"
                      value={feedbackData.fullname}
                      onChange={handleChangeFeedbackData}
                    />
                    {formErrors.fullname && (
                      <div className="field-error-message">
                        {formErrors.fullname}
                      </div>
                    )}
                  </label>
                </div>

                <div className="form-input G-flex-column">
                  <div className="form-input-title G-align-start">
                    <span>Номер телефона</span>
                    <div className="form-required G-flex">
                      <img src={required} alt="required" />
                    </div>
                  </div>
                  <label
                    className={`form-label ${
                      formErrors.phoneNumber ? "error" : ""
                    }`}
                  >
                    <input
                      name="phoneNumber"
                      type="number"
                      placeholder="+7 988 000 00-00"
                      value={feedbackData.phoneNumber}
                      onChange={handleChangeFeedbackData}
                    />
                    {formErrors.phoneNumber && (
                      <div className="field-error-message">
                        {formErrors.phoneNumber}
                      </div>
                    )}
                  </label>
                </div>

                <div className="form-input G-flex-column">
                  <div className="form-input-title G-align-start">
                    <span>Электронная почта</span>
                    <div className="form-required G-flex">
                      <img src={required} alt="required" />
                    </div>
                  </div>
                  <label
                    className={`form-label ${formErrors.email ? "error" : ""}`}
                  >
                    <input
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      value={feedbackData.email}
                      onChange={handleChangeFeedbackData}
                    />
                    {formErrors.email && (
                      <div className="field-error-message">
                        {formErrors.email}
                      </div>
                    )}
                  </label>
                </div>

                <div className="form-textarea G-flex-column">
                  <div className="form-input-title G-align-start">
                    <span>Как мы можем помочь?</span>
                  </div>
                  <label
                    className={`textarea-label ${
                      formErrors.message ? "error" : ""
                    }`}
                  >
                    <textarea
                      name="message"
                      placeholder="Расскажите коротко о вашем проекте"
                      value={feedbackData.message}
                      onChange={handleChangeFeedbackData}
                    ></textarea>
                    {formErrors.message && (
                      <div className="field-error-message">
                        {formErrors.message}
                      </div>
                    )}
                  </label>
                </div>

                <div
                  className={`form-agree agree-box G-align-center ${
                    feedbackData.privacyPolicyConsent ? "checked" : ""
                  } ${formErrors.privacyPolicyConsent ? "error" : ""}`}
                  onClick={() =>
                    setFeedbackData({
                      ...feedbackData,
                      privacyPolicyConsent: !feedbackData.privacyPolicyConsent,
                    })
                  }
                >
                  <div className="agree-icon">
                    <img src={box} alt="" />
                  </div>
                  <div className="agree-text">
                    Вы согласны с{" "}
                    <Link to="/">политикой конфиденциальности</Link>
                  </div>
                  {formErrors.privacyPolicyConsent && (
                    <div className="field-error-message">
                      {formErrors.privacyPolicyConsent}
                    </div>
                  )}
                </div>

                <div
                  className={`form-btn-cnt G-align-start ${
                    !isDisabledFeedbackForm ? "cookie-bnt" : ""
                  }`}
                >
                  <button
                    disabled={isDisabledFeedbackForm}
                    onClick={handleSubmitFeedback}
                    className={`${isDisabledFeedbackForm ? "btn-black" : ""}`}
                  >
                    Написать нам
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Cookie />
    </>
  );
};

export default Home;
