import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Ticket from './Ticket';
import PurchasePrice from './PurchasePrice';
import S from './Styled.Purchase';

const Purchase = () => {
  const [ticketData, setTicketData] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    fetch('/data/Ticket_data.json')
      .then(res => res.json())
      .then(data => setTicketData(data));
  }, []);

  if (Object.keys(ticketData).length === 0) return <>Loading...</>;

  const { Departure_Data, Arrive_Data } = ticketData;
  const goBack = () => {
    navigate(-1);
  };
  const overTen = num => {
    return num < 10 ? '0' + num : num;
  };

  return (
    <S.SearchInfo>
      <S.Title>
        <S.MainTitle>
          선택한 항공편
          <div onClick={goBack}>
            <p>검색 결과로 돌아가기</p>
            <img src="/images/Purchase/nav-left.svg" alt="" />
          </div>
        </S.MainTitle>
        <S.SubTitle>
          <h1>훌륭한 선택을 하셨습니다. 지금 이 가격을 놓치지 마세요!</h1>
        </S.SubTitle>
      </S.Title>
      <S.PurchaseInfo>
        <S.PurchaseLeft>
          <Ticket ticketData={Departure_Data} overTen={overTen} />
          <Ticket ticketData={Arrive_Data} overTen={overTen} />
        </S.PurchaseLeft>
        <S.PurchaseRight>
          <S.PurchaseRightTitle>
            {Departure_Data.Departure.name}
            <strong>
              <img src="/images/Purchase/twoway_arrow_short.svg" alt="" />
            </strong>
            {Arrive_Data.Departure.name}
            <p>
              {overTen(Departure_Data.Month)}월 {overTen(Departure_Data.Date)}일
              - {overTen(Arrive_Data.Month)}월 {overTen(Arrive_Data.Date)}일 ·
              승객 {Departure_Data.person}명
            </p>
          </S.PurchaseRightTitle>
          <PurchasePrice
            Departure_Data={Departure_Data}
            Arrive_Data={Arrive_Data}
          />
        </S.PurchaseRight>
      </S.PurchaseInfo>
      <S.ReservationButton>
        <button onClick={() => navigate('/passengerdata')}>예약하기</button>
      </S.ReservationButton>
    </S.SearchInfo>
  );
};

export default Purchase;
