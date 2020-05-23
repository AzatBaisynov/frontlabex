import React from "react";
import style from "./sponsors.module.css";
import img from "../../items/спонсоры.png";

function Sponsors() {
    return(
        <div className={style.imgCont}>
            <img src={img} className={style.img} alt=""/>
        </div>
    )
}

export default Sponsors;