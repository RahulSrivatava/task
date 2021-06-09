import React from 'react';
import style from "../styles/Main.module.css";
import login from '../resources/login.svg';
import hompage from '../resources/homepage.svg';
import rectangle_sml from '../resources/rectangle_small.svg';
import rectangle_lrg from '../resources/Grouped.png';
import rectangle from '../resources/rectangle.png';
import rect_22 from '../resources/rect_22.png';
import apple from '../resources/apple.svg';
import android from '../resources/android.svg';


export const Main = () => {
    return (
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
                        <img src={android}alt="" />
                    </div>
                    <div id={style.s_name}>
                    Facebook   / <span id={style.green_sml}>Instagram </span>  /  Twitter
                    </div>
                </div>

            </div>
            <div className={style.images}>
                <div className={style.logincontainer}>
                    <div id={style.elipse}>
                    </div>
                    <img src={login} alt="login" />
                </div>
                <div id={style.rect_content}>
                    <p>Nutritional information</p>
                    <ul id={style.list1}>
                        <li id={style.item1}>
                            243
                        </li>
                        <li>
                            2,8g
                        </li>
                        <li>
                            45,7g
                        </li>
                        <li>
                            9,8g
                        </li>
                    </ul>
                    <ul id={style.list2}>
                        <li id={style.list2_item1}>
                            calorias
                        </li>
                        <li >
                            grasas
                        </li>
                        <li >
                            carbohid
                        </li>
                        <li>
                            proteinas
                        </li>
                    </ul>
                </div>
                <div id={style.rect_sml}>
                    <img src={rectangle_sml} alt="reactanle" />
                </div>
                <div id={style.homepage}>
                    <img src={hompage} alt="hompage" />
                </div>
                <div id={style.rect_lrg}>
                    <img src={rectangle_lrg} alt="rectangle" />
                </div>
                
            </div>
            <div id={style.rectangle}>
                <img src={rectangle} alt="rectangle" />
                </div>
        </div>
        
    )
}
export default Main;