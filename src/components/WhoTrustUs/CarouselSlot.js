import styled from 'styled-components';
const CarouselSlot = styled.div`
  flex: 1 0 27%;
  order: ${(props) => props.order};
  flex-direction: column;
  @media screen and (max-width: 767px) {
    flex: 1 0 15%;
  }
`
export default CarouselSlot;
