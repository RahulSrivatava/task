import React from 'react'
import style from "../styles/Middle_compo.module.css";
import item1 from "../resources/fooditem1.svg";
import item2 from "../resources/fooditem2.svg";
import elipse from "../resources/elipse.svg";
import content1 from "../resources/content12.png";
export const Middle_compo = () => {
    return (
        <div className={style.middlecontainer}>
            <div className={style.foodItem}>
                <div className={style.item1} >
                    <img src={item1} alt="" />
                </div>
                <div className={style.item2} >
                <img src={item2} alt="" />
                </div>
             </div>
             <div className={style.content}>
                 <img src={content1} alt="" />
                 <img src={elipse} id={style.elipse} alt="" />
                 
             </div>
        </div>
    )
}
export default Middle_compo; 