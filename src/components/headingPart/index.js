import React from "react";
import style from "./headingAction.module.css"

function HeadingAction() {
    return (
        <div className={style.mainCont}>
            <h1 className={style.h1}>
                Решать проблемы наша миссия
            </h1>
            <div className={style.actions}>
                <input className={style.input} type="text" placeholder={"Напишите, что нужно сделать"}/>
                <button className={style.btn}>Дать задание</button>
            </div>
            <div className={style.img}>

            </div>
        </div>
    )
}

export default HeadingAction;