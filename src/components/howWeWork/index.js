import React from "react";
import style from "./how-we-work.module.css"
import agreement from "../../items/мини-png/agreenment.png";
import control from "../../items/мини-png/controll.jpg";
import noteBook from "../../items/мини-png/noteBook.png";
import wow from "../../items/мини-png/Wow.jpg";

function HowWeWork() {
    return (
        <div className={style.mainCont}>
            <h2 className={style.h2}>Как мы работаем?</h2>
            <div className={style.howWeWorkTable}>
                <div className={style.cell}>
                    <img src={noteBook} alt="" className={style.img2}/>
                    <div className={style.tittle}>
                        <h3 className={style.h3}>Закажите услуги</h3>
                        <p className={style.p}>Закажите услугу, оставив заявку на сайте, или свяжитесь по номеру</p>
                    </div>
                </div>
                <div className={style.cell}>
                    <img src={control} alt="" className={style.img}/>
                    <div className={style.tittle}>
                        <h3 className={style.h3}>Мы подберем нужного спецалиста</h3>
                        <p className={style.p}>Уже через минуту, мы подберем вам нужного специалиста, который прошел наше тестирование и проверку на профессиональную пригодность</p>
                    </div>
                </div>
                <div className={style.cell}>
                    <img src={agreement} alt="" className={style.img}/>
                    <div className={style.tittle}>
                        <h3 className={style.h3}>Работайте безопасно</h3>
                        <p className={style.p}>Согласуйте с исполнителем состав работ. Платите только за качественно выполненную работу </p>
                    </div>
                </div>
                <div className={style.cell}>
                    <img src={wow} alt="" className={style.img}/>
                    <div className={style.tittle}>
                        <h3 className={style.h3}>Подарки</h3>
                        <p className={style.p}>Оставьте отзыв и получите скидку на последующие услуги</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowWeWork;