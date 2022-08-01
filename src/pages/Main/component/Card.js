import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <CardContainer>
      <CardImage></CardImage>
      <CardContent>
        <CardHeader>
          서울 <i className="fa-solid fa-arrow-right"></i> 하와이
        </CardHeader>
        <CardSchedule>
          <CardDestination>
            <i className="fa-solid fa-plane"></i> 서울{' '}
            <i className="fa-solid fa-arrow-right"></i> 하와이
          </CardDestination>
          <CardPeriod>8월 8일 - 8월 9일</CardPeriod>
        </CardSchedule>
        <CardBottomLine>
          <CardPrice>35,700원 ~</CardPrice>
          <CardDepartureMonth>8월 출발</CardDepartureMonth>
        </CardBottomLine>
      </CardContent>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  border: 1px solid gray;
`;

const CardImage = styled.img`
  width: 280px;
  height: 155px;
`;

const CardContent = styled.div`
  width: 280px;
  height: 130px;
  padding: 20px;
`;

const CardHeader = styled.div`
  margin-bottom: 15px;
`;

const CardSchedule = styled.div`
  margin-bottom: 15px;

  div {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.4);
  }
`;

const CardDestination = styled.div`
  margin-bottom: 5px;
`;

const CardPeriod = styled.div``;

const CardBottomLine = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    font-size: 14px;
  }
`;

const CardPrice = styled.span``;

const CardDepartureMonth = styled.span`
  color: ${props => props.theme.pink};
`;
