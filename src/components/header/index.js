import React from "react";
import style from "./header.module.css"
import logo from "../../items/logoPng.png"

function Header() {
    return (
        <div className={style.mainCont}>
            <div className={style.logo}>
                <img className={style.logoImg} src={logo} alt=""/>
                <p><b>we</b><b className={style.green}>Do</b></p>
            </div>
            <nav>
                <a className={style.a} href="#">Главная</a>
                <a className={style.a} href="#">Услуги</a>
                <a className={style.a} href="#">Наш текст</a>
                <a className={style.a} href="#">Наш текст</a>
                <a className={style.a} href="#">О нас</a>
            </nav>
        </div>
    )
}

export default Header;