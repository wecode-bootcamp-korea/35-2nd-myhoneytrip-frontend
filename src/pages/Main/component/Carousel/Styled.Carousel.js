import styled from 'styled-components';

const S = {};

S.CarouselData = styled.img`
  width: 590px;
  margin-right: 20px;
  margin-top: 20px;
  padding: 10px;
  object-fit: cover;
  cursor: pointer;
  z-index: 10;
`;

S.Slick = styled.div`
  justify-content: center;
  align-items: center;
  width: 1200px;
  margin: 0 auto;
  z-index: 10;
`;

export default S;
