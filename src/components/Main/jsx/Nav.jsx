import React from "react";
import s from '../css/nav.module.css'
import image from './rose.png'


function Nav() {
    return (
        <div className={s.nav_wrapper} id = "home">
            <div className={s.logo}>
                <div>
                    <img src={image} alt="logo"/>
                </div>
            </div>
            <div className={s.nav}>
                <div>
                    <a href="#contact">Hire Me</a>
                </div>
                <div>
                    <a href="#">Home</a>
                </div>
                <div>
                    <a href="#about">About me</a>
                </div>
                <div>
                    <a href="#resume">Resume</a>
                </div>
                <div>
                    <a href="#portfolio">Portfolio</a>
                </div>
            </div>
        </div>
    )
}

export default Nav