import React, {useState} from 'react';
import './home.scss'
import lock from '../../assets/images/IconLock.svg'
import IconTree from '../../assets/images/IconTree.svg'
import IconLogicalElement from '../../assets/images/IconLogicalElement.svg'
import serviceItemDecor from '../../assets/images/serviceItemDecor.png'
import IconWrench from '../../assets/images/IconWrench.svg'
import IconTeam from '../../assets/images/IconTeam.svg'
import chooseImg1 from '../../assets/images/chooseImg1.png'
import chooseImg2 from '../../assets/images/chooseImg2.png'
import chooseImg2Mobile from '../../assets/images/chooseImg2Mobile.png'
import chooseImg1Mobile from '../../assets/images/chooseImg1Mobile.png'
import subscribeDecor from '../../assets/images/subscribeDecor.png'
import subscribeDecorMobile from '../../assets/images/subscribeDecorMobile.png'
import convenientImg from '../../assets/images/convenientImg.png'
import convenientImg2 from '../../assets/images/convenientImg2.png'
import convenientImg3 from '../../assets/images/convenientImg3.png'
import convenientImg4 from '../../assets/images/convenientImg4.png'
import convenientImgMobile from '../../assets/images/convenientImgMobile.png'
import convenientImg2Mobile from '../../assets/images/convenientImg2Mobile.png'
import convenientImg3Mobile from '../../assets/images/convenientImg3Mobile.png'
import convenientImg4Mobile from '../../assets/images/convenientImg4Mobile.png'
import search from '../../assets/images/search.svg'
import flag from '../../assets/images/flag.svg'
import trending from '../../assets/images/trending.svg'
import IconOperators from '../../assets/images/IconOperators.svg'
import IconSearchStroked from '../../assets/images/IconSearchStroked.svg'
import IconHelmet from '../../assets/images/IconHelmet.svg'
import IconDataNull from '../../assets/images/IconDataNull.svg'
import IconSpeed from '../../assets/images/IconSpeed.svg'
import rateIcon from '../../assets/images/rateIcon.svg'
import rateDecor from '../../assets/images/rateDecor.png'


import {Link} from "react-router-dom";


