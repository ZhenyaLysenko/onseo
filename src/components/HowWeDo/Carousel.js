import React, {Component} from 'react';
import style from "./Carousel.css";
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
    const {children} = this.props;

    return (<div className="container-fluid">
    <div className="row">
    
  <div className={"col-lg-3 " + style.left}>
      <span className={style.fontBold}>ART</span><br />
      <span className={style.fontBold}>AND</span><br />
      <span className={style.fontBold}>DESIGN</span>
        <div className={style.sizeImgNext}>
          <Wrapper>
            <CarouselContainer sliding={ this.state.sliding } direction={this.state.direction}>
              {
                children.map((child, index) => (<CarouselSlot key={index} order={this.getOrder(++index)}>
                  {child}
                </CarouselSlot>))
              }
            </CarouselContainer>
          </Wrapper>
        </div>
  </div>
  <div className="col-lg-6">
        <div className={style.sizeImg}>
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
        
  </div>
  <div className="col-lg-3">
  <div className={style.sizeImgBack}>
          <Wrapper>
            <CarouselContainer sliding={ this.state.sliding } direction={this.state.direction}>
              {
                children.map((child, index) => (<CarouselSlot key={index} order={this.getOrder(index - 1)}>
                  {child}
                </CarouselSlot>))
              }
            </CarouselContainer>
          </Wrapper>
        </div>
  </div>
      <div className="col-lg-12">
      <div className={style.nav}>
          <div className={style.leftBtn + " " + style.size4} onClick={ this.nextSlide}>
            <span className={style.pointer}>Next<span className="fa fa-caret-right"/></span>
          </div>
          <div className={style.rightBtn + " " + style.size4} onClick={ this.prevSlide}>
            <span className={style.pointer}><span className="fa fa-caret-left"/>Back</span>
          </div>
        </div>
      </div>
    </div>
      
    </div>);
  }
}

export default Carousel;
