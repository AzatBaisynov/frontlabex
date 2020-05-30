import React from "react";
import style from "./headingAction.module.css"

function HeadingAction() {
    return (
        <div className={style.mainCont}>
            <br></br>
            <h1 className={style.h1}>
                Решать проблемы наша цель
            </h1>
            <div className={style.actions}>
                <input className={style.input} type="text" placeholder={"Напишите, что нужно сделать"}/>
                <button className={style.btn}>Дать задание</button>
            </div>
            <br></br>
            <div className={style.img}>
            </div>
        </div>
    )
}

export default HeadingAction;