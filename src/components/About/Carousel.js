import React, {Component} from 'react';
import style from "./Carousel.css";
import {Glyphicon, Button} from 'react-bootstrap';

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 0,
    }

    this.handleNext = this.handleNext.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  handleBack() {
    this.setState(prevState => ({
      active: prevState.active === 0
        ? 4
        : prevState.active - 1
    }));
  }

  handleNext() {
    this.setState(prevState => ({
      active: (prevState.active + 1) % 5
    }));
  }


  render() {
    return (<div>

      <div className={style.conteiner}>

        <div className={style.right}>
          <div className={style.carouselconteiner}>
            <div className={style.flexNoWrap}>
              <div className={style.customWorkSubTitle}>
                {
                  this.state.active === 0
                    ? <div className={style.content__text2}>
                      <h1 className={style.content__text_h1}>Full spectrum of Talent2</h1>
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
                    : this.state.active === 1
                      ? <div className={style.content__text2}>
                        <h1 className={style.content__text_h1}>Lorem Ipsum</h1>
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
                      : this.state.active === 2
                        ? <div className={style.content__text2}>
                          <h1 className={style.content__text_h1}>Slots Craze</h1>
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
                        : this.state.active === 3
                          ? <div className={style.content__text2}>
                            <h1 className={style.content__text_h1}>God of Axion</h1>
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
                          : this.state.active === 4
                            ? <div className={style.content__text2}>
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
                          : ""
                }
              </div>
              <div className={style.flexSpace50}></div>
            </div>

            <div className={style.flexArrow}>
              <div className={style.arrow}>
                <a className={style.about_a} onClick={this.handleNext}>
                  Next
                  <i className={"fa" + " " + "fa-caret-right" +  " " + style.myLink}></i>
                </a>
              </div>
              <div className={style.arrow}>
                <a className={style.about_a} onClick={this.handleBack}>
                  <i className={"fa" + " " + "fa-caret-left" +  " " + style.myLink}></i>
                  Back
                </a>
              </div>
            </div>

            <div className={style.hidden}>
              <div className={style.flex}>
              <div className={style.pos}>
                <div className={this.state.active === 0
                    ? style.active
                    : ""}><div className={style.footer_item}>
                      <i className="fa fa-square"></i>
                    </div></div>
                </div>
                <div className={this.state.active === 1
                    ? style.active
                    : ""}><div className={style.footer_item}>
                      <h2 className={style.footer_item_h2}>Lorem ipsum</h2>
                      <i className="fa fa-square"></i>
                    </div></div>
                <div className={this.state.active === 2
                    ? style.active
                    : ""}><div className={style.footer_item}>
                      <h2 className={style.footer_item_h2}>Slots Craze</h2>
                      <i className="fa fa-square"></i>
                    </div></div>
                <div className={this.state.active === 3
                    ? style.active
                    : ""}><div className={style.footer_item}>
                      <h2 className={style.footer_item_h2}>God of Axion</h2>
                      <i className="fa fa-square"></i>
                    </div></div>
                <div className={this.state.active === 4
                    ? style.active
                    : ""}><div className={style.footer_item}>
                      <h2 className={style.footer_item_h2}>Full spectrum of Talent</h2>
                      <i className="fa fa-square"></i>
                    </div></div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>);
  }
}

export default Carousel;
