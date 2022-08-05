import React, { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
// import API from '../../../Config';

const CheckBox = ({ queryString, setFlightData }) => {
  const [isChecked, setIsChecked] = useState({
    HoneyAirline: true,
    MoonAirline: true,
  });

  const [searchParams, setSearchParams] = useSearchParams();

  const checkboxFetch = useCallback(() => {
    if (isChecked.HoneyAirline === false && isChecked.MoonAirline === false) {
      searchParams.delete('airline');
      searchParams.append('airline', null); // back에서 데이터를 전부 보내주니까 null 처리
      setSearchParams(searchParams);
    } else if (
      isChecked.HoneyAirline === true &&
      isChecked.MoonAirline === false
    ) {
      searchParams.delete('airline');
      searchParams.append('airline', 'HoneyAirline');
      setSearchParams(searchParams);
    } else if (
      isChecked.HoneyAirline === false &&
      isChecked.MoonAirline === true
    ) {
      searchParams.delete('airline');
      searchParams.append('airline', 'MoonAirline');
      setSearchParams(searchParams);
    } else {
      searchParams.delete('airline');
      searchParams.append('airline', 'MoonAirline');
      searchParams.append('airline', 'HoneyAirline');
      setSearchParams(searchParams);
    }
  }, [
    isChecked.HoneyAirline,
    isChecked.MoonAirline,
    searchParams,
    setSearchParams,
  ]);

  // 2차 시도

  // navigate(withSearchParams(queryString));
  // if (isChecked.HoneyAirline === false && isChecked.MoonAirline === false) {
  //   navigate(
  //     searchParams(`/reservation${queryString}`, {
  //       remove: ['airline'],
  //     })
  //   );
  // } else if (
  //   isChecked.HoneyAirline === true &&
  //   isChecked.MoonAirline === false
  // ) {
  //   navigate(
  //     withSearchParams(`/reservation${queryString}`, {
  //       set: { airline: 'HoneyAirline' },
  //     })
  //   );
  // } else if (
  //   isChecked.HoneyAirline === false &&
  //   isChecked.MoonAirline === true
  // ) {
  //   navigate(
  //     withSearchParams(
  //       '/reservation',
  //       { remove: ['HoneyAirline'] },
  //       { set: { airline: 'MoonAirline' } }
  //     )
  //   );
  // } else {
  //   navigate(
  //     withSearchParams(`/reservation${queryString}`, { skipAll: true })
  //   );
  // }

  // 1차 시도

  // fetch(`/data/Reservation/Flight_data.json${queryString}`)
  //   // fetch(`http://10.58.0.252:8000/flights${queryString}`)
  //   .then(res => res.json())
  //   .then(data => setFlightData(data));

  // const HoneyAirline =
  //   isChecked.HoneyAirline === true
  //     ? navigate(`${queryString}&airline=HoneyAirline`)
  //     : navigate(`${queryString}`);
  // const MoonAirline =
  //   isChecked.MoonAirline === true
  //     ? navigate(`${queryString}&airline=MoonAirline`)
  //     : navigate(`${queryString}`);

  useEffect(() => {
    checkboxFetch();
  }, [checkboxFetch, isChecked]);

  const handleIsChecked = e => {
    const { name, checked } = e.target;
    setIsChecked({ ...isChecked, [name]: checked });
  };

  return (
    <>
      <StyledAirlines>
        <p>항공사</p>
        <StyledInputData>
          <StyledInput
            type="checkbox"
            name={AIRLINE_DATA[0].airline}
            checked={isChecked.HoneyAirline}
            onChange={e => handleIsChecked(e)}
          />
          <StyledDiv>HoneyAirline</StyledDiv>
        </StyledInputData>
        <StyledInputData>
          <StyledInput
            type="checkbox"
            name={AIRLINE_DATA[1].airline}
            checked={isChecked.MoonAirline}
            onChange={e => handleIsChecked(e)}
          />
          <StyledDiv>MoonAirline</StyledDiv>
        </StyledInputData>
        {/* {AIRLINE_DATA.map(airline => {
          return (
            <StyledInputData key={airline.id}>
              <StyledInput
                type="checkbox"
                name={airline}
                checked={isChecked}
                onChange={() =>
                  isChecked === true ? setIsChecked(false) : setIsChecked(true)
                }
                // ischecked={isChecked}
                // setIsChecked={setIsChecked}
                // defaultChecked
              />
              <StyledDiv>{airline.airline_name}</StyledDiv>
            </StyledInputData>
          );
        })} */}
      </StyledAirlines>

      {/* TICKET_DATA checkbox dummy */}

      {TICKET_DATA.map(timetable => {
        return (
          <StyledAirlines key={timetable.id}>
            <p>{timetable.title}</p>
            {timetable.time.map((timeline, i) => {
              return (
                <StyledInputData key={i}>
                  <StyledInput type="checkbox" defaultChecked />
                  <StyledDiv>{timeline}</StyledDiv>
                </StyledInputData>
              );
            })}
          </StyledAirlines>
        );
      })}
    </>
  );
};
export default CheckBox;

const StyledAirlines = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  border-top: 1px solid #d3d3d3;
  user-select: none;
  color: #1d1d1d;
  p {
    margin: 20px 0;
  }
  span {
    font-size: 14px;
    font-weight: 200;
    margin: 10px 0;
  }
`;

const StyledInputData = styled.div`
  display: flex;
`;

const StyledInput = styled.input`
  appearance: none;
  margin-right: 12px;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  width: 20px;
  height: 20px;

  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #e57fca;
  }
`;

const StyledDiv = styled.div`
  line-height: 2;
  font-weight: 500;
  font-size: 16px;
`;

const AIRLINE_DATA = [
  {
    id: 1,
    airline: 'HoneyAirline',
    ischecked: true,
  },
  {
    id: 2,
    airline: 'MoonAirline',
    ischecked: true,
  },
];

const TICKET_DATA = [
  {
    id: 1,
    title: '출발 시간',
    time: [
      '새벽 00:00~06:00',
      '오전 06:00~12:00',
      '오후 12:00~18:00',
      '야간 18:00~24:00',
    ],
  },
  {
    id: 2,
    title: '도착 시간',
    time: [
      '새벽 00:00~06:00',
      '오전 06:00~12:00',
      '오후 12:00~18:00',
      '야간 18:00~24:00',
    ],
  },
];
