import React, {Component} from 'react';
import style from "./Carousel.css";
import {Glyphicon, Button} from 'react-bootstrap';
import ImgCustom1 from "../../../public/what-we-do-assets/photoCat.png"
import ImgCustom2 from "../../../public/what-we-do-assets/photoCustom2.png"
import ImgCustom3 from "../../../public/what-we-do-assets/photoCat.png"
import ImgCustom4 from "../../../public/what-we-do-assets/photoCat.png"

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 0,
      imeges: [ImgCustom1, ImgCustom2, ImgCustom3, ImgCustom4]
    }

    this.handleNext = this.handleNext.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  handleBack() {
    this.setState(prevState => ({
      active: prevState.active === 0
        ? 3
        : prevState.active - 1
    }));
  }

  handleNext() {
    this.setState(prevState => ({
      active: (prevState.active + 1) % 4
    }));
  }

  render() {
    return (<div>
      <div className={style.topTitle + " " + style.content + " " + style.size1}>CUSTOM WORK</div>
      <div className={style.conteiner}>

        <div className={style.left + " " + style.slider + " " + style.contentImg}>
          <img className={style.CustomImg} src={this.state.imeges[this.state.active]} alt="Smiley face"/>
        </div>

        <div className={style.right + " " + style.content}>
          <div className={style.carouselconteiner}>
            <div className={style.customWorkTitle + " " + style.size1}>
              CUSTOM WORK
            </div>
            <div className={style.flexNoWrap}>
              <div className={style.customWorkSubTitle + " " + style.size3}>
                {
                  this.state.active === 0
                    ? "Just a cat"
                    : this.state.active === 1
                      ? "Custom Development and Design for Full Line of Mobile Casino Games"
                      : this.state.active === 2
                        ? "Another cat"
                        : this.state.active === 3
                          ? "Last one !"
                          : ""
                }
              </div>
              <div className={style.flexSpace50}></div>
            </div>

            <div className={style.customWorkPartLeft + " " + style.cleftMenu}>
              <div className={style.size2}>BWIN PARTY</div>
              <div className={style.size2}>ROULETTE</div>
              <div className={style.size2}>BWIN PARTY</div>
              <div className={style.size2}>ROULETTE</div>
            </div>
            <div className={style.customWorkPartRight + " " + style.crightMenu + " " + style.size2}>
              <div className={this.state.active === 0
                  ? style.active
                  : ""}>WORD SIRES OF POKER</div>
              <div className={this.state.active === 1
                  ? style.active
                  : ""}>CAESARS</div>
              <div className={this.state.active === 2
                  ? style.active
                  : ""}>WORD SIRES OF POKER</div>
              <div className={this.state.active === 3
                  ? style.active
                  : ""}>CAESARS</div>
            </div>
          </div>

        </div>
        <div className={style.flexNoWrap}>
          <div className={style.nextButton} onClick={this.handleNext}>
            Next
            <span className="fa fa-caret-right"/>
          </div>
          <div className={style.backButton} onClick={this.handleBack}>
            <span className="fa fa-caret-left"/>
            Back
          </div>
        </div>
      </div>
    </div>);
  }
}

export default Carousel;
