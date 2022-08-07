import React, { useState, useEffect } from 'react';
import ReservationTicket from './ReservationTicket';
import S from './Styled.CheckReservation';

const CheckReservation = () => {
  const [reservationData, setReservationData] = useState([]);
  const [tabData, setTabData] = useState([]);
  const [currentTab, setCurrentTab] = useState('예정된 여행');

  useEffect(() => {
    fetch('/data/Reservation_Data-1.json')
      .then(res => res.json())
      .then(data => setReservationData(data.result));
    fetch('/data/Tab_Data.json')
      .then(res => res.json())
      .then(data => setTabData(data));
  }, []);

  const handleCurrentTab = (id, title) => {
    fetch(`/data/Reservation_Data-${id}.json`)
      .then(res => res.json())
      .then(data => setReservationData(data.result));
    setCurrentTab(title);
  };

  const overTen = num => {
    return num < 10 ? '0' + num : num;
  };

  return (
    <S.ReservationData>
      <S.ReservationTitle>내 여행</S.ReservationTitle>
      <S.ReservationMain>
        <S.ReservationLeft>
          {tabData.map(({ id, title }) => {
            return (
              <S.LeftTitle
                key={id}
                className={currentTab === title ? 'active' : ''}
                onClick={() => handleCurrentTab(id, title)}
              >
                {title}
              </S.LeftTitle>
            );
          })}
        </S.ReservationLeft>
        <S.ReservationRight>
          <S.RightTitle>2022년</S.RightTitle>
          <S.RightMain>
            <ul>
              {reservationData ? (
                reservationData.map(data => {
                  return (
                    <ReservationTicket
                      reservationData={data}
                      overTen={overTen}
                      key={data.booking.booking_id}
                    />
                  );
                })
              ) : (
                <S.noneTravelData>
                  <S.noneTravelDataImg>
                    <img
                      src="https://d2yoing0loi5gh.cloudfront.net/assets/kitty/empty/ic_reservation@2x-f58be91d7ddc8d59fc7fa82cab221b17e4eeef83501e56ff8c759a0684816643.png"
                      alt=""
                    />
                  </S.noneTravelDataImg>
                  <S.noneTravelDataText>
                    <p>{currentTab}이 없습니다</p>
                  </S.noneTravelDataText>
                </S.noneTravelData>
              )}
            </ul>
          </S.RightMain>
        </S.ReservationRight>
      </S.ReservationMain>
    </S.ReservationData>
  );
};

export default CheckReservation;
