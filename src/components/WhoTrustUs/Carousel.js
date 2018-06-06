import React, {Component} from 'react';
import PropTypes from 'prop-types';

import CarouselContainer from './CarouselContainer'
import Wrapper from './Wrapper'
import CarouselSlot from './CarouselSlot'
import style from './Carousel.css'

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0,
      sliding: false,
      direction: 'next',
      start: true
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
    const {title, children} = this.props;

    return (<div>
      <Wrapper>
        <CarouselContainer sliding={ this.state.sliding } direction={this.state.direction} start={this.state.start}>
          {
            children.map((child, index) => (<CarouselSlot key={index} order={this.getOrder(index)}>
              {child}
            </CarouselSlot>))
          }
        </CarouselContainer>
      </Wrapper>

      <div className={style.space}> </div>

      <div className={style.nav}>
        <div className={style.leftBtn + " " + style.size2} onClick={ this.nextSlide}>
          <span className={style.pointer}>Next<span className="fa fa-caret-right"/></span>
        </div>
        <div className={style.rightBtn + " " + style.size2} onClick={ this.prevSlide}>
          <span className={style.pointer}><span className="fa fa-caret-left"/>Back</span>
        </div>
      </div>
    </div>)
  }
}

Carousel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};

export default Carousel;
