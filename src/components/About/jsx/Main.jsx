import React from 'react'
import s from '../css/main.module.css'
import About from "./About";
import Exp from "./Exp";

const Main = () =>{
    return (
        <div className = {s.main}>
            <About/>
            <Exp/>

        </div>
    )
}

export default Main