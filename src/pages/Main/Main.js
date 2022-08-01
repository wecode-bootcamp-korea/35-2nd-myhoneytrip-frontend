import React, { useState } from 'react';
import Destination from './component/Destination/Destination';
import Calendar from './component/Calendar/Calendar';
import Passenger from './component/Passenger/Passenger';

import S from './Styled.Main';
import { useNavigate } from 'react-router-dom';

const usePatternChange = () => {
  const [patternChange, setPatternChange] = useState(false);
  const handlePatternChange = () => {
    setPatternChange(!patternChange);
  };

  return { patternChange, handlePatternChange };
};

const useDestinationHandle = () => {
  const PLACES = ['🏖 하와이', '🏝 발리', '☀️ 몰디브', '🌊 칸쿤'];
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(PLACES[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = value => {
    setOpen(false);
    setSelectedValue(value);
  };

  return { PLACES, open, selectedValue, handleClickOpen, handleClose };
};

const useCalendarHandle = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [onewayDate, setOnewayDate] = useState('');
  let [startDate, endDate] = dateRange;

  return {
    setDateRange,
    startDate,
    endDate,
    onewayDate,
    setOnewayDate,
  };
};

const usePassengerHandle = () => {
  const [passengerOpen, setPassengerOpen] = useState(false);
  const [passengerInfo, setPassengerInfo] = useState({
    count: 1,
    seat: '일반석',
  });

  return {
    passengerOpen,
    setPassengerOpen,
    passengerInfo,
    setPassengerInfo,
  };
};

const Main = () => {
  const navigate = useNavigate();
  const { patternChange, handlePatternChange } = usePatternChange();
  const { PLACES, open, selectedValue, handleClickOpen, handleClose } =
    useDestinationHandle();
  const { setDateRange, startDate, endDate, onewayDate, setOnewayDate } =
    useCalendarHandle();
  const { passengerOpen, setPassengerOpen, passengerInfo, setPassengerInfo } =
    usePassengerHandle();
  const { count, seat } = passengerInfo;

  const dataFetch = () => {
    const DEPARTURE_LOCATION = 'Seoul';
    const destinationMatch = {
      '☀️ 몰디브': 'Maldive',
      '🏝 발리': 'Bali',
      '🏖 하와이': 'Hawaii',
      '🌊 칸쿤': 'Cancun',
    };
    const destinationLocation = destinationMatch[selectedValue];

    const dateMatch = {
      ...(patternChange
        ? {
            departureDate: onewayDate.getDate(),
            returnDate: 0,
          }
        : {
            departureDate: startDate.getDate(),
            returnDate: endDate.getDate(),
          }),
    };

    fetch(
      `http://10.58.5.230:8000/flights?departure_name=${DEPARTURE_LOCATION}&destination_name=${destinationLocation}&departure_date=${dateMatch.departureDate}&return_date=${dateMatch.returnDate}&passenger=${count}&airline=HoneyAirline&airline=MoonAirline`
    );
    // .then(response => console.log(response))

    const storageData = {
      selectedValue,
      departureDate: patternChange ? onewayDate : startDate,
      returnDate: patternChange ? undefined : endDate,
      count,
    };

    localStorage.setItem('recentSearch', JSON.stringify(storageData));

    navigate('/purchase');
  };

  return (
    <S.Container>
      <S.Header>
        <S.NavSpace></S.NavSpace>
        <S.SearchHeader>
          <div>
            <S.Round
              changePattern={patternChange}
              onClick={handlePatternChange}
            >
              왕복
            </S.Round>
            <S.OneWay
              changePattern={patternChange}
              onClick={handlePatternChange}
            >
              편도
            </S.OneWay>
          </div>
          <S.ReservationList
            onClick={() => {
              navigate('/purchase');
            }}
          >
            <span>항공권 예약내역 </span>
            <span>
              <i className="fa-solid fa-circle-chevron-right"></i>
            </span>
          </S.ReservationList>
        </S.SearchHeader>
        <S.SearchBar>
          <S.Schedule onClick={handleClickOpen}>
            <span>서울 (SEL) </span>
            <i className="fa-solid fa-arrows-rotate"></i>
            <span>{selectedValue}</span>
          </S.Schedule>

          <Destination
            selectedValue={selectedValue}
            open={open}
            onClose={handleClose}
            PLACES={PLACES}
          />

          <S.Date>
            <i className="fa-regular fa-calendar"> </i>

            <Calendar
              setDateRange={setDateRange}
              startDate={startDate}
              endDate={endDate}
              patternChange={patternChange}
              onewayDate={onewayDate}
              setOnewayDate={setOnewayDate}
            />
          </S.Date>

          <S.Passenger
            onClick={() => {
              setPassengerOpen(!passengerOpen);
            }}
          >
            <div>
              <i className="fa-solid fa-user-large"> </i>
              <span>
                승객 {count} 명, {seat}
              </span>
            </div>
            <i className="fa-solid fa-angle-down"></i>
          </S.Passenger>

          <Passenger
            shown={passengerOpen}
            close={() => {
              setPassengerOpen(false);
            }}
            count={count}
            passengerInfo={passengerInfo}
            setPassengerInfo={setPassengerInfo}
          ></Passenger>

          <S.SearchBtn onClick={dataFetch}>검색</S.SearchBtn>
        </S.SearchBar>
      </S.Header>
    </S.Container>
  );
};

export default Main;
