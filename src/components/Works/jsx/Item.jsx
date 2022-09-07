import React from "react";
import s from '../css/item.module.css'

const Item = (props) => {
    return (
        <div className={s.item_wrapper}>
            <div className={s.photo}>
                <img src={props.photo}/>
            </div>
            <div className={s.info}>
                <div className={s.head}>
                    {props.head}
                </div>
                <div className={s.descr}>
                    {props.descr}
                </div>
                <div className={s.read}>
                    <a href={props.repo}>Открыть в репозитории...</a>
                </div>
            </div>
        </div>
    )
}

export default Item