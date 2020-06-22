import React from "react";
import s from '../css/scroll.module.css'

function Scroll() {
    return (
        <div className={s.scroll}>
            <div className={s.iconScroll}>
                <div>
                    <a><span></span></a>
                </div>
            </div>
        </div>
    )
}

export default Scroll