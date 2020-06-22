import React from "react";
import s from '../css/exp.module.css'
import Item from "./Item";

const Exp = () => {
    return (
        <div className={s.exp_wrapper} id = 'resume'>
            <div className={s.edu}>
                <div className={s.head}>
                    Education
                </div>
                <div className={s.item}>
                    <Item head='Russian University of Economics' date='2018-2022'
                          descr='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.'/>
                </div>
                <div className={s.item}>
                    <Item head='KMPO RANEPA' date='2014-2018'
                          descr='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min.'/>
                </div>
            </div>
            <div className={s.exp}>
                <div className={s.head}>
                    Experience
                </div>
                <div className={s.item}>
                    <Item head='Rostelecom' date='2018-2018'
                          descr='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>
                </div>
                <div className={s.item}>
                    <Item head='Rostelecom' date='2018-2018'
                          descr='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>
                </div>
            </div>


        </div>
    )
}

export default Exp