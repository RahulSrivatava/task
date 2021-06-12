import React from "react";
import style from "../styles/Main.module.css";
import login from "../resources/login1.svg";
import nutrition from "../resources/nutrition.svg";
import nutricontent from "../resources/nutriContent.png";
import homepage from "../resources/homepage.svg";
import group from "../resources/Grouped.svg";
import rect from "../resources/rectangle.png";
import grpContent from "../resources/grpcontent.png";
import responsive_img from "../resources/responsive_img.png";
import android from "../resources/Android.svg";
import apple from "../resources/apple.svg";

import rule from "../resources/horizontalrule.svg";

export const Main = () => {
  return (
    <>
      <div className={style.upper_part}>
        
        <div className={style.contentContainer}>
          <div id={style.content}>
            <img src={rule} id={style.rule} alt="" />
            <p id={style.para1}>La app de dieta, perfecta para ti</p>
            <p id={style.title}>
              <span>Deliciosas</span> recetas de comida saludable
            </p>
            <div className={style.para2}>
              Encuentra las mejores recetas para llevar tu dieta a otro nivel,
              sin necesidad de afectar su salud
            </div>
          </div>
          <div className={style.social}>
            <button>Descargar app</button>
            <div id={style.icon}>
              <a href="#">
                <img src={android} alt="" />
              </a>
              <a href="#">
                <img src={apple} alt="" />
              </a>
            </div>
          </div>
           <div id={style.socialHandles}>
              Facebook / <span> Instagram </span> / Twitter
            </div>
        </div>
        <div className={style.images}>
          <img src={responsive_img} id={style.responsive_img} alt="" />
         
          <div id={style.socialHandlesres}>
              <p>Facebook / <span> Instagram </span> / Twitter</p>
              
            </div>
          <div className={style.socialres}>
            <button>Descargar app</button>
            <div id={style.icon}>
              <a href="#">
                <img src={android} alt="" />
              </a>
              <a href="#">
                <img src={apple} alt="" />
              </a>
            </div>
          </div>
          

          <div className={style.logincontainer}>
            <img src={login} id={style.login} alt="login" />
            <img src={nutrition} id={style.nutri} alt="nutri" />
            <img
              src={nutricontent}
              id={style.nutricontent}
              alt="nutricontent"
            />
            <img src={homepage} id={style.homepage} alt="homepage" />
            <img src={group} id={style.group} alt="group" />
            <img src={grpContent} id={style.grpContent} alt="group" />
            <img src={rect} id={style.rect} alt="rectangle" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Main;
