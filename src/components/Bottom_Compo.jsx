import React from 'react'
import style from "../styles/Bottom_compo.module.css";
import rect from '../resources/rectangle.png';
import btm_img from '../resources/btm_img.png';
import btm_content from '../resources/btm_content.png';
import rectangle_btm from '../resources/rectangle_btm.svg';

export const Bottom_Compo = () => {
    return (
        <>

            <div className={style.bottom_content}>


                <div className={style.content}>
            <img src={rect} id={style.rect} alt="rectangle" />

                    <img src={btm_content} id={style.btm_content} alt="btm_content" />
                </div>
                <div className={style.btm_2}>
                   
                    <img src={rectangle_btm} id={style.btm_rect} alt="btm_img" />
                    <img src={btm_img} id={style.btm_img} alt="btm_img" />
                </div>
            </div>

        </>


    )
}
export default Bottom_Compo;