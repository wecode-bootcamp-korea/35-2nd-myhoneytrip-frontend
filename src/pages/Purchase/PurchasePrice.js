import React from 'react';
import S from './Styled.PurchasePrice';

const PurchasePrice = ({ Departure_Data, Arrive_Data }) => {
  const numToLocale = num => {
    return num.toLocaleString();
  };

  const airPrice =
    (Departure_Data.price + Arrive_Data.price) * Departure_Data.person;

  const fuelPrice =
    Math.floor(
      ((Departure_Data.price * (4 / 3) + Arrive_Data.price * (4 / 3)) *
        Departure_Data.person) /
        10
    ) * 10;

  const taxPrice =
    (Departure_Data.price / 2 + Arrive_Data.price / 2) * Departure_Data.person;

  return (
    <>
      <S.PurchaseRightPeople>
        성인 <strong>{Departure_Data.person}</strong>명
      </S.PurchaseRightPeople>
      <S.PurchaseRightPrice>
        <S.PurchaseRightPriceDetail>
          <div>항공요금</div>
          <div>{Departure_Data.person}명</div>
          <div>{numToLocale(airPrice)}원</div>
        </S.PurchaseRightPriceDetail>
        <S.PurchaseRightPriceDetail>
          <div>유류할증료</div>
          <div>{Departure_Data.person}명</div>
          <div>{numToLocale(fuelPrice)}원</div>
        </S.PurchaseRightPriceDetail>
        <S.PurchaseRightPriceDetail>
          <div>제세공과금</div>
          <div>{Departure_Data.person}명</div>
          <div>{numToLocale(taxPrice)}원</div>
        </S.PurchaseRightPriceDetail>
      </S.PurchaseRightPrice>
      <S.PurchaseRightTotal>
        <p>총 요금</p>
        <p>
          <strong>{numToLocale(airPrice + fuelPrice + taxPrice)}원</strong>
          <span>세금 및 수수료 포함</span>
        </p>
      </S.PurchaseRightTotal>
    </>
  );
};

export default PurchasePrice;
