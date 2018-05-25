import style from "./WhatWeDo.css";
import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Carousel from './Carousel';
import Footer from './Footer';
import Icon1 from "../../../public/what-we-do-assets/icon1.png"
import Icon2 from "../../../public/what-we-do-assets/icon2.png"
import Icon3 from "../../../public/what-we-do-assets/icon3.png"
import Icon4 from "../../../public/what-we-do-assets/icon4.png"
import photoTitle from "../../../public/what-we-do-assets/photoTitle.png"

const WhatWeDo = () => (<div>
  <div className={style.title}>
    <div className={style.frontTitle + " " + style.content + " " + style.size1}>WHAT WE DO</div>
    <span className={style.font250}>WHAT WE DO</span>
  </div>

  <div className={style.colConteiner}>

    <div className={style.left + " " + style.bebasNenuBold + " " + style.content + " " + style.size1}>
      SOCIAL AND
      <br/>
      FREE2PLAY GAMES
    </div>

    <div className={style.right + " " + style.contentImg}>
      <img src={photoTitle} alt="Smiley face"/>
    </div>
  </div>

  <div className={style.space}></div>

  <Carousel/>

  <div className={style.space}></div>

  <div className={style.conteiner + " " + style.content}>
    <div className={style.flex1col}>
      <div className={style.bebasNenuBold + " " + style.size1}>OUR OWN PRODUCTS</div>
      <div className={style.proximaNova + " " + style.size3}>Developing Technologies That Accelerate<br/>Game Creation and Mone</div>
    </div>
  </div>
  <div className={style.conteiner + " " + style.content}>
    <div className={style.leftNotFix}>
      <div className={style.sconteiner + " " + style.bg}>

        <div className={style.cleft + " " + style.bg2}>

          <img className={style.icon} src={Icon1} alt="1"/>
        </div>
        <div className={style.cright + " " + style.bg3}>
          <div className={style.bebasNenuBold + " " + style.size3}>Casino Gaming Platform</div>
          <div className={style.proximaNova + " " + style.size4}>Highly available and configurable platform for casino games providing significant time to market acceleration for game production</div>
        </div>

        <div className={style.cleft}>
          <img className={style.icon} src={Icon3} alt="1"/>
        </div>
        <div className={style.cright}>
          <div className={style.bebasNenuBold + " " + style.size3}>Artificial Intelligence
          </div>
          <div className={style.proximaNova + " " + style.size4}>
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
          <div className={style.bebasNenuBold + " " + style.size3}>Social Platform
          </div>
          <div className={style.proximaNova + " " + style.size4}>Easily scalable and customizable platform. Deep integration with social networks. Many common game features embedded into the platform. Allows focus on game creation vs common features</div>
        </div>

        <div className={style.cleft}>
          <img className={style.icon4} src={Icon4} alt="1"/>
        </div>
        <div className={style.cright}>
          <div className={style.bebasNenuBold + " " + style.size3}>Business Intelligence
          </div>
          <div className={style.proximaNova + " " + style.size4}>Complete BI and Analytics package optimized to gain valuable insights from gaming data, increase revenue, improve retention and decrease churn</div>
        </div>

      </div>
    </div>
  </div>

  <div className={style.space}></div>
  <Footer/>

</div>);

export default WhatWeDo;
