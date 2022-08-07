import React from 'react';
import S from './Styled.ReservationTicket';

const ReservationData = ({ reservationData, overTen }) => {
  const { flight_detail, booking, airline, departure, destination } =
    reservationData;

  const day = ['일', '월', '화', '수', '목', '금', '토'];

  const newDate = new Date(flight_detail.flight_detail_time);

  const date = `${overTen(newDate.getMonth() + 1)}월 ${overTen(
    newDate.getDate()
  )}일 (${day[newDate.getDay()]})`;

  return (
    <li>
      <S.RightTime>{date}</S.RightTime>
      <S.RightLine></S.RightLine>
      <S.RightMainTicket>
        <S.TicketLeft>
          <S.LeftTicketTitle>
            <p>{booking.booking_status}</p>
            <span>예약상세보기 {'>'}</span>
          </S.LeftTicketTitle>
          <S.LeftTicketName>
            <S.LeftTicketImg>
              <img
                src="https://d2yoing0loi5gh.cloudfront.net/assets/default/user_profile_image-414acc60b27f0a258bec14c82b70dc361fc6768da9289f924f887bec1fc33849.png"
                alt=""
              />
            </S.LeftTicketImg>
            <S.LeftTicketInfo>
              <p>
                [{airline.airline_name}] {departure.departure_name} -{' '}
                {destination.destination_name}
              </p>
              <span>예약번호 {booking.booking_number}</span>
            </S.LeftTicketInfo>
          </S.LeftTicketName>
          <S.LeftTicketStatus>
            <p>결제 요청 전입니다. 결제시한 내 결제를 진행해주세요.</p>
          </S.LeftTicketStatus>
        </S.TicketLeft>
        <S.TicketRight>
          <button>결제하기</button>
          <button>예약취소</button>
        </S.TicketRight>
      </S.RightMainTicket>
    </li>
  );
};

export default ReservationData;
