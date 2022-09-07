import React from "react";
import s from '../css/about.module.css'
import img from './957d913f3328a6a260ebdf996a90dd6a.jpg'

const About = () => {
    return (
        <div className={s.about} id = 'about'>
            <div className={s.head}>
                
            </div>
            <div className={s.descr}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam.
            </div>
            <div className={s.contact}>
                <div>Name: Daniyal Magomedov</div>
                <div>Phone: +7(966)362-11-03</div>
                <div>Address: 11, Botanicheskaya st.</div>
            </div>
            <div className={s.mail}>
                <div>Mail: danik.magomedow@mail.ru</div>
                <div>Freelance: available</div>
                <div>&nbsp;</div>
            </div>
            <div className={s.photo}>
                <img src={img}/>
            </div>
        </div>
    )

}

export default About

