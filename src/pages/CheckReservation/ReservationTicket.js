import React from 'react';
import { useNavigate } from 'react-router-dom';
import S from './Styled.ReservationTicket';

const ReservationData = ({ reservationData, overTen }) => {
  const {
    booking_id,
    arrival_date,
    arrival_name,
    booking_number,
    booking_status,
    departure_name,
    airline,
  } = reservationData;
  const navigate = useNavigate();
  const day = ['일', '월', '화', '수', '목', '금', '토'];
  const status = { UPCOMING: '예약완료', CANCELED: '예약취소' };
  const newDate = new Date(arrival_date);

  const date = `${overTen(newDate.getMonth() + 1)}월 ${overTen(
    newDate.getDate()
  )}일 (${day[newDate.getDay()]})`;

  const cancelTravel = () => {
    fetch('http://54.180.2.226:8001/bookings/mytrip', {
      method: 'PATCH',
      headers: { Authorization: localStorage.getItem('token') },
      body: JSON.stringify({ booking_id: booking_id }),
    })
      .then(res => res.json())
      .then(
        data =>
          data.message === 'CANCEL SUCCESS' &&
          (alert('취소가 완료되었습니다.'), navigate('/checkreservation'))
      );
  };
  return (
    <li>
      <S.RightTime>{date}</S.RightTime>
      <S.RightLine></S.RightLine>
      <S.RightMainTicket>
        <S.TicketLeft>
          <S.LeftTicketTitle>
            <p>{status[booking_status]}</p>
            <span>예약상세보기 {'>'}</span>
          </S.LeftTicketTitle>
          <S.LeftTicketName>
            <S.LeftTicketImg>
              <img src={`${airline.logo}`} alt="" />
            </S.LeftTicketImg>
            <S.LeftTicketInfo>
              <p>
                [{airline.name}] {departure_name} - {arrival_name}
              </p>
              <span>예약번호 {booking_number}</span>
            </S.LeftTicketInfo>
          </S.LeftTicketName>
          <S.LeftTicketStatus>
            <p>
              {booking_status === 'CANCELED'
                ? '취소된 항공권입니다, 다시 예약해주세요.'
                : '결제 요청 전입니다. 결제시한 내 결제를 진행해주세요.'}
            </p>
          </S.LeftTicketStatus>
        </S.TicketLeft>
        <S.TicketRight>
          {booking_status === 'CANCELED' ? (
            <button onClick={() => navigate('/')}>다시 예약하러가기</button>
          ) : (
            <>
              <button>결제하기</button>
              <button onClick={cancelTravel}>예약취소</button>
            </>
          )}
        </S.TicketRight>
      </S.RightMainTicket>
    </li>
  );
};

export default ReservationData;
