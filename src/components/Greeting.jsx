import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import "../css/style.video_class.css"


const Greeting = () => {
    const navigate = useNavigate()
    function backToMap() {
        navigate('/map');
    }
    function checkTest() {
        var btnResutl = document.getElementById('btnResutl');
        var resultFild = document.getElementById('resultFild');
        var inputFild = document.getElementsByTagName('input');
        let resultedInputs = document.querySelectorAll("input[type='radio']:checked");
        let result = 0;
        Array.prototype.map.call(resultedInputs, (el) => {
            result += parseInt(el.dataset.value);
        });
        console.log(result);
        resultFild.innerHTML = result + ' баллов'
    }
    return (
        <div>
            <div className="container-login100">
                <h1 class="text_margin" align="center">Приветствие</h1>
                <div className='flex'>
                    <div className="thumb-wrap">
                        <video width="100%" controls >
                            <source src="img/video1.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div>
                        <a href="#test" class="border-button">skip</a>
                    </div>
                </div>

                <div class="test_style">
                    <div className='content_center'>
                        <h1 id="test">Тест</h1>
                        <div class="question">
                            <div>
                                <p className='text_size'>Дұрыс өрнекті белгіле: M </p>
                            </div>
                            <div class="left20">
                                <div>
                                    <input type="radio" value="1" name="r1" id="Answer" data-value='0' /><img className='img_size' src="img/signs/letterA.png" />
                                </div>
                                <div>
                                    <input type="radio" name="r1" id="Answer" data-value='0' /><img className='img_size' src="img/signs/letterT.png" alt="" />
                                </div>
                                <div>
                                    <input type="radio" name="r1" id="Answer" data-value='1' /><img className='img_size' src="img/signs/letterM.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="question">
                            <div>
                                <p className='text_size'>Дұрыс өрнекті белгіле: Т </p>
                            </div>
                            <div className="left20">
                                <div>
                                    <input type="radio" value="1" name="r2" id="Answer" data-value='0' /><img className='img_size' src="img/signs/letterM.png" alt="" />
                                </div>
                                <div>
                                    <input type="radio" name="r2" id="Answer" data-value='0' /><img className='img_size' src="img/signs/letterA.png" alt="" />
                                </div>
                                <div>
                                    <input type="radio" name="r2" id="Answer" data-value='1' /><img className='img_size' src="img/signs/letterT.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex_button'>
                                <button onClick={checkTest} className="button_rezult" id="btnResutl">Нәтижені білу</button>
                                <button onClick={backToMap} style={{ marginLeft: '10px' }} className="button_rezult">Басты мәзір</button>
                            </div>

                            <div className="bottom_margin" id="resultFild"></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Greeting