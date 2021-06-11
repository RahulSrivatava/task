import React from 'react';
import style from "../styles/Main.module.css";
import login from '../resources/login1.svg';
import nutrition from '../resources/nutrition.svg';
import nutricontent from '../resources/nutriContent.png';
import homepage from '../resources/homepage.svg';
import group from '../resources/Grouped.svg';
import rect_22 from '../resources/rect_22.png';
import rect from '../resources/rectangle.png';
import apple from '../resources/apple.svg';
import android from '../resources/android.svg';
import grpContent from '../resources/grpcontent.png';
import Middle_content from './Middle_Compo';
import Bottom_content from './Bottom_Compo';
export const Main = () => {
    return (
        <>
            <div className={style.upper_part} >
                <div className={style.content}>
                    <hr id={style.horizontalrule}></hr>
                    <p id={style.para}>La app de dieta, perfecta para ti</p>
                    <ul id={style.midContent}>
                        <li id={style.green}>
                            Deliciosas
                       </li>
                        <li>
                            recetas de comida
                        </li>
                        <li>
                            saludable
                        </li>
                    </ul>
                    <p id={style.para2}>Encuentra las mejores recetas para llevar tu dieta a otro</p>
                    <p id={style.para2}> nivel, sin necesidad de afectar su salud</p>
                    <div id={style.social}>
                        <div id={style.app_btn}>
                            <p>Descargar app</p>
                            <img src={rect_22} alt="rect" />
                        </div>
                        <div id={style.s_icon}>
                            <img src={apple} alt="" />
                            <img src={android} alt="" />
                        </div>
                        <div id={style.s_name}>
                            Facebook   / <span id={style.green_sml}>Instagram </span>  /  Twitter
                    </div>
                    </div>
                </div>
                <div className={style.images}>
                    <div className={style.logincontainer}>
                        <img src={login} id={style.login} alt="login" />
                        <img src={nutrition} id={style.nutri} alt="nutri" />
                        <img src={nutricontent} id={style.nutricontent} alt="nutricontent" />
                        <img src={homepage} id={style.homepage} alt="homepage" />
                        <img src={group} id={style.group} alt="group" />
                        <img src={grpContent} id={style.grpContent} alt="group" />
                        <img src={rect} id={style.rect} alt="rectangle" />
                    </div>

                </div>

            </div>

            <Middle_content />
            <Bottom_content />
        </>

    )
}
export default Main;