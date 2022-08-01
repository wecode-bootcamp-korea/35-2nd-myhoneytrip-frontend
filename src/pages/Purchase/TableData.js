import React from 'react';

const TableData = ({ data, overTen }) => {
  const {
    id,
    AirLine,
    Departure,
    Departure_time,
    Arrive,
    Arrive_time,
    Month,
    Date,
    Day,
    person,
  } = data;
  return (
    <tr>
      <td>{id === 1 ? '가는날' : '오는날'}</td>
      <td>{AirLine.AirLineCode}편</td>
      <td>
        {Departure.name} - {Arrive.name}
      </td>
      <td>
        {overTen(Month)}월 {overTen(Date)}일 ({Day})
        <br />
        {overTen(Departure_time.hour)}:{overTen(Departure_time.minute)}
      </td>
      <td>
        {overTen(Month)}월 {overTen(Date)}일 ({Day})
        <br />
        {overTen(Arrive_time.hour)}:{overTen(Arrive_time.minute)}
      </td>
      <td>{person}석</td>
    </tr>
  );
};

export default TableData;
