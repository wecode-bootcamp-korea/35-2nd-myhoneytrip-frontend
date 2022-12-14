import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Destination from './component/Destination/Destination';
import Calendar from './component/Calendar/Calendar';
import Passenger from './component/Passenger/Passenger';

import Carousel from './component/Carousel/Carousel';
import RecentSearch from './component/RecentSearch/RecentSearch';
import Recommend from './component/Recommend/Recommend';

import S from './Styled.Main';

const PLACES = ['π νμμ΄', 'π λ°λ¦¬', 'βοΈ λͺ°λλΈ', 'π μΉΈμΏ€'];
const DEPARTURE_LOCATION = 'Seoul';

const Main = () => {
  const navigate = useNavigate();

  const [patternChange, setPatternChange] = useState(false);
  const handlePatternChange = () => {
    setPatternChange(!patternChange);
  };

  const [destinationOpen, setDestinationOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(PLACES[1]);

  const handleDestinationOpen = () => {
    setDestinationOpen(true);
  };

  const handleDestinationClose = value => {
    setDestinationOpen(false);
    setSelectedValue(value);
  };

  const [dateRange, setDateRange] = useState([null, null]);
  const [onewayDate, setOnewayDate] = useState('');
  const [startDate, endDate] = dateRange;

  const [passengerOpen, setPassengerOpen] = useState(false);
  const handlePassengerOpen = () => setPassengerOpen(true);
  const handlePassengerClose = () => setPassengerOpen(false);
  const [passengerInfo, setPassengerInfo] = useState({
    count: 1,
    seat: 'μΌλ°μ',
  });
  const { count, seat } = passengerInfo;

  const dataFetch = () => {
    const destinationMatch = {
      'βοΈ λͺ°λλΈ': 'Maldive',
      'π λ°λ¦¬': 'Bali',
      'π νμμ΄': 'Hawaii',
      'π μΉΈμΏ€': 'Cancun',
    };
    const destinationLocation = destinationMatch[selectedValue];

    const loadingDataMatch = {
      'βοΈ λͺ°λλΈ': ['MLE', 'λͺ°λλΈ'],
      'π λ°λ¦¬': ['DPS', 'λ°λ¦¬'],
      'π νμμ΄': ['HNL', 'νμμ΄'],
      'π μΉΈμΏ€': ['CUN', 'μΉΈμΏ€'],
    };

    const loadingLocationCode = loadingDataMatch[selectedValue];

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

    const localstorageData = {
      destination: selectedValue,
      departureDate: patternChange ? onewayDate : startDate,
      returnDate: patternChange ? undefined : endDate,
      passengerCount: count,
    };

    const newSearchArray = [...searchArray, localstorageData];
    setSearchArray(newSearchArray);
    localStorage.setItem('recentData', JSON.stringify(newSearchArray));

    navigate(
      `/reservation?departure_name=${DEPARTURE_LOCATION}&destination_name=${destinationLocation}&departure_date=${dateMatch.departureDate}&return_date=${dateMatch.returnDate}&passenger=${count}`,
      {
        state: {
          arrive_name: loadingLocationCode[1],
          arrive_name_code: loadingLocationCode[0],
          departure_day: dateMatch.departureDate,
          arrive_day: dateMatch.returnDate,
        },
      }
    );
  };

  const savedData = JSON.parse(localStorage.getItem('recentData'));
  const [searchArray, setSearchArray] = useState(savedData ? savedData : []);

  const goToCheck = () => {
    navigate('/checkreservation');
  };

  return (
    <S.Container>
      <S.Header>
        <S.NavSpace></S.NavSpace>
        <S.HeaderContainer>
          <S.SearchHeader>
            <div>
              <S.Round
                changePattern={patternChange}
                onClick={handlePatternChange}
              >
                μλ³΅
              </S.Round>
              <S.OneWay
                changePattern={patternChange}
                onClick={handlePatternChange}
              >
                νΈλ
              </S.OneWay>
            </div>
            <S.ReservationList>
              <span onClick={goToCheck}>ν­κ³΅κΆ μμ½λ΄μ­ </span>
              <span>
                <i className="fa-solid fa-circle-chevron-right"></i>
              </span>
            </S.ReservationList>
          </S.SearchHeader>
          <S.SearchBar>
            <S.ScheduleContainer>
              <S.Schedule onClick={handleDestinationOpen}>
                <span>μμΈ (SEL) </span>
                <i className="fa-solid fa-arrows-rotate"></i>
                <span>{selectedValue}</span>
              </S.Schedule>
              <Destination
                selectedValue={selectedValue}
                open={destinationOpen}
                onClose={handleDestinationClose}
                PLACES={PLACES}
              />
            </S.ScheduleContainer>

            <S.DateContainer>
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
            </S.DateContainer>

            <S.PassengerContainer>
              <S.Passenger onClick={handlePassengerOpen}>
                <div>
                  <i className="fa-solid fa-user-large"> </i>
                  <span>
                    μΉκ° {count} λͺ, {seat}
                  </span>
                </div>
                <i className="fa-solid fa-angle-down"></i>
              </S.Passenger>
              <Passenger
                open={passengerOpen}
                onClose={handlePassengerClose}
                count={count}
                passengerInfo={passengerInfo}
                setPassengerInfo={setPassengerInfo}
              ></Passenger>
            </S.PassengerContainer>

            <S.SearchBtn onClick={dataFetch}>κ²μ</S.SearchBtn>
          </S.SearchBar>
        </S.HeaderContainer>
      </S.Header>
      <S.BodyContainer>
        {savedData ? <RecentSearch></RecentSearch> : ''}
        <Carousel />
        <Recommend></Recommend>
      </S.BodyContainer>
    </S.Container>
  );
};

export default Main;
