import React from "react";
import s from '../css/contact.module.css'

const Contact = () => {
    return (
        <div className={s.contact_wrapper} id = "contact">
            <div className={s.head}>
                Let's Talk!
            </div>
            <div className={s.field}>
                <div className={s.form__group}>
                    <input type="input" className={s.form__field} placeholder="First Name" name="fname" id='fname'
                           required/>
                    <label htmlFor="fname" className={s.form__label}>First Name</label>
                </div>
                <div className={s.form__group}>
                    <input type="input" className={s.form__field} placeholder="Last Name" name="lname" id='lname'
                           required/>
                    <label htmlFor="lname" className={s.form__label}>Last Name</label>
                </div>
                <div className={s.form__group}>
                    <input type="input" className={s.form__field} placeholder="Your E-Mail" name="mail" id='mail'
                           required/>
                    <label htmlFor="mail" className={s.form__label}>Your E-Mail</label>
                </div>
            </div>
            <div className={s.comment}>
                <div className={s.form__group}>
                    <input type="input" className={s.form__field} placeholder="Comment" name="comment" id='comment'
                           required/>
                    <label htmlFor="comment" className={s.form__label}>Comment</label>
                </div>
            </div>
            <div className={s.butt}>
                <button className={s.button}>Send</button>
            </div>
        </div>
    )
}

export default Contact