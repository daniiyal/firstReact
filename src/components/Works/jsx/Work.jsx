import React from "react";
import s from '../css/works.module.css'
import Item from "./Item";

import img from './unity.gif';
import img2 from './defisheye.png';
import img3 from '.films.png/';

const Work = () => {
    return (
        <div className={s.work_wrapper} id = 'portfolio'>
            <div className={s.head}>
                Selected Work
            </div>
            <div className={s.work} >
                <div className={s.item}>
                    <Item photo={img} head='Бой на основе двух "стеков" юнитов'
                        descr='Лабораторная работа с примененением паттернов проектирования'/>
                </div>
                <div className={s.item}>
                    <Item photo={img2} head='Коррекция видео'
                        descr='Программа для коррекции видеоряда, искаженного объективом "рыбий глаз"'/>
                </div>
                <div className={s.item}>
                    <Item photo={img3} head='Веб-приложение "Фильмотека"'
                        descr='Разработка веб-приложения для подбора фильмов с учетом индивидуальных предпочтений пользователя на базе СУБД MySQL'/>
                </div>
            </div>
        </div>
    )
}

export default Work