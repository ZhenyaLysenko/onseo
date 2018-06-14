import styled from 'styled-components';
const CarouselSlot = styled.div`
  flex: 1 0 100%;
  order: ${(props) => props.order};
  @media screen and (max-width: 767px) {

  }
`
export default CarouselSlot;
