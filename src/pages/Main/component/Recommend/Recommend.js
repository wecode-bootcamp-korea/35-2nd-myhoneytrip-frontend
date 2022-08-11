import React from 'react';
import Card from '../Card/Card';
import styled from 'styled-components';
import RECOMMEND_DATA from '../../data/recommendData';

const Recommend = ({ destination, startDate, endDate }) => {
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
