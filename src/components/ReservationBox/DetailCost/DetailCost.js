import React from 'react';
import S from './Styled.DetailCost';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import styled from '@emotion/styled';

const DetailCost = ({ flightData }) => {
  const {
    flight_detail_id,
    departure_airport_code,
    destination_airport_code,
    month,
    date,
    airline,
    flight_route_code,
    departure_time,
    arrival_time,
    price,
    flight_time,
    passengers,
    departure_location_korean,
    destination_location_korean,
  } = flightData;

  return (
    <S.ShowDetail key={flight_detail_id}>
      <S.CostDetailView>
        <S.CostDetail>
          <S.DetailBoxTop>
            <S.DetailBoxTopInfo>
              <S.TopInfoDeparture>비행편 안내</S.TopInfoDeparture>
              <S.TopInfoConstant>
                {departure_location_korean} ({departure_airport_code})
                <img
                  src="/images/Reservation/oneway_arrow_short.svg"
                  alt="arrow"
                />
                {destination_location_korean} ({destination_airport_code})
              </S.TopInfoConstant>
            </S.DetailBoxTopInfo>
            <S.TopInfoTravelTime>약 {flight_time}시간 20분</S.TopInfoTravelTime>
          </S.DetailBoxTop>
        </S.CostDetail>
        <S.DetailBoxMiddle>
          <S.DetailBoxMiddleFlight>
            {airline} {flight_route_code}
          </S.DetailBoxMiddleFlight>
          <S.DetailBoxMiddleFlightDay>
            {month}월 {date}일
            <img src="/images/Reservation/departure_arrived.svg" alt="arrow" />
            <div>
              <p>
                <span>{departure_time}</span>
                {departure_location_korean} ({departure_airport_code})
              </p>
              <p>약 {flight_time}시간 20분</p>
              <p>
                <span>{arrival_time}</span>
                {destination_location_korean} ({destination_airport_code})
              </p>
            </div>
          </S.DetailBoxMiddleFlightDay>
        </S.DetailBoxMiddle>
      </S.CostDetailView>
      <S.CostValueBox>
        <TableContainer>
          <TableData aria-label="simple table">
            <TableHead>
              <TableRow>
                <TabeleCellTitle>상세요금</TabeleCellTitle>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRowLine>
                <TabeleCellSubTitle>성인</TabeleCellSubTitle>
                <TabeleCellSubTitle align="left">항공요금</TabeleCellSubTitle>
                <TabeleCellSubTitle align="left">유류할증료</TabeleCellSubTitle>
                <TabeleCellSubTitle align="left">제세공과금</TabeleCellSubTitle>
                <TabeleCellSubTitle align="left">발권수수료</TabeleCellSubTitle>
                <TabeleCellSubTitle align="right">합계</TabeleCellSubTitle>
              </TableRowLine>
              <TableRowLine>
                <TabeleCellSubTitle>1인</TabeleCellSubTitle>
                <TableCell align="left">
                  {parseInt(price * 0.6).toLocaleString()}원
                </TableCell>
                <TableCell align="left">
                  {parseInt(price * 0.3).toLocaleString()}원
                </TableCell>
                <TableCell align="left">
                  {parseInt(price * 0.1).toLocaleString()}원
                </TableCell>
                <TableCell align="left">무료</TableCell>
                <TableCell align="right">
                  {parseInt(price).toLocaleString()} 원
                </TableCell>
              </TableRowLine>
              <TableRow>
                <TableCell colSpan="5">총 합계</TableCell>
                <TabeleCellEnd align="right">
                  {parseInt(price * passengers).toLocaleString()} 원
                </TabeleCellEnd>
              </TableRow>
            </TableBody>
          </TableData>
        </TableContainer>
      </S.CostValueBox>
    </S.ShowDetail>
  );
};

export default DetailCost;

const TableData = styled(Table)({
  borderBottom: '3px solid #dfdfdf',
  marginBottom: '20px',
});
const TabeleCellTitle = styled(TableCell)({
  borderBottom: 'none',
  fontWeight: 600,
  fontSize: '16px',
});

const TabeleCellSubTitle = styled(TableCell)({
  fontWeight: 400,
  fontSize: '13px',
});

const TabeleCellEnd = styled(TableCell)({
  fontWeight: 700,
  fontSize: '22px',
});

const TableRowLine = styled(TableRow)({
  borderTop: '1px solid #dfdfdf',
});
