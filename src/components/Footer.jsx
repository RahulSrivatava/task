import React from 'react'
import style from '../styles/Footer.module.css';
import footer from '../resources/footer.svg';

export const Footer = () => {
    return (
        <div  className={style.footer}>
            <img src={footer} alt="" />
          
        </div>
    )
}
export default Footer;
