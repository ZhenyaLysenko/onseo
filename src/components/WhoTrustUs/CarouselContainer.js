import styled from 'styled-components';

const CarouselContainer = styled.div `
  display: flex;
  max-height: 510px;
  transition: ${(props) => props.sliding ? 'none' : 'transform 1s ease'};
  transform: ${(props) => {
    if (!props.sliding) return 'translateX(calc(-27%))';
    if (props.direction === 'prev') return 'translateX(calc(2 * (-27%)))'
    return 'translateX(0%)';
  }};
  @media screen and (max-width: 767px) {
    justify-content: flex-start;
    flex-direction: column;
    transform: ${(props) => {
        if (!props.sliding) return 'translateY(calc(-15% - 53px))';
        if (props.direction === 'prev') return 'translateY(calc(2 * (-15% - 53px)))'
        return 'translateY(0%)';
    }};
  }
  @media screen and (max-width: 400px) {
    flex-direction: column;
    transform: ${(props) => {
      if (!props.sliding) return 'translateY(calc(-15% - 33px))';
      if (props.direction === 'prev') return 'translateY(calc(2 * (-15% - 33px)))'
      return 'translateY(0%)';
    }};
  }
`
export default CarouselContainer

/*
transition: ${(props) => props.sliding ? 'none' : 'transform 1s ease'};
transform: ${(props) => {
  if (props.start) return 'translateX(0%)';
  console.log(props);
  if (!props.sliding) return 'translateX(calc(-27%))';
  if (props.direction === 'prev') return 'translateX(calc(2 * (-27%)))'
  return 'translateX(0%)';
}};

*/
