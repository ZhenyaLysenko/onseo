import React, { Component } from 'react';
import style from './HowWeDo.css';
import styled from 'styled-components';
import Carousel from './Carousel';
import PhotoSlider from '../../../public/how-we-do-assets/photoSlider.png';
import photoCustom1 from '../../../public/how-we-do-assets/photoCustom1.jpg';
import photoCustom2 from '../../../public/how-we-do-assets/photoCustom2.png';
import photoCustom3 from '../../../public/how-we-do-assets/photoCustom3.jpg';
import clientTechnology from '../../../public/how-we-do-assets/icon1.png';
import backendTechnology from '../../../public/how-we-do-assets/icon3.png';
import clientEngines from '../../../public/how-we-do-assets/icon2.png';
import cuttingEdgeTechnology from '../../../public/how-we-do-assets/icon4.png';

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
const imgs = [
    PhotoSlider,
    photoCustom1,
    photoCustom2,
    photoCustom3
];
const imgsText = [
    "Virtual Effect",
    "Virtual Effect1",
    "Virtual Effect2",
    "Virtual Effect3"
];

class HowWeDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 0, 
            activeNext: 1,
            activeBack: (imgs.length - 1),
            animate: false          
        }
        this.handleBack = this.handleBack.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }
    handleBack() {
        this.setState(prevState => ({
            active: prevState.active === 0 ? imgs.length - 1: prevState.active - 1,
            activeNext: prevState.activeNext === 0 ? imgs.length - 1: prevState.activeNext - 1,
            activeBack: prevState.activeBack === 0 ? imgs.length - 1: prevState.activeBack - 1,
            animate: !this.state.animate
          }));

    }
    handleNext() {
        this.setState(prevState => ({
            active: (this.state.active + 1) % imgs.length,
            activeNext: (this.state.activeNext + 1) % imgs.length,
            activeBack: (this.state.activeBack + 1) % imgs.length,
            animate: !this.state.animate
        }));
    }
    render() {
        return(
            <div className={"container-fluid " + style.marginTopContainer}>
                <div className={style.title}>
                    <span>HOW WE DO</span>
                    <div className={style.frontTitle}>HOW WE DO</div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-6 col-md-3">
                        <span className={style.fontBold}>OUR SKILLS</span>
                    </div>
                    <div className="col-lg-8 col-6 col-md-3">
                        <span className={style.fontFamilyBold + " " + style.colorDarkBlue}>Platforms</span><br />
                        <span className={style.fontFamilyBold + " " + style.colorDarkBlue}>and Technologies</span>
                    </div>
                </div>
                <div className={style.marginTop + " row"}>
                    <div className={ style.locate + " col-lg-3 col-2 col-md-1"}>
                        <img className={style.size} src={clientTechnology} alt="Adaptation" />
                    </div>
                    <div className={style.locateRight + " col-lg-3 col-10 col-md-4"}>
                        <p className={style.fontFamilyBedas}>CLIENT TECHNOLOGIES</p>
                        <span className={style.colorGray + " " + style.FontSizeContent}>Platforms: </span><span className={style.fontFamilyBold}>desktop, mobile, web and game consoles</span><br />
                        <span className={style.colorGray + " " + style.FontSizeContent}>Engines/dev platforms: </span><span className={style.fontFamilyBold}>Unity 3D/2D, Cocos2d-x, Angular.JS</span>
                    </div>
                    <div className={ style.locate + " col-lg-3 col-2 col-md-1 " + style.marginTopText }>
                        <img className={style.size + " " + style.size} src={clientEngines} alt="Platforms" />
                    </div>
                    <div className={style.marginTopText + " col-lg-3 col-10 col-md-4"}>
                        <p className={style.fontFamilyBedas}>CLIENT ENGINES / DEVELOPMENT PLATFORMS</p>
                        <span className={style.fontFamilyBold}>Unity 3D/2D, Cocos2d-x, Angular.JS</span>
                    </div>
                </div>
                <div className={style.marginTop + " row"}>
                    <div className={ style.locate + " col-lg-3 col-2 col-md-1"}>
                        <img className={style.size} src={backendTechnology} alt="Technologies" />
                    </div>
                    <div className={style.locateRight + " col-lg-3 col-10 col-md-4"}>
                        <p className={style.fontFamilyBedas}>BACKEND TECHNOLOGIES</p>
                        <span className={style.fontFamilyBold}>Expert development skills in wide spectrum of technologies and programming languages:</span>
                        <ul>
                            <li type="square">
                                <span>Java, C# / .Net, PHP, Python, </span>
                            </li>
                            <li type="square">
                                <span>HTML5, JavaScript, ActionScript, Objective-C, C++</span>
                            </li>
                            <li type="square">
                                <span>SQL and NoSQL databases</span>
                            </li>
                            <li type="square">
                                <span>Hadoop & Spark and Amazon AWS & MC Azure</span>
                            </li>
                        </ul>
                    </div>
                    <div className={ style.locate + " col-lg-3 col-2 col-md-1"}>
                        <img className={style.size} src={cuttingEdgeTechnology} alt="Technologies" />
                    </div>
                    <div className={style.marginTopText + " col-lg-3 col-10 col-md-4"}>
                        <p className={style.fontFamilyBedas}>CUTTING EDGE TECHNOLOGY</p>
                        <span className={style.fontFamilyBold}>Big data processing, machine learning and artificial intelligence including virtual augmented reality</span>
                    </div>
                </div>
                <div className={style.marginTop + " row"}>
                    {/* <div className="col-lg-4 col-12"> */}
                        
                        {/* <img className={style.sizeImgNext} src={imgs[this.state.activeNext]} /> */}
                    {/* </div>
                    <div className="col-lg-4 col-12"></div>
                    <div className="col-lg-4 col-12"></div> */}
                    <div className={style.textAlite + " col-lg-12 col-12"}>
                        {/* <img className={ this.state.animate ? style.sizeImg + " " + style.nextImg : style.sizeImg + " " + style.nextImg2} src={imgs[this.state.active]} /> */}
                        <Carousel>
                            <Item src={PhotoSlider}>
                            </Item>
                            <Item src={photoCustom1}>
                            </Item>
                            <Item src={photoCustom2}>
                            </Item>
                            <Item src={photoCustom3}>
                            </Item>
                        </Carousel>
                    </div>
                    {/* <div className="col-lg-3 col-6">
                        <img className={style.sizeImgBack} src={imgs[this.state.activeBack]} />
                    </div> */}
                </div>
                {/* <div className="row">
                    <div className={style.center + " col-lg-12 col-12"}>
                        <span className={style.fontFamilyBold}>{imgsText[this.state.active]}</span>
                    </div>

                </div> */}
                {/* <div className="row">
                    <div className="col-lg-6 col-6"></div>
                    <div className={ style.marginTopButton + " col-lg-6 col-6" }>
                        <span onClick={this.handleBack} className={style.marginLeft }>
                          <i className={"fa fa-caret-left " + style.circleRight}></i><span className={style.fontSize}>Back</span>
                        </span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-6"></div>
                    <div className={ style.marginRight + " col-lg-6 col-6"}>
                        <span onClick={this.handleNext} className={style.marginRight } >
                            <span className={style.fontSize}>Next</span>
                            <i className={"fa fa-caret-right " + " " + style.circleRight}></i>
                        </span>
                    </div>

                </div> */}
                {/* <div className={style.nav}>
          <div className={style.leftBtn + " " + style.size4} onClick={ this.handleNext}>
            <span className={style.pointer}>Next<span className="fa fa-caret-right"/></span>
          </div>
          <div className={style.rightBtn + " " + style.size4} onClick={ this.handleBack}>
            <span className={style.pointer}><span className="fa fa-caret-left"/>Back</span>
          </div>
        </div> */}
            </div>
        );
    }
}

export default HowWeDo;