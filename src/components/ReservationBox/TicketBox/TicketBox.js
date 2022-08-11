import React, { useState } from 'react';
import DetailCost from '../DetailCost/DetailCost';
import S from './Styled.TicketBox';

const TicketBox = ({ ticket, goToPurchase, sendingData, setSendingData }) => {
  const [isShowDetailView, setIsShowDetailView] = useState(false);

  const {
    flight_detail_id,
    departure_airport_code,
    destination_airport_code,
    airline,
    airline_url,
    departure_time,
    arrival_time,
    price,
    flight_time,
    passengers,
    remaining_seats,
  } = ticket;
  return (
    <S.Ticket key={flight_detail_id}>
      <S.TicketBoxs>
        <S.TicketBoxView onClick={() => setIsShowDetailView(!isShowDetailView)}>
          <S.FlightSchedule>
            <S.TicketDetailView>
              <S.TicketBoxDeparture>
                <S.AirplaneLogoImg>
                  <img src={airline_url} alt="airlinelogo" />
                </S.AirplaneLogoImg>
                <S.AirplaneName>{airline}</S.AirplaneName>
                <S.TicketBoxTimetable>
                  <S.TicketBoxTimetableDeparture>
                    <S.TicketBoxTimetableTime>
                      {departure_time}
                    </S.TicketBoxTimetableTime>
                    <S.TimetableDepartureCode>
                      {departure_airport_code}
                    </S.TimetableDepartureCode>
                  </S.TicketBoxTimetableDeparture>
                  <S.TimetableTravelTimeLine>
                    <img
                      src="/images/Reservation/oneway_arrow.svg"
                      alt="arrow"
                    />
                    약 {flight_time}시간 20분
                  </S.TimetableTravelTimeLine>
                  <S.TicketBoxTimetableArrived>
                    <S.TicketBoxTimetableTime>
                      {arrival_time}
                    </S.TicketBoxTimetableTime>
                    <S.TimetableDepartureCode>
                      {destination_airport_code}
                    </S.TimetableDepartureCode>
                  </S.TicketBoxTimetableArrived>
                </S.TicketBoxTimetable>
              </S.TicketBoxDeparture>
              <S.TimetableNonstop>직항</S.TimetableNonstop>
            </S.TicketDetailView>
          </S.FlightSchedule>
          <S.FlightCost>
            <S.FlightCostBox
              onClick={() => {
                const newSendingData = [...sendingData];
                departure_airport_code === 'SEL'
                  ? (newSendingData[0] = ticket)
                  : (newSendingData[1] = ticket);
                setSendingData([...newSendingData]);
                departure_airport_code !== 'SEL' &&
                  goToPurchase(newSendingData);
              }}
            >
              <S.FlightCostBoxPrice>
                <S.FlightCostBoxPersonSeat>
                  <S.FlightCostBoxPerson>
                    성인 {passengers}인
                  </S.FlightCostBoxPerson>
                  <S.FlightCostBoxSeat>
                    남은 좌석 {remaining_seats}석
                  </S.FlightCostBoxSeat>
                </S.FlightCostBoxPersonSeat>
                <S.FlightPrice>
                  <strong>
                    {parseInt(passengers * price).toLocaleString()}
                    <span>원</span>
                  </strong>
                  <img
                    src="/images/Reservation/arrow_basic.svg"
                    alt="arrowselect"
                  />
                </S.FlightPrice>
              </S.FlightCostBoxPrice>
            </S.FlightCostBox>
          </S.FlightCost>
        </S.TicketBoxView>
      </S.TicketBoxs>
      {isShowDetailView && <DetailCost flightData={ticket} />}
    </S.Ticket>
  );
};

export default TicketBox;
