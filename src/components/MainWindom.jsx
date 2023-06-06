import React from 'react'
import '../css/Windom.css'
import { Link, NavLink, useNavigate } from 'react-router-dom';



const MainWindom = () => {

    return (
        <div className="block-flex">
            <div className="bacground_img"></div>
            <div className="second-flex">
                <div>
                    <h3 align="center"> Обучению языку жестов </h3>
                </div>
                <div className="lesson1">
                    <div>
                        <NavLink to="/lesson1" className="button19">Приветсвие</NavLink>
                    </div>
                    <div>
                        <NavLink to="/lesson1" className="button19">Вопросы</NavLink>
                    </div>
                    <div>
                        <NavLink to="/lesson1" className="button19">Ответы</NavLink>
                    </div>
                    <div>
                        <NavLink to="/lesson1" className="button19">Вопросы2</NavLink>
                    </div>
                    <div>
                        <NavLink to="/lesson1" className="button19">Ответы</NavLink>
                    </div>
                </div>
            </div>
            <div className="bacground_img"></div>
        </div>

    )
}

export default MainWindom