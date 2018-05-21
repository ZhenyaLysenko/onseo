import style from "./WhatWeDo.css";
import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Carousel from './Carousel';
import Footer from './Footer'

const WhatWeDo = () => (<div>
  <div className={style.title}>
    <span>WHAT WE DO</span>
    <div className={style.frontTitle}>WHAT WE DO</div>
  </div>

  <div className={style.conteiner}>

    <div className={style.left + " " + style.bebasNenuBold + " " + style.font70}>
      SOCIAL AND
      <br/>
      FREE2PLAY GAMES
    </div>

    <div className={style.right}>
      <img src="../../public/what-we-do-assets/photoTitle.png" alt="Smiley face"/>
    </div>
  </div>

  <div className={style.space}></div>

  <Carousel/>

  <div className={style.space}></div>

  <div className={style.conteiner}>
    <div className={style.left}>
      <span className={style.font70 + " " + style.bebasNenuBold}>OUR OWN PRODUCTS</span><br/>
      <span className={style.font24 + " " + style.proximaNova}>Developing Technologies That Accelerate<br/>Game Creation and Mone</span>
    </div>
    <div className={style.right}></div>
  </div>
  <div className={style.conteiner}>
    <div className={style.left}>
      <div className={style.sconteiner}>

        <div className={style.cleft}>

          <img className={style.icon} src="../../public/what-we-do-assets/icon1.png" alt="1"/>
        </div>
        <div className={style.cright}>
          <div className={style.font36 + " " + style.bebasNenuBold}>Casino Gaming Platform</div>
          <div className={style.font16 + " " + style.proximaNova}>Highly available and configurable platform for casino games providing significant time to market acceleration for game production</div>
        </div>

        <div className={style.cleft}>
          <img className={style.icon} src="../../public/what-we-do-assets/icon3.png" alt="1"/>
        </div>
        <div className={style.cright}>
          <div className={style.font36 + " " + style.bebasNenuBold}>Artificial Intelligence
          </div>
          <div className={style.font16 + " " + style.proximaNova}>
            <p>Deep learning algorithms for gaming media buying and multi-level data analysis features.</p>

            Technology to predict the “opponents” behavior on a global scale and optimization of customers’ campaigns</div>
        </div>

      </div>
    </div>
    <div className={style.right}>
      <div className={style.sconteiner}>

        <div className={style.cleft}>
          <img className={style.icon} src="../../public/what-we-do-assets/icon2.png" alt="1"/>
        </div>
        <div className={style.cright}>
          <div className={style.font36 + " " + style.bebasNenuBold}>Social Platform
          </div>
          <div className={style.font16 + " " + style.proximaNova}>Easily scalable and customizable platform. Deep integration with social networks. Many common game features embedded into the platform. Allows focus on game creation vs common features</div>
        </div>

        <div className={style.cleft}>
          <img className={style.icon4} src="../../public/what-we-do-assets/icon4.png" alt="1"/>
        </div>
        <div className={style.cright}>
          <div className={style.font36 + " " + style.bebasNenuBold}>Business Intelligence
          </div>
          <div className={style.font16 + " " + style.proximaNova}>Complete BI and Analytics package optimized to gain valuable insights from gaming data, increase revenue, improve retention and decrease churn</div>
        </div>

      </div>
    </div>
  </div>

  <div className={style.space}></div>
  <Footer/>

</div>);

export default WhatWeDo;
