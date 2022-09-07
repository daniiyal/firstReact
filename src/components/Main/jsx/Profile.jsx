import React from "react";
import s from'../css/profile.module.css'
import photo from './denzel.jpg'


function Profile() {
    return(
        <div className={s.profile}>
            <div className={s.photo}>
                <img src={photo}/>
            </div>
            <div className={s.description}>
                <div>
                    <div className={s.name}>
                        Daniyal Magomedov
                    </div>
                    <div className={s.level}>
                        Junior Developer
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile