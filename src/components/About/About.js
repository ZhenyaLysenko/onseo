import style from "./About.css";
import React, {Component} from 'react';
import Img1 from "../../../public/about/img1.png"
import Img2 from "../../../public/about/img2.png"

class About extends Component {
    render() {
        return(
            <div className={style.overflow}>
              <div className={style.about}>
                <h1 className={style.about__big_sign}>ABOUT US</h1>
                <h1 className={style.about__small_sign}>WHO WE ARE</h1>
              </div>

              <div className={style.flexAbout}>
                <div className={style.img1}>
                  <img src={Img1} alt="about-img1"/>
                  <div className={style.white_square}>
                    <div className={style.rotate}>
                      <a href='#'>
                        History
                        <i className="fa fa-caret-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className={style.content1 + ' ' + style.flex}>
                  <div className={style.content__text}>
                    <h1 className={style.content__text_h1}>Full spectrum of Talent</h1>
                    <p className={style.content__text_p}>
                      From idea Hunting, Concepts and Storyboarding
                      to Full Backend Development, Monetization and
                      Continuous Improvement.
                    </p>
                    <span className={style.content__text_span}>Dedicated To:</span>
                    <p className={style.content__text_p}>
                      Massive multiplayer online games, casual
                      strategy games and real money casino
                      gaming.
                    </p>
                  </div>
                  <div className={style.content__text}>
                    <h1 className={style.content__text_h1}>500+ Employees</h1>
                    <p className={style.content__text_p}>
                      Complete engineering staff including
                      Developers, Digital atrists / Animators,
                      Game designers, Musicians, QA
                      Engineers and DevOps
                    </p>
                    <h1 className={style.content__text_h1}>Research & Development</h1>
                    <p className={style.content__text_p}>
                      Offices located in the USA and Ukraine
                    </p>
                  </div>
                </div>
              </div>

              <div className={style.flexHistory}>
                <div className={style.content2}>
                  <div className={style.about}>
                    <h1 className={style.about__big_sign}>ABOUT US</h1>
                    <h1 className={style.about__small_sign}>HISTORY</h1>
                    <div className={style.content__text3}>
                      <h1 className={style.content__text_h1}>Full spectrum of Talent</h1>
                      <p className={style.content__text_p}>
                        From idea Hunting, Concepts and Storyboarding
                        to Full Backend Development, Monetization and
                        Continuous Improvement.
                      </p>
                      <p className={style.content__text_p}>
                        Massive multiplayer online games, casual
                        strategy games and real money casino
                        gaming.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={style.img2}>
                  <img src={Img2} alt="about-img2"/>
                </div>
                <div className={style.content__text2}>
                  <h1 className={style.content__text_h1}>Full spectrum of Talent</h1>
                  <p className={style.content__text_p}>
                    From idea Hunting, Concepts and Storyboarding
                    to Full Backend Development, Monetization and
                    Continuous Improvement.
                  </p>
                  <p className={style.content__text_p}>
                    Massive multiplayer online games, casual
                    strategy games and real money casino
                    gaming.
                  </p>
                </div>
              </div>

              <div className={style.flexArrow}>
                <div className={style.arrow}>
                  <a href='#'>
                    Next
                    <i className="fa fa-caret-right"></i>
                  </a>
                </div>
                <div className={style.arrow}>
                  <a href='#'>
                    <i className="fa fa-caret-left"></i>
                    Back
                  </a>
                </div>
              </div>
              <div className={style.hidden}>
                <div className={style.flex}>
                  <div className={style.footer_item}>
                    <span className={style.footer_item_spani}><i className="fa fa-square"></i></span>
                  </div>
                  <div className={style.footer_item}>
                    <h2 className={style.footer_item_h2}>Lorem ipsum</h2>
                    <i className="fa fa-square"></i>
                  </div>
                  <div className={style.footer_item}>
                    <h2 className={style.footer_item_h2}>Slots Craze</h2>
                    <i className="fa fa-square"></i>
                  </div>
                  <div className={style.footer_item}>
                    <h2 className={style.footer_item_h2}>God of Axion</h2>
                    <i className="fa fa-square"></i>
                  </div>
                  <div className={style.footer_item}>
                    <h2 className={style.footer_item_h2}>Full spectrum of Talent</h2>
                    <i className="fa fa-square"></i>
                  </div>
                </div>
              </div>

            </div>
        );
    }
}

export default About;
