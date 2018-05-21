import React, {Component} from 'react';
import style from "./Footer.css";

const Footer = () => (<div>
    <div className={style.flexConteiner}>
      <div className={style.item}></div>
      <div className={style.item}></div>
      <div className={style.item}></div>
      <div className={style.item}>
        <span className={style.text}>Follow us</span>
        <i className="fa fa-facebook"></i>
        <i className="fa fa-twitter"></i>
        <i className="fa fa-youtube"></i>
        <i className="fa fa-instagram"></i>
        <i className="fa fa-linkedin"></i>
      </div>
    </div>
  </div>);

export default Footer;
