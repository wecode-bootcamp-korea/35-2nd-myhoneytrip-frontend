import React from 'react';
import S from './Styled.Ticket';

const Ticket = ({ ticketData, overTen }) => {
  const {
    Departure,
    Arrive,
    Month,
    Date,
    AirLineImg,
    AirLine,
    Departure_time,
    Arrive_time,
    AirTime,
  } = ticketData;

  return (
    <S.Ticket>
      <S.TicketTop>
        <span>가는편</span>
        <strong>
          {Departure.name} ({Departure.code})
        </strong>
        <img src="/images/Purchase/ticket-top.svg" alt="" />
        <strong>
          {Arrive.name} ({Arrive.code})
        </strong>
        <p>
          {overTen(Month)}월 {overTen(Date)}일
        </p>
      </S.TicketTop>
      <S.TicketBottom>
        <S.TicketBottomImg>
          <img src={AirLineImg} alt="여행사 이미지" />
          <p>{AirLine.name}</p>
        </S.TicketBottomImg>
        <S.TicketBottomTime>
          <S.TicketBottomDeparture>
            <p>
              {overTen(Departure_time.hour)}:{overTen(Departure_time.minute)}
            </p>
            <span>{Departure.code}</span>
          </S.TicketBottomDeparture>
          <S.TicketBottomTotalTime>
            <S.TicketBottomArrow>
              <img src="/images/Purchase/oneway_arrow.svg" alt="" />
            </S.TicketBottomArrow>
            <p>{AirTime}</p>
          </S.TicketBottomTotalTime>
          <S.TicketBottomArrive>
            <p>
              {overTen(Arrive_time.hour)}:{overTen(Arrive_time.minute)}
            </p>
            <span>{Arrive.code}</span>
          </S.TicketBottomArrive>
        </S.TicketBottomTime>
        직항
      </S.TicketBottom>
      <S.TicketDetail>
        <p>
          {AirLine.name} {AirLine.AirLineCode}
        </p>
        <S.TicketDetailDeparture>
          {overTen(Month)}월 {overTen(Date)}일
        </S.TicketDetailDeparture>
        <S.TicketDetailIcon>
          <img src="/images/Purchase/departure_arrived.svg" alt="" />
        </S.TicketDetailIcon>
        <S.TicketDetailTime>
          <p>
            <strong>
              {overTen(Departure_time.hour)}:{overTen(Departure_time.minute)}
            </strong>
            {Departure.name} {Departure.code}
          </p>
          <span>{AirTime}</span>
          <p>
            <strong>
              {overTen(Arrive_time.hour)}:{overTen(Arrive_time.minute)}
            </strong>
            {Arrive.name} {Arrive.code}
          </p>
        </S.TicketDetailTime>
      </S.TicketDetail>
    </S.Ticket>
  );
};

export default Ticket;
