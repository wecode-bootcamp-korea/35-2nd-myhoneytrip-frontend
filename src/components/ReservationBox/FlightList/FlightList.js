import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TicketBox from '../TicketBox/TicketBox';
import CheckBox from '../CheckBox/CheckBox';
import S from './Styled.FlightList';

const FlightList = ({
  departureList,
  returnList,
  queryString,
  setFlightData,
}) => {
  const navigate = useNavigate();
  const [sendingData, setSendingData] = useState([]);

  const savePurchase = ticket => {
    navigate({ state: ticket });
  };

  const goToPurchase = ticket => {
    alert('선택한 항공편 예약페이지로 이동합니다.');
    navigate('/purchase', { state: ticket });
  };

  // select dropdown sort 구현 실패

  // const selectFetch = () => {
  //   fetch(`/data/Reservation/Flight_data.json${fastest_time}`)
  //     // fetch(`${API}/${queryString}${fastest_time}`)
  //     .then(res => res.json())
  //     .then(data => setFlightData(data));
  // };

  // const sortLowPrice = () => {
  //   const rowPriceString = 'sort_method=price';
  //   handleURL(rowPriceString);
  // };

  // const fastestTime = () => {
  //   const fastestTimeString = 'sort_method=fastest_time';
  //   handleURL(fastestTimeString);
  // };

  return (
    <S.FlightListInfo>
      <S.SideSelectAirplanes>
        <CheckBox queryString={queryString} setFlightData={setFlightData} />
      </S.SideSelectAirplanes>
      {returnList ? (
        <S.ReservationInfo>
          <S.ReservationInfoContainer>
            {/* <S.SideSelectAirplanes></S.SideSelectAirplanes> */}
            <S.MainSelect>
              <label>가는편</label>
              <S.SoartingContainer>
                <S.SearchResult>
                  검색 결과 총 {departureList.length}개
                  <p>티켓 요금에 세금 및 수수료가 모두 포함 되어있습니다.</p>
                </S.SearchResult>
                <S.SoartingSelectBox>
                  <select name="ticket">
                    <option name="lowPrice" value="낮은 가격순">
                      낮은 가격순
                    </option>
                    <option name="fastestTime" value="출발 시간 빠른순">
                      출발 시간 빠른순
                    </option>
                  </select>
                </S.SoartingSelectBox>
              </S.SoartingContainer>
              <S.TicketBoxContainer>
                {departureList.length === 0 ? (
                  <S.ticketNone>
                    <p>🥲</p>
                    일치하는 결과가 없습니다.
                  </S.ticketNone>
                ) : (
                  departureList.map(props => {
                    return (
                      <TicketBox
                        key={props.id}
                        ticket={props}
                        savePurchase={savePurchase}
                        goToPurchase={goToPurchase}
                        sendingData={sendingData}
                        setSendingData={setSendingData}
                      />
                    );
                  })
                )}
              </S.TicketBoxContainer>
            </S.MainSelect>
          </S.ReservationInfoContainer>
          <S.ReservationInfoContainer>
            {/* <S.SideSelectAirplanes> */}
            {/* <CheckBox
                queryString={queryString}
                setFlightData={setFlightData}
              /> */}
            {/* </S.SideSelectAirplanes> */}
            <S.MainSelect>
              <label>오는편</label>

              <S.SoartingContainer>
                <S.SearchResult>
                  검색 결과 총 {returnList.length}개
                  <p>티켓 요금에 세금 및 수수료가 모두 포함 되어있습니다.</p>
                </S.SearchResult>
                <S.SoartingSelectBox>
                  <select name="ticket">
                    <option name="lowPrice" value="낮은 가격순">
                      낮은 가격순
                    </option>
                    <option name="fastestTime" value="출발 시간 빠른순">
                      출발 시간 빠른순
                    </option>
                  </select>
                </S.SoartingSelectBox>
              </S.SoartingContainer>
              <S.TicketBoxContainer>
                {departureList.length === 0 ? (
                  <S.ticketNone>
                    <p>🥲</p>
                    일치하는 결과가 없습니다.
                  </S.ticketNone>
                ) : (
                  returnList.map(props => {
                    return (
                      <TicketBox
                        key={props.id}
                        ticket={props}
                        savePurchase
                        goToPurchase={goToPurchase}
                        sendingData={sendingData}
                        setSendingData={setSendingData}
                      />
                    );
                  })
                )}
              </S.TicketBoxContainer>
            </S.MainSelect>
          </S.ReservationInfoContainer>
        </S.ReservationInfo>
      ) : (
        <>
          <label>가는편</label>
          <S.ReservationInfoContainer>
            <S.SideSelectAirplanes>
              <CheckBox
                queryString={queryString}
                setFlightData={setFlightData}
              />
            </S.SideSelectAirplanes>
            <S.MainSelect>
              <S.SoartingContainer>
                <S.SearchResult>
                  검색 결과 총 {departureList.length}개
                  <p>티켓 요금에 세금 및 수수료가 모두 포함 되어있습니다.</p>
                </S.SearchResult>
                <S.SoartingSelectBox>
                  <select name="ticket">
                    <option name="lowPrice" value="낮은 가격순">
                      낮은 가격순
                    </option>
                    <option name="fastestTime" value="출발 시간 빠른순">
                      출발 시간 빠른순
                    </option>
                  </select>
                </S.SoartingSelectBox>
              </S.SoartingContainer>
              <S.TicketBoxContainer>
                {departureList.map(props => {
                  return (
                    <TicketBox
                      key={props.id}
                      ticket={props}
                      goToPurchase={goToPurchase}
                      sendingData={sendingData}
                      setSendingData={setSendingData}
                    />
                  );
                })}
              </S.TicketBoxContainer>
            </S.MainSelect>
          </S.ReservationInfoContainer>
        </>
      )}
    </S.FlightListInfo>
  );
};

export default FlightList;
