import React, {Component} from 'react';
import style from "./WhoTrustUs.css";
import styled from 'styled-components';
import img1 from "../../../public/who-trust-us-assets/1.png"
import img2 from "../../../public/who-trust-us-assets/2.png"
import img3 from "../../../public/who-trust-us-assets/3.png"
import img4 from "../../../public/who-trust-us-assets/4.png"
import img5 from "../../../public/who-trust-us-assets/5.png"
import img6 from "../../../public/who-trust-us-assets/6.png"
import img7 from "../../../public/who-trust-us-assets/7.png"
import img8 from "../../../public/who-trust-us-assets/8.png"

import Carousel from './Carousel'

const Item = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 45px;
  @media screen and (max-width: 767px) {
    flex-direction: row;
    justify-content: space-around;
    flex: 1 0 100%;
    margin-bottom: 0;
  }
`

const WhoTrustUs = () => (<div>
  <div className={style.title}>
    <div className={style.font250}>WHO TRUST US</div>
    <div className={style.content}>
      <div className={style.frontTitle + " " + style.size1}>WHO TRUST US</div>
      <div className={style.frontCentr + " " + style.size2}>All Aspects Of<br/>Gaming Development</div>
      <div className={style.frontBotton + " " + style.size3}>Real Money Gaming</div>
    </div>
  </div>

  <div className={style.content}>
  <Carousel>
    <Item>
      <img className={style.icon} src={img1} alt="1"/>
      <img className={style.icon} src={img5} alt="1"/>
    </Item>
    <Item>
      <img className={style.icon} src={img2} alt="1"/>
      <img className={style.icon} src={img6} alt="1"/>
    </Item>
    <Item>
      <img className={style.icon} src={img3} alt="1"/>
      <img className={style.icon} src={img7} alt="1"/>
    </Item>
    <Item>
      <img className={style.icon} src={img4} alt="1"/>
      <img className={style.icon} src={img8} alt="1"/>
    </Item>
    <Item>
      <img className={style.icon} src={img1} alt="1"/>
      <img className={style.icon} src={img5} alt="1"/>
    </Item>
    <Item>
      <img className={style.icon} src={img2} alt="1"/>
      <img className={style.icon} src={img6} alt="1"/>
    </Item>
  </Carousel>
  </div>
</div>);

export default WhoTrustUs;
