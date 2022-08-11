import React from 'react';
import S from './Styled.Ticket';

const Ticket = ({ ticketData, overTen }) => {
  const {
    departure_location_korean,
    departure_airport_code,
    destination_location_korean,
    destination_airport_code,
    month,
    date,
    airline,
    flight_route_code,
    departure_time,
    arrival_time,
    flight_time,
    airline_url,
  } = ticketData;

  return (
    <S.Ticket>
      <S.TicketTop>
        <span>
          {departure_location_korean === '서울' ? '가는편' : '오는편'}
        </span>
        <strong>
          {departure_location_korean} ({departure_airport_code})
        </strong>
        <img src="/images/Purchase/ticket-top.svg" alt="" />
        <strong>
          {destination_location_korean} ({destination_airport_code})
        </strong>
        <p>
          {overTen(month)}월 {overTen(date)}일
        </p>
      </S.TicketTop>
      <S.TicketBottom>
        <S.TicketBottomImg>
          <img src={airline_url} alt="여행사 이미지" />
          <p>{airline}</p>
        </S.TicketBottomImg>
        <S.TicketBottomTime>
          <S.TicketBottomDeparture>
            <p>{departure_time}</p>
            <span>{departure_airport_code}</span>
          </S.TicketBottomDeparture>
          <S.TicketBottomTotalTime>
            <S.TicketBottomArrow>
              <img src="/images/Purchase/oneway_arrow.svg" alt="" />
            </S.TicketBottomArrow>
            <p>약{flight_time}시간 20분</p>
          </S.TicketBottomTotalTime>
          <S.TicketBottomArrive>
            <p>{arrival_time}</p>
            <span>{destination_airport_code}</span>
          </S.TicketBottomArrive>
        </S.TicketBottomTime>
        직항
      </S.TicketBottom>
      <S.TicketDetail>
        <p>
          {airline}
          <span>{flight_route_code}</span>
        </p>
        <S.TicketDetailDeparture>
          {month}월 {date}일
        </S.TicketDetailDeparture>
        <S.TicketDetailIcon>
          <img src="/images/Purchase/departure_arrived.svg" alt="" />
        </S.TicketDetailIcon>
        <S.TicketDetailTime>
          <p>
            <strong>{departure_time}</strong>
            {departure_location_korean} {departure_airport_code}
          </p>
          <span>약{flight_time}시간 20분</span>
          <p>
            <strong>{arrival_time}</strong>
            {destination_location_korean} {destination_airport_code}
          </p>
        </S.TicketDetailTime>
      </S.TicketDetail>
    </S.Ticket>
  );
};

export default Ticket;
