import React from "react";
import style from "./our-advantages.module.css"
import pig from "../../items/pig.png"
import check from "../../items/check.png"
import clock from "../../items/clock.png"

function OurAdvantage() {
    return (
        <div className={style.mainCont}>
            <div className={style.table}>
                <div className={style.cell1}>
                    <img src={pig} alt="" className={style.img}/>

                    <div className={style.title}>
                        <h3 className={style.h3}>Выгодные цены</h3>
                        <p className={style.p}>У частных исполгителей нет расходов на офис, рекламу, зарплату секретарю и других затрат, которые сервисные комрании обычно включают в стоимость своих услуг.</p>
                    </div>
                </div>
                <div className={style.cell2}>
                    <img src={check} alt="" className={style.img}/>
                    <div className={style.title}>
                        <h3 className={style.h3}>Проверенные исполнители</h3>
                        <p className={style.p}>Все исполнители проходят процедуру собеседования и тестирования на профессиональную пригодность, мы проверяем отзывы, разбираемся с жалобами и контролируем качество их работы.</p>
                    </div>
                </div>
                <div className={style.cell3}>
                    <img src={clock} alt="" className={style.img}/>
                    <div className={style.title}>
                        <h3 className={style.h3}>Экономия времени</h3>
                        <p className={style.p}>Вы можете найти подходящего исполнителя за несколько минут. Многие из них из них готовы приступить к работе в тот же день, в тот же час.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurAdvantage;