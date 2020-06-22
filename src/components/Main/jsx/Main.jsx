import React from "react";
import Nav from './Nav'
import Profile from "./Profile";
import Scroll from "./Scroll";
import s from '../css/main.module.css'


const Main = () => {
    return (
        <div className={s.main}>
            <Nav/>
            <Profile/>
            <Scroll/>
        </div>
    )

}

export default Main;