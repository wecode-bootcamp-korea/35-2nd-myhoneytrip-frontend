import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../Card/Card';
import styled from 'styled-components';
import RECOMMEND_DATA from '../../data/recommendData';

const Recommend = () => {
  const navigate = useNavigate();

  const recommendNavigate = (destination, startDate, endDate) => {
    const DEPARTURE_LOCATION = 'Seoul';
    const destinationMatch = {
      몰디브: 'Maldive',
      발리: 'Bali',
      하와이: 'Hawaii',
      칸쿤: 'Cancun',
    };
    const destinationLocation = destinationMatch[destination];

    navigate(
      `http://10.58.5.230:8000/flights?departure_name=${DEPARTURE_LOCATION}&destination_name=${destinationLocation}&departure_date=${startDate}&return_date=${endDate}&passenger=2&  `
    );
  };

  return (
    <Recommendation>
      <RecommendTitle>여름 휴가를 위한 항공권</RecommendTitle>
      <RecommendationContent>
        {RECOMMEND_DATA.map((element, i) => {
          const { img_url, destination, startDate, endDate, price } = element;
          return (
            <Card
              key={i}
              img={img_url}
              destination={destination}
              startDate={startDate}
              endDate={endDate}
              price={price}
              recommendNavigate={recommendNavigate}
            />
          );
        })}
      </RecommendationContent>
    </Recommendation>
  );
};

export default Recommend;

const Recommendation = styled.div`
  margin: 30px 0;
`;
const RecommendTitle = styled.span`
  display: inline-block;
  padding: 10px 0 25px 0;
  font-size: 20px;
`;
const RecommendationContent = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;
