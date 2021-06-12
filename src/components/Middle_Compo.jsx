import React from "react";
import style from "../styles/Middle_compo.module.css";
import item from "../resources/plate.png";
import rule from "../resources/horizontalrule.svg";
import resplate from "../resources/plateres.png";
export const Middle_compo = () => {
  return (
    <div className={style.middlecontainer}>
      <div className={style.foodItem}>
        <img src={item} id={style.item}alt="" />
      </div>
      <div className={style.content}>
          <img src={rule} id={style.rule} alt="" />
        <div id={style.title}>
          <span id={style.green}>Descubre</span> que tan fácil
          <p>crear alimentos saludables</p>
        </div>
        <div className={style.titleContent}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas
          accumsan odio, cursus laoreet mauris porttitor non. Aliquam eu neque
          nibh. Aenean non pellentesque justo.
        </div>
      </div>
      <img src={resplate} id={style.resplate} alt="" />
      
    </div>
  );
};
export default Middle_compo;
