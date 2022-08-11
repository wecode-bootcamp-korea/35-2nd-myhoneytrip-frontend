import React from 'react';

const TableData = ({ data, overTen }) => {
  const {
    departure_location_korean,
    departure_airport_code,
    destination_location_korean,
    month,
    date,
    flight_route_code,
    day,
    departure_time,
    arrival_time,
    passengers,
  } = data;
  const day_korean = ['일', '월', '화', '수', '목', '금', '토'];
  return (
    <tr>
      <td>{departure_airport_code === 'SEL' ? '가는날' : '오는날'}</td>
      <td>{flight_route_code}편</td>
      <td>
        {departure_location_korean} - {destination_location_korean}
      </td>
      <td>
        {overTen(month)}월 {overTen(date)}일 ({day_korean[day]})
        <br />
        {departure_time}
      </td>
      <td>
        {overTen(month)}월 {overTen(date)}일 ({day_korean[day]})
        <br />
        {arrival_time}
      </td>
      <td>{passengers}석</td>
    </tr>
  );
};

export default TableData;
