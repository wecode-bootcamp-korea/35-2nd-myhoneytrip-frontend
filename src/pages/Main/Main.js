import React, { useState } from 'react';
import S from './Styled.Main';

const Main = () => {
  const [changePattern, setChangePattern] = useState(false);
  const handleChangePattern = () => {
    setChangePattern(!changePattern);
  };

  return (
    <S.Container>
      <S.Header>
        <S.NavSpace></S.NavSpace>
        <S.SearchHeader>
          <div>
            <S.Round
              changePattern={changePattern}
              onClick={handleChangePattern}
            >
              왕복ㅇ
            </S.Round>
            <S.OneWay
              changePattern={changePattern}
              onClick={handleChangePattern}
            >
              편도
            </S.OneWay>
          </div>
          <S.ReservationList>
            <span>항공권 예약내역 </span>
            <span>
              <i className="fa-solid fa-circle-chevron-right"></i>
            </span>
          </S.ReservationList>
        </S.SearchHeader>

        <S.SearchBar>
          <S.Schedule>
            <span>서울 (SEL) </span>
            <i className="fa-solid fa-arrows-rotate"></i>
            <span>도착지가 어디인가요?</span>
          </S.Schedule>
          <S.Date>
            <i className="fa-regular fa-calendar"> </i>
            <S.DepartureDate>가는날 선택</S.DepartureDate>
            <span>~</span>
            <S.ArriveDate changePattern={changePattern}>
              오는날 선택
            </S.ArriveDate>
          </S.Date>
          <S.Passenger>
            <i className="fa-solid fa-user-large"> </i>
            <span> 승객 1명, 일반석</span>
            <i className="fa-solid fa-angle-down"></i>
          </S.Passenger>
          <S.SearchBtn>검색</S.SearchBtn>
        </S.SearchBar>
      </S.Header>
    </S.Container>
  );
};

export default Main;
