import React from "react";
import s from '../css/about.module.css'
import img from './957d913f3328a6a260ebdf996a90dd6a.jpg'

const About = () => {
    return (
        <div className={s.about} id = 'about'>
            <div className={s.head}>
                О себе
            </div>
            <div className={s.descr}>
            Имею навыки разработки на C#, веб-приложений Django на базе СУБД MySQL. 
            <br></br>
            Есть опыт работы с ORM Entity Framework, базами данных MS SQL и MySQL.
      
            <div className={s.keywords}>
            Ключевые навыки: 
                <span> C#, Python, MySQL, Django Framework, PostgreSQL, HTML, CSS</span>
            </div>
            </div>
            <div className={s.contact}>
                <div>Имя: Даниял Магомедов</div>
                <div>Телефон: +7 (925) 444-34-53</div>
                <div>Адрес: Москва, Выхино </div>
            </div>
            <div className={s.mail}>
                <div>Mail: danik.magomedow@mail.ru</div>
                <div>Занятость: проектная работа, стажировка, частичная занятость</div>
                <div>График работы: удаленная работа, гибкий график</div>
                <div>&nbsp;</div>
            </div>
            <div className={s.photo}>
                <img src={img}/>
            </div>
        </div>
    )

}

export default About

