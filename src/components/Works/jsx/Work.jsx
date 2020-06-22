import React from "react";
import s from '../css/works.module.css'
import Item from "./Item";

import img from './game.jpg';
import img2 from './gotovye-proekty-domov.jpg';

const Work = () => {
    return (
        <div className={s.work_wrapper} id = 'portfolio'>
            <div className={s.head}>
                Selected Work
            </div>
            <div className={s.work} >
                <div className={s.item}>
                    <Item photo={img} head='Platformer'
                          descr='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'/>
                </div>
                <div className={s.item}>
                    <Item photo={img2} head='Platformer'
                          descr='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'/>
                </div>
                <div className={s.item}>
                    <Item photo={img} head='Platformer'
                          descr='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'/>
                </div>
            </div>
        </div>
    )
}

export default Work