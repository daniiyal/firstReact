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
                    <Item head='РЭУ им. Г.В. Плеханова' date='2018-2023'
                          descr='Высшая школа кибертехнолгий, математики и статистики. Математическое обепечение и администрирования информационных систем'>
                <div className={s.item}>
                    <Item head='КМПО РАНХиГС' date='2014-2018'
                          descr='Отделение электрических станций и компьютерных сетей. Компьютерные сети'/>
                </div>
            </div>
            <div className={s.exp}>
                <div className={s.head}>
                    Experience
                </div>
                <div className={s.item}>
                    <Item head='Ростелеком' date='2018-2018'
                                descr='Проходил производственную практику. Участвовал в налаживании работы беспроводной сети, а именно разработка программного модуля на Python для Raspberry Pi, 
                                        уведомляющего системного администратора об отсутствии соединения, проводил диагностику сетевого оборудования и рабочих машин пользователей сети.'/>
                </div>
            </div>


        </div>
    )
}

export default Exp