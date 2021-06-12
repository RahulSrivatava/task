import React from "react";
import style from "../styles/Footer.module.css";
import logo from "../resources/logo.png";
import insta from "../resources/instagram.svg";
import twitter from "../resources/twitter.svg";
import fb from "../resources/facebook.svg";

export const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.left}>
        <div className={style.logo}>
          <img src={logo} alt="" /> <span>Daietto</span>{" "}
        </div>
        <div className={style.list}>
          <ul>
            <li id={style.green}>Daietto</li>
            <li>Beneficios</li>
            <li>Crédito</li>
            <li>Contacto</li>
          </ul>
        </div>
        <div className={style.list}>
          <ul>
            <li>Nosotros</li>
            <li>Términos y condiciones</li>
            <li>Aviso de privacidad</li>
          </ul>
        </div>
        <div id={style.copywright}>© 2021 Daietto Derechos Reservados.</div>
      </div>

      <div className={style.social}>
        <div id={style.icon}>
          <a href="https://web.whatsapp.com/">
            <img src={insta} alt="" />
          </a>
          <a href="https://web.whatsapp.com/">
            <img src={twitter} alt="" />
          </a>
          <a href="https://web.whatsapp.com/">
            <img src={fb} alt="" />
          </a>
          <span id={style.app}>Tu app de dieta</span>
          <span id={style.res_copy}>© 2021 Daietto Derechos Reservados.</span>
        </div>
      </div>
    </div>
  );
};
export default Footer;
