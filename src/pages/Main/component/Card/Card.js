import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Card = ({ img, destination, startDate, endDate, price }) => {
  const navigate = useNavigate();
  const recommendNavigate = () => {
    const DEPARTURE_LOCATION = 'Seoul';
    const destinationMatch = {
      몰디브: 'Maldive',
      발리: 'Bali',
      하와이: 'Hawaii',
      칸쿤: 'Cancun',
    };
    const destinationLocation = destinationMatch[destination];

    const loadingDataMatch = {
      몰디브: ['MLE', '몰디브'],
      발리: ['DPS', '발리'],
      하와이: ['HNL', '하와이'],
      칸쿤: ['CUN', '칸쿤'],
    };

    const loadingLocationCode = loadingDataMatch[destination];

    navigate(
      `/reservation?departure_name=${DEPARTURE_LOCATION}&destination_name=${destinationLocation}&departure_date=${startDate}&return_date=${endDate}&passenger=2&  `,
      {
        state: {
          arrive_name: loadingLocationCode[1],
          arrive_name_code: loadingLocationCode[0],
          departure_day: startDate,
          arrive_day: endDate,
        },
      }
    );
  };
  return (
    <CardContainer onClick={recommendNavigate}>
      <CardImage src={img}></CardImage>
      <CardContent>
        <CardHeader>
          서울 <i className="fa-solid fa-arrow-right"></i> {destination}
        </CardHeader>
        <CardSchedule>
          <CardDestination>
            <i className="fa-solid fa-plane"></i> 서울{' '}
            <i className="fa-solid fa-arrow-right"></i> {destination}
          </CardDestination>
          <CardPeriod>
            8월 {startDate}일 - 8월 {endDate}일
          </CardPeriod>
        </CardSchedule>
        <CardBottomLine>
          <CardPrice> {price} ~</CardPrice>
          <CardDepartureMonth>8월 출발</CardDepartureMonth>
        </CardBottomLine>
      </CardContent>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
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
