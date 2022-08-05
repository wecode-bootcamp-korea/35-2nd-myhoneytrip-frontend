import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import FlightList from '../../components/ReservationBox/FlightList/FlightList';
import styled, { css } from 'styled-components';
import Loading from '../Loading/Loading';

const Reservation = () => {
  const [flightData, setFlightData] = useState([]);
  const { departure_list, return_list } = flightData;

  const location = useLocation();
  const queryString = location.search;

  const loadingData = location.state;

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://35.90.169.104:8000/flights${queryString}`)
        .then(res => res.json())
        .then(data => setFlightData(data));
    }, 3000);
    // fetch('/data/Reservation/Flight_data.json')
  }, [queryString]);

  const isData = Object.keys(flightData).length !== 0;
  if (!isData) return <Loading loadingData={loadingData} />;
  // if (!isData) return <>로딩중</>;

  return (
    <ReservationFlight>
      <FlightList
        departureList={departure_list}
        returnList={return_list}
        queryString={queryString}
        setFlightData={setFlightData}
      />
    </ReservationFlight>
  );
};

export default Reservation;

const flexDirectionColumn = css`
  display: flex;
  flex-direction: column;
  padding-top: 60px;
`;

const ReservationFlight = styled.div`
  ${flexDirectionColumn}
  align-items: center;
  width: 100vw;
  background-color: #fff;
`;
