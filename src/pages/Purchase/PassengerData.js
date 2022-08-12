import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import TableData from './TableData';
import PurchasePrice from './PurchasePrice';
import S from './Styled.PassengerData';

const PassengerData = () => {
  const [ticketData, setTicketData] = useState({});
  const [bookerData, setBookerData] = useState({
    bookerName: '',
    id: '',
    mail: '',
    firstPhone: '010',
    frontNumber: '',
    backNumber: '',
  });
  const [passengerData, setPassengerData] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setTicketData(location.state);
  }, [location.state]);

  if (Object.keys(ticketData).length === 0) return <>Loading...</>;

  const { Departure_Data, Arrive_Data } = ticketData;

  const { bookerName, id, mail, firstPhone, frontNumber, backNumber } =
    bookerData;

  const handleInput = ({ target }) => {
    const { name, value } = target;
    setBookerData({ ...bookerData, [name]: value });
  };

  const handlePhone = e => {
    if (e.target.value.length > e.target.maxLength)
      e.target.value = e.target.value.slice(0, e.target.maxLength);
    e.target.value = e.target.value
      .replace(/[^0-9.]/g, '')
      .replace(/(\..*)\./g, '$1');
  };
  const handleEmail = e => {
    e.target.value = e.target.value.replace(!/^[a-z0-9_-]{4,20}$/, '');
  };
  const overTen = num => {
    return num < 10 ? '0' + num : num;
  };

  const PassengerDataArr = [];

  Object.values(passengerData).map(object =>
    PassengerDataArr.push({
      first_name: object.first_name,
      last_name: object.last_name,
      gender: object.gender,
      birthday:
        object.year + '-' + overTen(object.month) + '-' + overTen(object.day),
    })
  );

  const isValid =
    bookerName.value !== 0 &&
    id.length !== 0 &&
    mail.length !== 0 &&
    firstPhone.length !== 0 &&
    frontNumber.length === 4 &&
    backNumber.length === 4 &&
    PassengerDataArr.length === Number(Departure_Data.passengers);

  const BookerData = {
    BookerName: bookerName,
    BookerEmail: id + '@' + mail,
    BookerPhone: firstPhone + frontNumber + backNumber,
  };

  const { BookerName, BookerEmail, BookerPhone } = BookerData;

  const fetchData = () => {
    fetch('http://54.180.2.226:8001/bookings', {
      method: 'POST',
      headers: { Authorization: localStorage.getItem('token') },
      body: JSON.stringify({
        booker_name: BookerName,
        booker_email: BookerEmail,
        booker_mobile_number: BookerPhone,
        passengers: PassengerDataArr,
        flight_detail_id: [
          Departure_Data.flight_detail_id,
          Arrive_Data.flight_detail_id,
        ],
      }),
    })
      .then(res => res.json())
      .then(
        data =>
          data.message === 'SUCCESS' &&
          (alert('예약이 완료되었습니다.'), navigate('/'))
      );
  };

  return (
    <S.PassengerReservation>
      <S.Reservation>
        <S.DataLeft>
          <S.Ticket>
            <S.TicketTitle>
              <div>
                <p>{Departure_Data.departure_location_korean}</p>{' '}
                <span>{Departure_Data.departure_airport_code}</span>
              </div>
              <div>
                <img src="/images/Purchase/twoway_arrow.svg" alt="화살표" />
                <span>
                  {overTen(Departure_Data.month)}월{' '}
                  {overTen(Departure_Data.date)}일 -{' '}
                  {overTen(Arrive_Data.month)}월 {overTen(Arrive_Data.date)}일
                </span>
              </div>
              <div>
                <p>{Departure_Data.destination_location_korean}</p>{' '}
                <span>{Departure_Data.destination_airport_code}</span>
              </div>
            </S.TicketTitle>
            <S.TicketTitleInfo>
              <img src={Departure_Data.airline_url} alt="항공사 이미지" />
              <span>{Departure_Data.airline}</span>
            </S.TicketTitleInfo>
            <S.TicketTitleInfo>
              <p>운항종류</p>
              <span>왕복</span>
            </S.TicketTitleInfo>
            <S.TicketTitleInfo>
              <p>승객</p>
              <span>{Departure_Data.passengers}명</span>
            </S.TicketTitleInfo>
          </S.Ticket>
          <S.AirInfo>
            <S.AirInfoTop>
              <colgroup>
                <col style={{ width: '10%' }} />
                <col style={{ width: '20%' }} />
                <col style={{ width: '20%' }} />
                <col style={{ width: '12%' }} />
                <col style={{ width: '12%' }} />
                <col style={{ width: '9%' }} />
              </colgroup>
              <thead>
                <tr>
                  <th colSpan="2">항공편</th>
                  <th>여정</th>
                  <th>출발</th>
                  <th>도착</th>
                  <th>좌석</th>
                </tr>
              </thead>
              <tbody>
                <TableData data={Departure_Data} overTen={overTen} />
                <TableData data={Arrive_Data} overTen={overTen} />
              </tbody>
            </S.AirInfoTop>
          </S.AirInfo>
          <S.CheckNotice>
            <ul>
              <li>시간은 현지 시간으로 계산된 시간입니다.</li>
              <li>
                공동운항편 탑승수속은 실제 운항항공사 카운터를 이용해 주시기
                바라며, 규정에 따라 탑승 수속 마감시간이 상이할 수 있으니 반드시
                확인 바랍니다.
              </li>
              <li>
                대기예약시 모든 여정이 확약되어야만, 항공권 구매가 가능합니다.
                미확약시 이용이 불가능합니다.
              </li>
            </ul>
          </S.CheckNotice>
          <S.InfoTitle>예약자 정보</S.InfoTitle>
          <S.BookerInfo onChange={handleInput}>
            <S.BookerName>
              <label>예약자 이름</label>
              <input
                type="text"
                name="bookerName"
                defaultValue={bookerName}
                placeholder="이름을 입력해주세요"
                autoComplete="off"
              />
            </S.BookerName>
            <S.BookerEmail>
              <label htmlFor="mails">이메일 주소</label>
              <input
                type="text"
                name="id"
                defaultValue={id}
                autoComplete="off"
                onChange={handleEmail}
              />{' '}
              <span>@</span>
              <input
                type="text"
                name="mail"
                value={!mail ? ' ' : mail}
                autoComplete="off"
                onChange={handleInput}
              />
              <select name="mail" defaultValue={mail}>
                <option value="">직접입력</option>
                <option value="hanmail.net">hanmail.net</option>
                <option value="naver.com">naver.com</option>
                <option value="nate.com">nate.com</option>
                <option value="gmail.com">gmail.com</option>
              </select>
            </S.BookerEmail>
            <S.BookerPhone>
              <label htmlFor="phone">휴대전화 번호</label>
              <select name="firstPhone" defaultValue={firstPhone}>
                <option value="010">010</option>
                <option value="011">011</option>
                <option value="016">016</option>
                <option value="017">017</option>
                <option value="018">018</option>
                <option value="019">019</option>
              </select>
              <input
                type="text"
                name="frontNumber"
                defaultValue={frontNumber}
                onInput={handlePhone}
                title="휴대전화 입력"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={4}
                autoComplete="off"
              />
              <input
                type="text"
                name="backNumber"
                defaultValue={backNumber}
                onInput={handlePhone}
                title="휴대전화 입력"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={4}
                autoComplete="off"
              />
            </S.BookerPhone>
            <p>
              예약자 정보는 항공사 스케줄 변동 등의 사유로 기재되오니 즉시
              연락이 가능한 연락처 기재 부탁드립니다.
            </p>
            <p>
              연락처 오기재로 발생되는 불이익에 대해 당사는 책임지지 않사오니
              이점 유의하시기 바랍니다.
            </p>
          </S.BookerInfo>
          <S.BookingNotice>
            <ul>
              <li>
                <span>
                  탑승객의 영문이름과 생년월일은 여권과 반드시 동일해야 합니다.
                  (영문이름은 특수문자 및 공백 제외한 영문만 입력 가능합니다)
                  <br />
                  예약완료 후 잘못된 정보 입력 시에는 수정이 불가하며, 출국하실
                  수 없습니다.
                </span>
              </li>
              <li>
                소아는 출발일 기준 만 2세이상~만12세미만, 유아는 출발일로부터
                만2세 미만입니다.
              </li>
              <li>
                귀국일 기준으로 만12세 이상인 소아와 만2세가 넘는 유아는 추가
                차액 발생하므로 항공예약상담으로 문의 바랍니다.
              </li>
              <li>
                보호자 없이 혼자 여행하는 만12세~18세 미만 청소년의 경우
                운송항공사 규정에 따라 탑승이 제한될 수 있습니다.
              </li>
            </ul>
          </S.BookingNotice>
          <S.InfoTitle>탑승객 정보</S.InfoTitle>
          {[...Array(Number(Departure_Data.passengers))].map((n, idx) => {
            const handlePassengerData = e => {
              const { name, value } = e.target;
              setPassengerData({
                ...passengerData,
                [idx]: { ...passengerData[idx], [name]: value },
              });
            };

            return (
              <S.PassengerInfo key={idx} onChange={handlePassengerData}>
                <S.PassengerDataTitle>탑승객 {idx + 1}</S.PassengerDataTitle>
                <S.PassengerName>
                  <S.PassengerFirstName>
                    {' '}
                    <label htmlFor="fistName">영문 성</label>
                    <input
                      type="text"
                      name="first_name"
                      placeholder="예) KIM"
                      autoComplete="off"
                      pattern="/^[A-Z]+$/"
                    />
                  </S.PassengerFirstName>
                  <S.PassengerLastName>
                    {' '}
                    <label htmlFor="lastName">영문 이름</label>
                    <input
                      type="text"
                      name="last_name"
                      placeholder="예) IK HYUN"
                      autoComplete="off"
                      pattern="/^[A-Z]+$/"
                    />
                  </S.PassengerLastName>
                </S.PassengerName>
                <S.PassengerSex>
                  <label htmlFor="gender">성별</label>
                  <div>
                    <span>
                      <input type="radio" name="gender" value="male" />
                      <label htmlFor="male">남성</label>
                    </span>
                    <span>
                      <input type="radio" name="gender" value="female" />
                      <label htmlFor="female">여성</label>
                    </span>
                  </div>
                </S.PassengerSex>
                <S.PassengerBirth>
                  <label htmlFor="phone">생년월일</label>
                  <input
                    type="text"
                    name="year"
                    onInput={handlePhone}
                    title="연도 입력"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={4}
                    placeholder="예) 2020"
                  />
                  <select name="month" defaultValue="">
                    <option value="월">월</option>
                    {[...Array(12)].map((n, idx) => {
                      return (
                        <option key={idx} value={idx + 1}>
                          {idx + 1}
                        </option>
                      );
                    })}
                  </select>
                  <select name="day" defaultValue="">
                    <option value="일">일</option>
                    {[...Array(31)].map((n, idx) => {
                      return (
                        <option key={idx} value={idx + 1}>
                          {idx + 1}
                        </option>
                      );
                    })}
                  </select>
                </S.PassengerBirth>
              </S.PassengerInfo>
            );
          })}
        </S.DataLeft>
        <S.PurchaseRight>
          <PurchasePrice
            Departure_Data={Departure_Data}
            Arrive_Data={Arrive_Data}
          />
          <S.PurchaseNotice>
            <ul>
              <li>
                상기 요금은 유류할증료 및 제세공과금 포함한 총액요금이며,
                유류할증료 및 제세공과금은 유가와 환율에 따라 변동 가능합니다.
              </li>
              <li>
                <span>
                  유류할증료 및 제세공과금은 유가와 환율적용에 따라 발권시
                  변동될 수 있습니다. <br />
                  경우에 따라 일부 항공사나 일부 구간의 유류할증료 및
                  제세공과금이 조회가 안될 수 있습니다.
                </span>
              </li>
            </ul>
          </S.PurchaseNotice>
          <S.PurchaseButton>
            {/* <button disabled={!isValid}>예약하기</button> */}
            <button disabled={!isValid} onClick={fetchData}>
              결제하기
            </button>
          </S.PurchaseButton>
        </S.PurchaseRight>
      </S.Reservation>
    </S.PassengerReservation>
  );
};

export default PassengerData;