const Home = () => {
    const [checked, setChecked] = useState(false);

    return <>
        <section className='hero-section'>
            <div className='container'>
                <div className='hero-body G-column-center'>
                    <h1 className='hero-title'>
                        Сотрудничайте <span className='mobile-text-wrap'>без усилий</span> <span className='text-wrap'>с ДИОК.Знания</span>
                    </h1>
                    <p className='hero-sub-title'>
                        <span className='mobile-text-wrap'>Создавайте знания, делитесь ими</span> и применяйте их <span
                        className='desktop-text-wrap'>в разных командах</span>
                    </p>
                    <button className='hero-btn btn-primary'>Начать работу</button>
                </div>
            </div>
        </section>

        <section className='services-section'>
            <div className='container'>
                <div className='services-items G-flex'>
                    <div className='service-item G-image'>
                        <div className='service-item-header G-align-center'>
                            <div className='service-icon'>
                                <img src={lock} alt=""/>
                            </div>
                            <h3 className='service-item-title'>Надежное решение</h3>
                        </div>
                        <p className='service-item-text'>
                            Защита данных, Гарантированная доступность
                        </p>
                        <div className='service-item-decor'>
                            <img src={serviceItemDecor} alt=""/>
                        </div>
                    </div>

                    <div className='service-item G-image'>
                        <div className='service-item-header G-align-center'>
                            <div className='service-icon'>
                                <img src={IconTree} alt=""/>
                            </div>
                            <h3 className='service-item-title'>Единая база знаний</h3>
                        </div>
                        <p className='service-item-text'>
                            Накопление опыта, Повышение эффективности
                        </p>

                        <div className='service-item-decor'>
                            <img src={serviceItemDecor} alt=""/>
                        </div>
                    </div>

                    <div className='service-item G-image'>
                        <div className='service-item-header G-align-center'>
                            <div className='service-icon'>
                                <img src={IconLogicalElement} alt=""/>
                            </div>
                            <h3 className='service-item-title'>Выгода</h3>
                        </div>
                        <p className='service-item-text'>
                            Снижение издержек, Оптимизация <span className='text-wrap'>процессов</span>
                        </p>

                        <div className='service-item-decor'>
                            <img src={serviceItemDecor} alt=""/>
                        </div>
                    </div>


                    <div className='service-item G-image'>
                        <div className='service-item-header G-align-center'>
                            <div className='service-icon'>
                                <img src={IconWrench} alt=""/>
                            </div>
                            <h3 className='service-item-title'>Управление доступами</h3>
                        </div>
                        <p className='service-item-text'>
                            Роли и права, Контроль доступа
                        </p>

                        <div className='service-item-decor'>
                            <img src={serviceItemDecor} alt=""/>
                        </div>
                    </div>


                    <div className='service-item G-image'>
                        <div className='service-item-header G-align-center'>
                            <div className='service-icon'>
                                <img src={IconTeam} alt=""/>
                            </div>
                            <h3 className='service-item-title'>Кроссплатформенность</h3>
                        </div>
                        <p className='service-item-text'>
                            Доступ к данным с любого устройства и места
                        </p>

                        <div className='service-item-decor'>
                            <img src={serviceItemDecor} alt=""/>
                        </div>
                    </div>

                </div>
            </div>

            <div className='services-decor'></div>
        </section>

        <section className='why-choose-section section'>
            <div className='choose-container'>
                <div className='why-choose-body'>
                    <h2 className='section-title'>Почему выбирают ДИОК.Знания?</h2>
                    <div className='why-choose-cnt G-align-center block-cnt'>
                        <div className='choose-average-item block-item'>
                            <div className='choose-item-texts block-texts'>
                                <h3 className='block-title'>Настраиваемые шаблоны</h3>
                                <p className='block-text'>Начните с готовых шаблонов или создайте свои.</p>
                            </div>
                            <div className='choose-item-img block-img'>
                                <img className='img-desktop' src={chooseImg1} alt=""/>
                                <img className='img-mobile' src={chooseImg1Mobile} alt=""/>

                            </div>

                        </div>

                        <div className='choose-big-item block-item'>
                            <div className='choose-item-texts block-texts'>
                                <h3 className='block-title'>Централизованные знания</h3>
                                <p className='block-text'>Храните все знания вашей команды в одном месте.</p>
                            </div>
                            <div className='choose-item-img block-img'>
                                <img className='img-desktop' src={chooseImg2} alt=""/>
                                <img className='img-mobile' src={chooseImg2Mobile} alt=""/>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section className='subscribe-section section'>
            <div className='container'>
                <div className='subscribe-body G-align-start'>
                    <div className='subscribe-text-cnt'>
                        <h2 className='subscribe-text'>
                            Не пропустите наши лучшие <span
                            className='desktop-text-wrap'>материалы! Подпишитесь на нашу</span> почтовую рассылку о
                            бизнесе
                            <span className='desktop-text-wrap'>и организации процессов</span>
                        </h2>
                    </div>

                    <div className='subscribe-tools'>
                        <h3 className='subscribe-tools-title'>Электронная почта</h3>
                        <label className='subscribe-label'>
                            <input className='subscribe-input' type="email" name='email'
                                   placeholder='mail@youcompany.com'/>
                        </label>
                        <div className={`agree-box G-align-center ${checked ? "checked" : ""}`}
                             onClick={() => setChecked(!checked)}>
                            <div className='agree-icon'></div>
                            <div className='agree-text'>
                                Вы согласны с <Link to='/'>политикой конфиденциальности</Link>
                            </div>

                        </div>
                        <div className='agree-btn G-justify-end'>
                            <button className='btn-primary'>Подписаться</button>
                        </div>
                    </div>
                    <div className='subscribe-decor'>
                        <img className='img-desktop' src={subscribeDecor} alt=""/>
                        <img className='img-mobile' src={subscribeDecorMobile} alt=""/>


                    </div>
                </div>
            </div>
        </section>


        <section className='why-choose-section section'>
            <div className='container'>
                <div className='why-choose-body'>
                    <h2 className='section-title'>Больше удобных функций</h2>
                    <div className='convenient-columns G-flex-column'>
                        <div className='why-choose-cnt convenient-column G-align-center block-cnt'>
                            <div className='convenient-average-item block-item'>
                                <div className='choose-item-texts block-texts'>
                                    <h3 className='block-title'>Расширенный поиск</h3>
                                    <p className='block-text'>Находите нужное быстро с помощью мощного поиска.</p>
                                </div>
                                <div className='choose-item-img block-img'>
                                    <img className='img-desktop' src={convenientImg} alt=""/>
                                    <img className='img-mobile' src={convenientImgMobile} alt=""/>

                                </div>
                                <div className='convenient-item-tools'>
                                    <div className='convenient-search'>
                                        <label className='convenient-search-label'>
                                            <div className='search-icon G-flex'>
                                                <img src={search} alt=""/>
                                            </div>
                                            <input type="text" placeholder='Поиск по...'/>
                                        </label>
                                    </div>
                                    <div className='convenient-filter'>
                                        <div className='convenient-filter-icon G-flex'>
                                            <img src={flag} alt=""/>
                                        </div>
                                        <p className='filter-text'>Фильт...</p>
                                    </div>
                                </div>
                            </div>
                            <div className='convenient-big-item block-item'>
                                <div className='choose-item-texts block-texts'>
                                    <h3 className='block-title'>История страниц</h3>
                                    <p className='block-text'>Отслеживайте изменения и возвращайтесь к предыдущим
                                        версиям.</p>
                                </div>
                                <div className='choose-item-img block-img'>
                                    <img className='img-desktop' src={convenientImg2} alt=""/>
                                    <img className='img-mobile' src={convenientImg2Mobile} alt=""/>

                                </div>
                            </div>
                        </div>

                        <div className='why-choose-cnt convenient-column G-align-center '>
                            <div className='convenient-average-item block-item'>
                                <div className='choose-item-texts block-texts'>
                                    <h3 className='block-title'>Гибкая настройка прав</h3>
                                    <p className='block-text'>Контролируйте, кто может просматривать и редактировать
                                        ваши страницы.</p>
                                </div>
                                <div className='choose-item-img block-img'>
                                    <img className='img-desktop' src={convenientImg3} alt=""/>
                                    <img className='img-mobile' src={convenientImg3Mobile} alt=""/>

                                </div>

                            </div>
                            <div className='convenient-big-item block-item'>
                                <div className='choose-item-texts block-texts'>
                                    <h3 className='block-title'>Уведомления</h3>
                                    <p className='block-text'>
                                        Будьте в курсе событий с помощью уведомлений в реальном времени.
                                    </p>
                                </div>
                                <div className='choose-item-img block-img'>
                                    <img className='img-desktop' src={convenientImg4} alt=""/>
                                    <img className='img-mobile' src={convenientImg4Mobile} alt=""/>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>


        <section className='implementations-section section'>
            <div className='container'>
                <div className='implementations-titles G-align-center'>
                    <div className='implementations-icon G-align-center'>
                        <img src={trending} alt=""/>
                    </div>
                    <div className='implementations-title G-align-center'>
                        <p>Эффект от внедрения </p>
                        <span>ДИОК.Знания</span>
                    </div>
                </div>
                <div className='services-items implementations-services G-flex'>
                    <div className='service-item implementations-big-item '>
                        <div className='service-item-header G-align-center'>
                            <div className='service-icon'>
                                <img src={IconOperators} alt=""/>
                            </div>
                            <h3 className='service-item-title'>Упрощение коммуникации</h3>
                        </div>
                        <p className='service-item-text'>
                            Делитесь знаниями со всей компанией в 3 клика. Обсуждайте и улучшайте внутренние процессы
                        </p>
                        <div className='service-item-decor'>
                            <img src={serviceItemDecor} alt=""/>
                        </div>
                    </div>

                    <div className='service-item implementations-average-item '>
                        <div className='service-item-header G-align-center'>
                            <div className='service-icon'>
                                <img src={IconSearchStroked} alt=""/>
                            </div>
                            <h3 className='service-item-title'>Экономия времени</h3>
                        </div>
                        <p className='service-item-text'>
                            Быстрый поиск по знаниям экономит время сотрудников для нахождении ответа на их вопрос и
                            освобождает экспертов от лишней нагрузки
                        </p>
                        <div className='service-item-decor'>
                            <img src={serviceItemDecor} alt=""/>
                        </div>
                    </div>

                    <div className='service-item  implementations-average-item '>
                        <div className='service-item-header G-align-center'>
                            <div className='service-icon'>
                                <img src={IconHelmet} alt=""/>
                            </div>
                            <h3 className='service-item-title'>Снижение рисков</h3>
                        </div>
                        <p className='service-item-text'>
                            ДИОК.Знания исключает риск потери необходимых документов, обеспечивает конфиденциальность,
                            целостность и доступность информации
                        </p>
                        <div className='service-item-decor'>
                            <img src={serviceItemDecor} alt=""/>
                        </div>
                    </div>


                    <div className='service-item  implementations-average-item'>
                        <div className='service-item-header G-align-center'>
                            <div className='service-icon'>
                                <img src={IconDataNull} alt=""/>
                            </div>
                            <h3 className='service-item-title'>Сокращение требований к уровню нового сотрудника</h3>
                        </div>
                        <p className='service-item-text'>
                            Оформленная база знаний организации экономит до 30% на ФОТ. Формируйте процессы и
                            оцифровывайте их в ДИОК.Знания.
                        </p>
                        <div className='service-item-decor'>
                            <img src={serviceItemDecor} alt=""/>
                        </div>
                    </div>


                    <div className='service-item  implementations-average-item'>
                        <div className='service-item-header G-align-center'>
                            <div className='service-icon'>
                                <img src={IconSpeed} alt=""/>
                            </div>
                            <h3 className='service-item-title'>Ускорение адаптации новых сотрудников</h3>
                        </div>
                        <p className='service-item-text'>
                            Экономим до 80 часов на онбординг процессах новых сотрудников
                        </p>
                        <div className='service-item-decor'>
                            <img src={serviceItemDecor} alt=""/>
                        </div>
                    </div>


                </div>
            </div>

            <div className='services-decor'></div>
        </section>


        <section className='rate-section'>
            <div className='container'>
                <div className='rate-body G-align-center'>
                    <div className='rate-description G-flex-column'>
                        <div className='rate-header G-align-center'>
                            <div className='rate-icon G-flex'>
                                <img src={rateIcon} alt=""/>
                            </div>
                            <p className='rate-name'>Тариф “Единый”</p>
                        </div>

                        <div className='rate-price G-flex-column'>
                            <h2 className='rate-value'>499 руб/мес.</h2>
                            <p className='rate-from'>С пользователя</p>
                        </div>


                        <div className='rate-advantages G-flex-column'>
                            <p className='rate-advantage'>Пространства и страницы</p>
                            <p className='rate-advantage'>Права доступа</p>
                            <p className='rate-advantage'>Умный поиск</p>
                            <p className='rate-advantage'>Контроль версий</p>
                            <p className='rate-advantage'>Кроссплатформенность</p>
                        </div>

                        <div className='rate-bnt G-justify-end'>
                            <button className=''>Попробовать бесплатно</button>
                        </div>


                        <div className='rate-decor'>
                            <img src={rateDecor} alt=""/>
                        </div>


                    </div>
                    <h2 className='rate-text'>
                        Персональный
                        <span className='text-wrap'>тариф для вас</span>
                    </h2>
                </div>
            </div>
        </section>


        <section className='about-us-section section'>
            <div className='container'>
                <div className='about-us-body G-flex-column'>
                    <div className='about-us-steps G-align-center'>
                        <div className='about-us-step'></div>
                        <div className='about-us-step active'></div>
                    </div>
                    <div className='about-us-texts G-flex-column'>
                        <h2 className='about-title'>НПЗ</h2>
                        <p className='about-us-clue'>Более 2000 сотрудников</p>
                        <p className='about-us-text'>
                            — Внедрили систему и упростили обслуживание оборудования <span className='text-wrap'>благодаря умному поиску по
                            содержанию</span>
                        </p>
                        <p className='about-us-clue'>Какой эффект дало</p>
                        <div className='about-us-assessment G-align-center'>
                            <h3 className=''>+50%</h3>
                            <p>Эффективность <span className='text-wrap'>обслуживания</span></p>
                            <h3 className=''>+10%</h3>
                            <p>Эффективность <span className='text-wrap'>производства</span></p>
                        </div>
                    </div>

                    <div className='about-us-comments'>
                        <p>Комментарий</p>
                    </div>


                </div>
            </div>
        </section>

    </>
};

export default Home;