import React from "react";
import style from "../styles/Bottom_compo.module.css";
import btm_img from "../resources/btm_img.png";
import rectangle_btm from "../resources/rectangle_btm.svg";
import rule from "../resources/horizontalrule.svg";
import btm_img_res from "../resources/bottomimg.png";


export const Bottom_Compo = () => {
  return (
    <>
      <div className={style.bottom_container}>
        <div className={style.content}>
          <img src={rule} id={style.rule} alt="" />
          <div className={style.title}>
            <span>Conoce</span> el detalle de los alimentos que consumes
          </div>
          <div className={style.titleContent}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            egestas accumsan odio, cursus laoreet mauris porttitor non. Aliquam
            eu neque nibh. Aenean non pellentesque justo.
          </div>
          <div>
            <img src={btm_img_res} id={style.responsive_img}alt="" />
          </div>
        </div>
        <div className={style.btm_2}>
          <img src={rectangle_btm} id={style.btm_rect} alt="btm_img" />
          <img src={btm_img} id={style.btm_img} alt="btm_img" />
        </div>
      </div>
    </>
  );
};
export default Bottom_Compo;
