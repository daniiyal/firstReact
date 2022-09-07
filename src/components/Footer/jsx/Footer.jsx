import React from "react";
import s from '../css/footer.module.css'

import logo from '../../Main/jsx/rose.png'
import vk from './vk.png'
import inst from './instagram.png'
import telega from './telegram.png'

const Footer = () => {
    return (
        <div className={s.footer_wrapper}>
            <div className={s.logo}>
                <a href='#home'><img src={logo} alt="logo"/></a>
            </div>
            <div className={s.contact}>
                <div>Связаться со мной</div>
                <div className={s.email}>danik.magomedow@mail.ru</div>
            </div>
            <div className={s.socials}>
                <a href='https://vk.com/m.daniyal'> <img src={vk}/> </a>
                <a href='https://www.instagram.com/m_daniiyal/'> <img src={inst}/> </a>
                <a href='https://t.me/m_daniiyal'> <img src={telega}/></a>
            </div>
        </div>
    )
};

export default Footer