import React, {Component} from 'react';
import style from "./Carousel.css";
import { Glyphicon, Button } from 'react-bootstrap';

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 1
    }

    this.handleNext = this.handleNext.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  handleBack() {
    this.setState(prevState => ({
      active: prevState.active === 0 ? 3: prevState.active - 1
    }));
  }

  handleNext() {
    this.setState(prevState => ({
      active: (prevState.active + 1) % 4
    }));
  }

  render() {
    return (<div>
<h1 className={style.topTitle + " " + style.content}>CUSTOM WORK</h1>
      <div className={style.conteiner}>

        <div className={style.left + " " + style.slider + " " + style.contentImg}>
          <img className={this.state.active === 0 ? "active" : "d-none"} src="../../public/what-we-do-assets/photoCustom1.jpg" alt="Smiley face"/>
          <img className={this.state.active === 1 ? "active" : "d-none"} src="../../public/what-we-do-assets/photoCustom2.png" alt="Smiley face"/>
          <img className={this.state.active === 2 ? "active" : "d-none"} src="../../public/what-we-do-assets/photoCustom3.jpg" alt="Smiley face"/>
          <img className={this.state.active === 3 ? "active" : "d-none"} src="../../public/what-we-do-assets/photoCustom4.jpg" alt="Smiley face"/>
        </div>

        <div className={style.right}>
          <div className={style.carouselconteiner}>
            <div className={style.customWorkTitle + " " + style.content + " " + style.size1}>
              CUSTOM WORK
            </div>
            <div className={style.flexNoWrap}>
              <div className={style.customWorkSubTitle + " " + style.content + " " + style.size3}>
                { this.state.active === 0 ? "Just a cat":
                  this.state.active === 1 ? "Custom Development and Design for Full Line of Mobile Casino Games":
                  this.state.active === 2 ? "Another cat":
                  this.state.active === 3 ? "Last one !":""
                }
              </div>
              <div className={style.flexSpace50}>
              </div>
            </div>

            <div className={style.customWorkPartLeft + " " + style.cleftMenu + " " + style.content}>
              <div className={style.customWorkSubTitle + " " + style.content + " " + style.size2}>BWIN PARTY</div>
              <div className={style.customWorkSubTitle + " " + style.content + " " + style.size2}>ROULETTE</div>
              <div className={style.customWorkSubTitle + " " + style.content + " " + style.size2}>BWIN PARTY</div>
              <div className={style.customWorkSubTitle + " " + style.content + " " + style.size2}>ROULETTE</div>
            </div>
            <div className={style.customWorkPartRight + " " + style.crightMenu + " " + style.content + " " + style.size2}>
              <div className={this.state.active === 0 ? style.active : ""}>WORD SIRES OF POKER</div>
              <div className={this.state.active === 1 ? style.active : ""}>CAESARS</div>
              <div className={this.state.active === 2 ? style.active : ""}>WORD SIRES OF POKER</div>
              <div className={this.state.active === 3 ? style.active : ""}>CAESARS</div>
            </div>
          </div>

        </div>
        <div className={style.flexNoWrap}>
        <div className={style.nextButton} onClick={this.handleNext}>
          Next <span className="fa fa-caret-right"/>
        </div>
        <div className={style.backButton} onClick={this.handleBack}>
          <span className="fa fa-caret-left"/> Back
        </div>
        </div>
      </div>
    </div>);
  }
}

export default Carousel;
