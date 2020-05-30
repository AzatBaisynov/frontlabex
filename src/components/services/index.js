import React from "react";
import style from "./services.module.css";
import courier from  "../../items/доставка.jpg"
import loader from  "../../items/грузчики.jpg"
import plumber from  "../../items/сантехник.jpg"
import teacher from "../../items/учительница.jpg"
import specialists from  "../../items/услуги.jpg"

function Services() {
    return (
        <div className={style.mainCont}>
            
            <h2 className={style.h2}>Наши услуги</h2>
            <div className={style.serviceTable}>
                <div className={style.serviceCell}>
                    <img src={courier} alt="" className={style.img}/>
                    <div className={style.tittle}>
                        <p className={style.p}>Курьерские услуги</p>
                        <button className={style.btn}>Заказать услугу</button>
                    </div>
                </div>
                <div className={style.serviceCell}>
                    <img src={loader} alt="" className={style.img}/>
                    <div className={style.tittle}>
                        <p className={style.p}>Грузоперевозки</p>
                        <button className={style.btn}>Заказать услугу</button>
                    </div>
                </div>
                <div className={style.serviceCell}>
                    <img src={plumber} alt="" className={style.img}/>
                    <div className={style.tittle}>
                        <p className={style.p}>Ремонт и строительство</p>
                        <button className={style.btn}>Заказать услугу</button>
                    </div>
                </div>

            <div className={style.serviceTable2}>
                <div className={style.serviceCell1}>
                        <img src={teacher} alt="" className={style.img}/>
                        <div className={style.tittle}>
                            <p className={style.p}>Репетиторы и обучение</p>
                            <button className={style.btn}>Заказать услугу</button>
                        </div>
                </div>
                <div className={style.serviceCell1}>
                        <img src={specialists} alt="" className={style.img}/>
                        <div className={style.tittle}>
                            <p className={style.p}>Спецалисты на час/день/пост.</p>
                            <button className={style.btn}>Заказать услугу</button>
                        </div>
                    </div>
                    
            </div>
            </div>
        </div>     
    )
}

export default Services;