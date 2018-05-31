import React, {Component} from 'react';
import style from "./Footer.css";

const Footer = () => (<div>
      <div className={style.item}>
        <span className={style.text}>Follow us</span>
        <i className={"fa" + " " + "fa-facebook" +  " " + style.myLink}></i>
        <i className={"fa" + " " + "fa-twitter" +  " " + style.myLink}></i>
        <i className={"fa" + " " + "fa-youtube" +  " " + style.myLink}></i>
        <i className={"fa" + " " + "fa-instagram" +  " " + style.myLink}></i>
        <i className={"fa" + " " + "fa-linkedin" +  " " + style.myLink}></i>
      </div>
      <div className={style.space}></div>
  </div>);

export default Footer;
