import React from "react";
import style from "./footer.module.css";

function Footer() {
    return (
        <div className={style.mainCont}>
            <div className={style.orders}>
                <h2 className={style.h2}>6 698 077</h2>
                <p className={style.p}>заданий уже создано в этих категориях</p>
            </div>
            <div className={style.table}>
                <a className={style.a} href="#">
                    <h3 className={style.h3}>О проекте </h3>
                </a>
                <a className={style.a} href="#">
                    <h3 className={style.h3}>Контакты</h3>
                </a>
                <a className={style.a} href="#">
                    <h3 className={style.h3}>Правила оказания услуг</h3>
                </a>
                <a className={style.a} href="#">
                    <h3 className={style.h3}>Как стать исполнителем?</h3>
                </a>
            </div>
            <div className={style.copyRight}>© Все права защищены 2020</div>
        </div>
    );
}

export default Footer;