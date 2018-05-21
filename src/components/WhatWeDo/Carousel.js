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
      <div className={style.conteiner}>
        <div className={style.left + " " + style.slider}>
          <img className={this.state.active === 0 ? "active" : "d-none"} src="../../public/what-we-do-assets/photo.png" alt="Smiley face"/>
          <img className={this.state.active === 1 ? "active" : "d-none"} src="../../public/what-we-do-assets/photoCustom2.png" alt="Smiley face"/>
          <img className={this.state.active === 2 ? "active" : "d-none"} src="../../public/what-we-do-assets/photsso.png" alt="Smiley face"/>
          <img className={this.state.active === 3 ? "active" : "d-none"} src="../../public/what-we-do-assets/photsso.png" alt="Smiley face"/>
        </div>

        <div className={style.right + " " + style.BebasNenuBold + " " + style.title}>
          <div className={style.carouselconteiner}>
            <div className={style.cleft}></div>
            <div className={style.customWorkTitle + " " + style.cright}>
              CUSTOM WORK
            </div>
            <div className={style.customWorkSubTitle + " " + style.cleft}>
              Custom Development and Design for Full Line of Mobile Casino Games
            </div>
            <div className={style.cright}></div>
            <div className={style.customWorkPartLeft + " " + style.cleft}>
              BWIN PARTY<br/>
              ROULETTE<br/>
              BWIN PARTY<br/>
              ROULETTE<br/>
            </div>
            <div className={style.customWorkPartRight + " " + style.cright}>
              <span className={this.state.active === 0 ? style.active : ""}>WORD SIRES OF POKER</span><br/>
              <span className={this.state.active === 1 ? style.active : ""}>CAESARS</span><br/>
              <span className={this.state.active === 2 ? style.active : ""}>WORD SIRES OF POKER</span><br/>
              <span className={this.state.active === 3 ? style.active : ""}>CAESARS</span><br/>
            </div>
          </div>

        </div>
        <div className={style.left + " " + style.nextButton} onClick={this.handleNext}>
          next
        </div>
        <div className={style.right + " " + style.backButton} onClick={this.handleBack}>
          back
        </div>
      </div>
    </div>);
  }
}

export default Carousel;
