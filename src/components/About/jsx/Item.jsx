import React from "react";
import s from '../css/item.module.css'

const Item = (props) =>{
    return(
        <div className={s.item_wrapper}>
            <div className={s.head}>
                {props.head}
            </div>
            <div className={s.date}>
                {props.date}
            </div>
            <div className={s.descr}>
                {props.descr}
            </div>
        </div>
    )
}

export default Item