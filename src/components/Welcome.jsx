import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import '../css/App.css'
import '../css/bootstrap.css'


const Welcome = () => {


    const navigate = useNavigate()
    function Add() {
        navigate('/login')
    }
    function Regist() {
        navigate('/signup')
    }
    return (
        <div className='Grad'>
            <header className="header_area">
                <div className="main_menu">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container">
                            <NavLink to="map" className="navbar-brand logo_h"><img src="img/hand2.png" alt=""
                                style={{ width: "100px" }} /></NavLink>
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>

                            <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                                <ul className="nav navbar-nav menu_nav justify-content-center">
                                    <li className="nav-item active"><a className="nav-link" href="index.html">Basty</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#nash">Biz tyraly</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#nash">Gallery</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
                                </ul>
                                <ul className="nav navbar-nav navbar-right">
                                    <button className="nav-item primary_btn" onClick={Regist}> Tirkely </button>
                                </ul>
                                <ul className="nav navbar-nav navbar-right">
                                    <button className="nav-item primary_btn" onClick={Add}  > Kiru </button>
                                </ul>

                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            <div className="home_banner_area">
                <div className="banner_inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="home_left_img">
                                    <img className="img-fluid" src="/img/home-left.png" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="banner_content">
                                    <h2>Обучение языку жестов</h2>
                                    <p>На данный момент можете просмотреть наш курс на YouTube по кнопке ниже</p>
                                    <div className="d-flex align-items-center">
                                        <a id="play-home-video" className="video-play-button" href="https://youtube.com/shorts/kg1v29L6cok?feature=share">
                                            <span></span>
                                        </a>
                                        <div className="watch_video text-uppercase">Просмотреть видео инструктаж</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about_us_area section_gap_top2" id="nash">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="main_title">
                                <h1 style={{ color: 'black' }}>Biz tyraly</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row about_content align-items-center">
                        <div className="col-lg-6">
                            <div className="section_content">
                                <img className="img-fluid w-100" src="img/F.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="section_content">
                                <h6>Наш Frontend разработчик</h6>
                                <h1>Шораев Мирас Аскарович </h1>
                                <p>Один из самых амбициозных студентов своего потока будущий Senior программист</p>
                                <a className="primary_btn" href="#">Посмотреть телеграмм аккаунт</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about_us_area section_gap_top" id="nash">
                <div className="container">

                    <div className="row about_content align-items-center">
                        <div className="col-lg-6">
                            <div className="section_content">
                                <img className="img-fluid w-100" src="/img/b.jpg" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="section_content">
                                <h6>Наш Backend разработчик</h6>
                                <h1>Гезлер Джонатан Джон </h1>
                                <p>Будущий великий Python разработчик Амбициозный и сильный</p>
                                <a className="primary_btn" href="#">Посмотреть телеграмм аккаунт</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="about_us_area section_gap_top" id="nash">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="main_title">
                                <h1>Бізбен бірге жаңа сөз жатта</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="new_games_item">
                                <img src="img/zyro-image.png" alt="" />
                                <div className="upcoming_title">
                                    <h3><a href="#nash">Best Ps4 Games</a></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="new_games_item">
                                <img src="img/zyro-image (1).png" alt="" />
                                <div className="upcoming_title">
                                    <h3><a href="#nash">World Dart 2019</a></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="new_games_item">
                                <img src="img/zyro-image (2).png" alt="" />

                                <div className="upcoming_title">
                                    <h3><a href="#nash">New XBox Games</a></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="new_games_item">
                                <img src="img/zyro-image(3).png" alt="" />
                                <div className="upcoming_title">
                                    <h3><a href="#nash">Amarican Football</a></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="frequently_area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="main_title">
                                <h1>Погружение в мир языка жестов</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row frequent_inner">
                        <div className="col-lg-5 col-md-5">
                            <div className="frequent_item">
                                <h3> Открытие нового мира: Введение в язык жестов</h3>
                                <p>Погрузись в мир таинственного и великолепного языка жестов! Открой для себя удивительную способность общаться без слов, используя лишь движения рук и тела. Каждый жест станет песней, рассказывающей свою уникальную историю, словно танец, который приковывает внимание и открывает двери к невероятным возможностям.</p>
                            </div>
                        </div>  
                        <div className="offset-lg-2 col-lg-5 offset-md-2 col-md-5">
                            <div className="frequent_item">
                                <h3>Изящество и эмоциональность: Язык жестов как искусство коммуникации</h3>
                                <p>Обучение языку жестов - это погружение в новое измерение коммуникации, где слова уступают место взмахам рук и выразительности лица. В этом удивительном путешествии ты научишься читать и понимать эмоции, мысли и идеи, которые таятся в движениях окружающих тебя людей. Вместе с языком жестов ты откроешь дверь к инклюзивности, улучшишь свои коммуникативные навыки.</p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5">
                            <div className="frequent_item">
                                <h3>Понимание через движение: Восприятие эмоций и мыслей в языке жестов</h3>
                                <p>С каждым новым жестом ты будешь расширять свой словарный запас и становиться все ближе к истинной глубине общения. Наблюдай, изучай и впитывай эту сокровенную форму языка, которая открывает возможность общаться с людьми, которые могут быть лишены слуха. Твои руки станут волшебными инструментами, передающими не только слова.</p>
                            </div>
                        </div>
                        <div className="offset-lg-2 col-lg-5 offset-md-2 col-md-5">
                            <div className="frequent_item">
                                <h3>Барьеры разрушаются: Язык жестов как средство инклюзивности</h3>
                                <p>Обучение языку жестов - это не только обогащение культурного опыта, но и шанс стать связующим звеном в обществе. Он позволит тебе преодолеть барьеры между разными людьми и создать сильные связи, не зависимо от языкового барьера. Каждый жест будет дарить тебе возможность улыбаться, поддерживать и вдохновлять других, расширяя свой круг общения и понимания.</p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5">
                            <div className="frequent_item last-child">
                                <h3>Расширение горизонтов: Культурное обогащение через язык жестов</h3>
                                <p>Представь себе, как ты сможешь восхитить и впечатлить окружающих своим мастерством языка жестов! Открой для себя потрясающую мощь выразительности и передай свои мысли с помощью грации и энергии движений. Твои руки станут словами, говорящими прямо к сердцу каждого, кто находится поблизости.</p>
                            </div>
                        </div>
                        <div className="offset-lg-2 col-lg-5 offset-md-2 col-md-5">
                            <div className="frequent_item last-child">
                                <h3>Выразительность без слов: Мощь языка жестов в передаче энергии и идей</h3>
                                <p>Не упускай возможность познать язык жестов и принять вызов стать частью удивительного мира невербального общения. Пустись в путь, открывай новые горизонты и становись свидетелем магии, которую ты можешь создавать с помощью всего лишь нескольких движений рук. Обучение языку жестов - это путешествие, которое навсегда оставит след в твоем сердце и в сердцах всех, кто окружает тебя.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer_area section_gap_top">
                    <div className="row single-footer-widget">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="social_widget">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-dribbble"></i></a>
                                <a href="#"><i className="fa fa-behance"></i></a>
                            </div>
                        </div>
                    </div>
            </footer>
        </div>
    )
}

export default Welcome