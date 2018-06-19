import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import styled from 'styled-components';
import Carousel from './Carousel';
import style from "./WhatWeDo.css";
import gstyle from '../global/styles.css';

import Icon1 from "../../../public/what-we-do-assets/icon1.png"
import Icon2 from "../../../public/what-we-do-assets/icon2.png"
import Icon3 from "../../../public/what-we-do-assets/icon3.png"
import Icon4 from "../../../public/what-we-do-assets/icon4.png"

import photoTitle from "../../../public/what-we-do-assets/photoTitle.png"
import ImgCustom1 from "../../../public/what-we-do-assets/photoCat.png"
import ImgCustom2 from "../../../public/what-we-do-assets/photoCustom2.png"
import ImgCustom3 from "../../../public/what-we-do-assets/photoCat.png"
import ImgCustom4 from "../../../public/what-we-do-assets/photoCat.png"

const Item = styled.img `
  width: 100%;
  height: 100%;
`

const WhatWeDo = () => (<div>
  <div className={style.title}>
    <div className={style.frontTitle + " " + gstyle.content + " " + gstyle.fn_size_2}>WHAT WE DO</div>
    <span className={gstyle.fn_size_1}>WHAT WE DO</span>
  </div>

  <div className={style.colConteiner}>

    <div className={style.left + " " + style.bebasNenuBold + " " + gstyle.content + " " + gstyle.fn_size_2}>
      SOCIAL AND
      <br/>
      FREE2PLAY GAMES
    </div>

    <div className={style.right + " " + style.contentImg}>
      <img className={style.CustomImg} src={photoTitle} alt="Smiley face"/>
    </div>
  </div>

  <div className={style.space}></div>

  <Carousel>
    <Item src={ImgCustom1}>
    </Item>
    <Item src={ImgCustom2}>
    </Item>
    <Item src={ImgCustom1}>
    </Item>
    <Item src={ImgCustom1}>
    </Item>
  </Carousel>

  <div className={style.space}></div>

  <div className={style.conteiner + " " + gstyle.content}>
    <div className={style.flex1col}>
      <div className={style.bebasNenuBold + " " + gstyle.fn_size_2}>OUR OWN PRODUCTS</div>
      <div className={style.proximaNova + " " + gstyle.fn_size_4}>Developing Technologies That Accelerate<br/>Game Creation and Mone</div>
    </div>
  </div>
  <div className={style.conteiner + " " + gstyle.content}>
    <div className={style.leftNotFix}>
      <div className={style.sconteiner + " " + style.bg}>

        <div className={style.cleft + " " + style.bg2}>

          <img className={style.icon} src={Icon1} alt="1"/>
        </div>
        <div className={style.cright + " " + style.bg3}>
          <div className={style.bebasNenuBold + " " + gstyle.fn_size_4}>Casino Gaming Platform</div>
          <div className={style.proximaNova + " " + gstyle.fn_size_5}>Highly available and configurable platform for casino games providing significant time to market acceleration for game production</div>
        </div>

        <div className={style.cleft}>
          <img className={style.icon} src={Icon3} alt="1"/>
        </div>
        <div className={style.cright}>
          <div className={style.bebasNenuBold + " " + gstyle.fn_size_4}>Artificial Intelligence
          </div>
          <div className={style.proximaNova + " " + gstyle.fn_size_5}>
            <p>Deep learning algorithms for gaming media buying and multi-level data analysis features.</p>

            Technology to predict the “opponents” behavior on a global scale and optimization of customers’ campaigns</div>
        </div>

      </div>
    </div>
    <div className={style.rightNotFix + " " + style.bg1}>
      <div className={style.sconteiner}>

        <div className={style.cleft}>
          <img className={style.icon} src={Icon2} alt="1"/>
        </div>
        <div className={style.cright}>
          <div className={style.bebasNenuBold + " " + gstyle.fn_size_4}>Social Platform
          </div>
          <div className={style.proximaNova + " " + gstyle.fn_size_5}>Easily scalable and customizable platform. Deep integration with social networks. Many common game features embedded into the platform. Allows focus on game creation vs common features</div>
        </div>

        <div className={style.cleft}>
          <img className={style.icon4} src={Icon4} alt="1"/>
        </div>
        <div className={style.cright}>
          <div className={style.bebasNenuBold + " " + gstyle.fn_size_4}>Business Intelligence
          </div>
          <div className={style.proximaNova + " " + gstyle.fn_size_5}>Complete BI and Analytics package optimized to gain valuable insights from gaming data, increase revenue, improve retention and decrease churn</div>
        </div>

      </div>
    </div>
  </div>

  <div className={style.space}></div>

</div>);

export default WhatWeDo;
