import React, {Component} from 'react';
import style from "./Carousel.css";
import gstyle from '../global/styles.css'
import ImgCustom1 from "../../../public/what-we-do-assets/photoCat.png"
import ImgCustom2 from "../../../public/what-we-do-assets/photoCustom2.png"
import ImgCustom3 from "../../../public/what-we-do-assets/photoCat.png"
import ImgCustom4 from "../../../public/what-we-do-assets/photoCat.png"

import CarouselContainer from './CarouselContainer'
import Wrapper from './Wrapper'
import CarouselSlot from './CarouselSlot'

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      position: 0,
      sliding: false,
      direction: 'next',
      imeges: [ImgCustom1, ImgCustom2, ImgCustom3, ImgCustom4]
    }

    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
  }

  getOrder(itemIndex) {
    const {position} = this.state;
    const {children} = this.props;
    const numItems = children.length || 1;

    if (itemIndex - position < 0) {
      return numItems - Math.abs(itemIndex - position);
    }

    return itemIndex - position;
  }

  nextSlide() {
    const {position} = this.state;
    const {children} = this.props;
    const numItems = children.length || 1;

    this.doSliding('next', position === numItems - 1 ? 0 : position + 1);
    console.log(this.state);
  }

  prevSlide() {
    const { position } = this.state;
    const { children } = this.props;
    const numItems = children.length;

    this.doSliding('prev', position === 0 ? numItems - 1 : position - 1);
  }

  doSliding(direction, position) {
  this.setState({
    sliding: true,
    start: false,
    position,
    direction
  });
  setTimeout(() => {
   this.setState({
      sliding: false
    })
  }, 50)
}

  render() {
    const {title, children} = this.props;
    const description = ["Just a cat", "Custom Development and Design for Full Line of Mobile Casino Games",
  "Another cat", "Last one !"];

    return (<div>
      <div className={style.topTitle + " " + gstyle.content + " " + gstyle.fn_size_2}>CUSTOM WORK</div>
      <div className={style.conteiner + " " + style.content__slider}>

        <div className={style.left}>
          <Wrapper>
            <CarouselContainer sliding={ this.state.sliding } direction={this.state.direction}>
              {
                children.map((child, index) => (<CarouselSlot key={index} order={this.getOrder(index)}>
                  {child}
                </CarouselSlot>))
              }
            </CarouselContainer>
          </Wrapper>
        </div>

        <div className={style.right + " " + style.content__tablet}>
          <div className={style.carouselconteiner}>
            <div className={style.customWorkTitle + " " + gstyle.fn_size_2}>
              CUSTOM WORK
            </div>
            <div className={style.flexNoWrap}>
              <div className={style.customWorkSubTitle + " " + gstyle.fn_size_4}>
                <Wrapper>
                  <CarouselContainer sliding={ this.state.sliding } direction={this.state.direction}>
                    {
                      description.map((child, index) => (<CarouselSlot key={index} order={this.getOrder(index)}>
                        {child}
                      </CarouselSlot>))
                    }
                  </CarouselContainer>
                </Wrapper>
              </div>
              <div className={style.flexSpace50}></div>
            </div>

            <div className={style.customWorkPartLeft + " " + style.cleftMenu}>
              <div className={gstyle.fn_size_3}>BWIN PARTY</div>
              <div className={gstyle.fn_size_3}>ROULETTE</div>
              <div className={gstyle.fn_size_3}>BWIN PARTY</div>
              <div className={gstyle.fn_size_3}>ROULETTE</div>
            </div>
            <div className={style.customWorkPartRight + " " + style.crightMenu + " " + gstyle.fn_size_3}>
              <div className={this.state.position === 3
                  ? style.active
                  : ""}>WORD SIRES OF POKER</div>
              <div className={this.state.position === 0
                  ? style.active
                  : ""}>CAESARS</div>
              <div className={this.state.position === 1
                  ? style.active
                  : ""}>WORD SIRES OF POKER</div>
              <div className={this.state.position === 2
                  ? style.active
                  : ""}>CAESARS</div>
            </div>
          </div>

        </div>
        <div className={style.nav}>
          <div className={style.leftBtn + " " + gstyle.fn_size_5} onClick={ this.nextSlide}>
            <span className={style.pointer}>Next<span className="fa fa-caret-right"/></span>
          </div>
          <div className={style.rightBtn + " " + gstyle.fn_size_5} onClick={ this.prevSlide}>
            <span className={style.pointer}><span className="fa fa-caret-left"/>Back</span>
          </div>
        </div>
      </div>
    </div>);
  }
}

export default Carousel;
