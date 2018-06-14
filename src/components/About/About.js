import style from "./About.css";
import React, {Component} from 'react';
import Scroll from 'react-scroll';
import Carousel from './Carousel';
import Img1 from "../../../public/about/img1.png"
import Img2 from "../../../public/about/img2.png"

var Link = Scroll.Link;
var Element = Scroll.Element;

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
                  <img className={style.about_img} src={Img1} alt="about-img1"/>
                  <div className={style.white_square}>
                    <div className={style.rotate}>
                      <Link className={style.about_a}
                            activeClass="active"
                            to="History"
                            spy={true}
                            offset={-75}
                            smooth={true}
                            duration={500}>History
                        <i className={"fa" + " " + "fa-caret-right" +  " " + style.myLink}></i>    
                      </Link>
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
              <Element name="History">
        
                <div className={style.flexHistory}>
                  <div className={style.content2}>
                    <div className={style.about}>
                      <h1 className={style.about__big_sign}>ABOUT US</h1>
                      <h1 className={style.about__small_sign}>HISTORY</h1>
                    </div>
                  </div>
                  <div className={style.img2}>
                    <img className={style.about_img} src={Img2} alt="about-img2"/>
                  </div>
                </div>
                <Carousel />
              </Element>
              <div className={style.space}></div>
            </div>
        );
    }
}

export default About;
