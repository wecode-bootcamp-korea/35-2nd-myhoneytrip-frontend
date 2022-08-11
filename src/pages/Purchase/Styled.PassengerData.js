import styled from 'styled-components';

const S = {};

S.PassengerReservation = styled.div`
  display: flex;
  justify-content: center;
`;

S.Reservation = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 1200px;
  padding: 40px 0;
  margin-top: 60px;
`;

S.DataLeft = styled.div`
  border-top: 2px solid #e57fca;
  width: 65%;
  margin-right: 35px;
`;

S.DataRight = styled.div`
  width: 25%;
`;
S.Ticket = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  border-bottom: 1px solid #dee2e6;
`;
S.TicketTitle = styled.div`
  display: flex;
  align-items: center;
  padding: 0 40px;
  border-right: 1px solid #dee2e6;

  div {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 15px;

    p {
      font-size: 23px;
      margin-bottom: 10px;
    }
    span {
      display: flex;
      align-items: center;
      font-size: 15px;
      color: #666;
      font-weight: 400;
    }
    img {
      width: 70px;
      height: 23px;
      margin-bottom: 10px;
    }
  }
`;
S.TicketTitleInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-right: 1px solid #dee2e6;
  padding: 0 30px;
  img {
    width: 20px;
    height: 20px;
    margin-bottom: 10px;
  }
  p {
    margin-bottom: 10px;
    font-size: 12px;
    color: #848c94;
  }
  span {
    color: #343a40;
    font-size: 13px;
  }

  &:last-child {
    border: none;
  }
`;
S.AirInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 150px;
`;

S.AirInfoTop = styled.table`
  width: 100%;
  height: 100%;
  margin: auto;

  thead {
    tr {
      th {
        padding: 12px 0;
        text-align: left;
        border-bottom: 1px solid #dee2e6;
        font-size: 13px;
        color: #495056;
      }
    }
  }
  tbody {
    tr {
      td:first-child {
        font-weight: bold;
      }
      td {
        padding: 15px 0;
        font-size: 12px;
        color: #495056;
        border-bottom: 1px solid #dee2e6;
        vertical-align: middle;
      }
    }
  }
`;

S.CheckNotice = styled.div`
  margin-top: 16px;
  padding: 13px 14px 13px 12px;
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 2px;
  ul {
    list-style: inside;
    li {
      position: relative;
      padding-left: 10px;
      color: #666d75;
      font-size: 12px;
      line-height: 1.5;
      &:first-child {
        color: #e57fca;
      }
    }
  }
`;
S.InfoTitle = styled.h1`
  margin-top: 24px;
  font-size: 23px;
  font-weight: 400;
  padding: 20px 0;
  margin-top: 20px;
`;
S.BookerInfo = styled.form`
  border: 1px solid #dee2e6;
  padding: 24px;
  margin-top: -1px;
  p {
    padding-top: 12px;
    font-size: 12px;
    color: #848c94;
  }
`;

S.BookerName = styled.div`
  label {
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 600;
    pointer-events: none;
    line-height: 16px;
  }
  input {
    width: 200px;
    padding: 10px 12px;
    border: 1px solid #dee2e6;
    box-sizing: border-box;
    font-size: 14px;
    border-radius: 2px;
    color: #343a40;
    transition: all 0.08s ease-out;
    &:hover {
      border: 1px solid #555;
    }

    &:focus {
      outline: none;
      border: 1px solid #e57fca;
    }
  }
`;
S.BookerEmail = styled.div`
  margin-top: 24px;
  label {
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 600;
    pointer-events: none;
    line-height: 16px;
  }
  select {
    width: 150px;
    padding: 10px 12px;
    border: 1px solid #dee2e6;
    box-sizing: border-box;
    font-size: 14px;
    border-radius: 2px;
    color: #343a40;
    transition: all 0.08s ease-out;
    margin-left: 10px;
    &:hover {
      border: 1px solid #555;
    }
    &:focus {
      outline: none;
      border: 1px solid #e57fca;
    }
  }
  input {
    width: 200px;
    padding: 10px 12px;
    border: 1px solid #dee2e6;
    box-sizing: border-box;
    font-size: 14px;
    border-radius: 2px;
    color: #343a40;
    transition: all 0.08s ease-out;
    &:hover {
      border: 1px solid #555;
    }
    &:focus {
      outline: none;
      border: 1px solid #e57fca;
    }
  }
  span {
    margin: 0 5px;
  }
`;
S.BookerPhone = styled.div`
  margin-top: 24px;
  label {
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 600;
    pointer-events: none;
    line-height: 16px;
  }
  select {
    width: 120px;
    padding: 10px 12px;
    border: 1px solid #dee2e6;
    box-sizing: border-box;
    font-size: 14px;
    border-radius: 2px;
    color: #343a40;
    transition: all 0.08s ease-out;
    margin-right: 10px;
    &:hover {
      border: 1px solid #555;
    }
    &:focus {
      outline: none;
      border: 1px solid #e57fca;
    }
  }

  input {
    width: 120px;
    padding: 10px 12px;
    border: 1px solid #dee2e6;
    box-sizing: border-box;
    font-size: 14px;
    border-radius: 2px;
    color: #343a40;
    transition: all 0.08s ease-out;
    margin-right: 10px;
    &:hover {
      border: 1px solid #555;
    }
    &:focus {
      outline: none;
      border: 1px solid #e57fca;
    }
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;

S.BookingNotice = styled.div`
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 2px;
  padding: 13px 14px 13px 12px;
  margin: 20px 0 10px;
  line-height: 1.5;
  background: #f5f5f5;
  font-size: 11px;

  ul {
    list-style: inside;
    text-indent: -15px;
    padding-left: 15px;
    span {
      color: #e57fca;
    }
    li {
      padding: 0 0 0 10px;
      margin-top: 5px;
      line-height: 1.5;
      background-image: none;
      color: #666d75;
      font-size: 12px;
      &::marker {
        margin: 0 !important;
      }
    }
  }
`;
S.PassengerInfo = styled.form`
  border: 1px solid #dee2e6;
  padding: 24px;
  margin-top: -1px;
  p {
    padding-top: 12px;
    font-size: 12px;
    color: #848c94;
  }
`;
S.PassengerDataTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 24px;
  vertical-align: baseline;
`;
S.PassengerName = styled.div`
  display: flex;
`;
S.PassengerFirstName = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  label {
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 600;
    pointer-events: none;
    line-height: 16px;
  }
  input {
    padding: 10px 12px;
    border: 1px solid #dee2e6;
    box-sizing: border-box;
    font-size: 14px;
    border-radius: 2px;
    color: #343a40;
    transition: all 0.08s ease-out;
    &:hover {
      border: 1px solid #555;
    }
    &:focus {
      outline: none;
      border: 1px solid #e57fca;
    }
  }
`;
S.PassengerBirth = styled.div`
  margin-top: 24px;
  label {
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 600;
    pointer-events: none;
    line-height: 16px;
  }
  select {
    width: 120px;
    padding: 10px 12px;
    border: 1px solid #dee2e6;
    box-sizing: border-box;
    font-size: 14px;
    border-radius: 2px;
    color: #343a40;
    transition: all 0.08s ease-out;
    margin-right: 10px;
    &:hover {
      border: 1px solid #555;
    }
    &:focus {
      outline: none;
      border: 1px solid #e57fca;
    }
  }

  input {
    width: 120px;
    padding: 10px 12px;
    border: 1px solid #dee2e6;
    box-sizing: border-box;
    font-size: 14px;
    border-radius: 2px;
    color: #343a40;
    transition: all 0.08s ease-out;
    margin-right: 10px;
    &:hover {
      border: 1px solid #555;
    }
    &:focus {
      outline: none;
      border: 1px solid #e57fca;
    }
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;
S.PassengerLastName = styled.div`
  display: flex;
  flex-direction: column;
  label {
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 600;
    pointer-events: none;
    line-height: 16px;
  }
  input {
    padding: 10px 12px;
    border: 1px solid #dee2e6;
    box-sizing: border-box;
    font-size: 14px;
    border-radius: 2px;
    color: #343a40;
    transition: all 0.08s ease-out;
    &:hover {
      border: 1px solid #555;
    }
    &:focus {
      outline: none;
      border: 1px solid #e57fca;
    }
  }
`;
S.PassengerSex = styled.div`
  margin-top: 24px;

  label {
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 600;
    pointer-events: none;
    line-height: 16px;
  }
  div {
    height: 40px;
    span {
      position: relative;
      margin-right: 160px;
      margin-bottom: 10px;
      label {
        border-radius: 2px 0 0 2px;
        border-right: 1px solid #dee2e6;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 3;
        width: 160px;
        height: 40px;
        line-height: 38px;
        background-color: #fff;
        border: 1px solid #dee2e6;
        text-align: center;
        box-sizing: border-box;
      }
      input {
        position: absolute;
        width: 160px;
        height: 40px;
        left: 0;
        top: -3px;
        z-index: 2;

        &:focus {
          outline: none;
        }

        &:checked + label {
          background-color: #e57fca;
          border: 1px solid #e57fca !important;
          font-weight: 600;
          color: #fff;
          z-index: 5;
        }

        &:hover + label {
          border: 1px solid #555;
          z-index: 3;
        }
      }
    }
  }
`;

S.PurchaseRight = styled.div`
  width: 25%;
  margin-top: 30px;
  margin-left: 30px;
  position: sticky;
  top: 0;
`;

S.PurchaseRightPeople = styled.div`
  width: 100%;
  margin-top: 25px;
  margin-bottom: 10px;

  strong {
    color: #e57fca;
    font-weight: bolder;
  }
`;

S.PurchaseRightTotal = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  border-top: 1px solid #e9ecef;
  padding: 15px 0;

  p {
    display: flex;
    flex-direction: column;
    width: 100%;

    strong {
      font-size: 25px;
      font-weight: bold;
      text-align: end;
    }

    span {
      color: #999;
      text-align: end;
      font-size: 13px;
    }
  }
`;

S.PurchaseRightPrice = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  padding-bottom: 10px;
  padding-top: 10px;
  border-top: 1px solid #e9ecef;
`;

S.PurchaseRightPriceDetail = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 0;

  div:first-child {
    width: 25%;
  }

  div:last-child {
    width: 25%;
    text-align: end;
  }
`;

S.PurchaseNotice = styled.div`
  margin-top: 24px;
  padding: 13px 14px 13px 12px;
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 2px;
  ul {
    font-size: 13px;
    list-style: inside;
    text-indent: -15px;
    padding-left: 15px;

    li {
      position: relative;
      padding-left: 10px;
      margin-bottom: 0;
      color: #666d75;
      font-size: 12px;
      line-height: 1.5;
      &:last-child {
        margin-top: 4px;
      }
      span {
        color: #ec4937;
      }
    }
  }
`;

S.PurchaseButton = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
  button {
    background-color: #e57fca;
    color: #fff;
    height: 48px;
    line-height: 48px;
    width: 100%;
    padding: 0 10px;
    box-sizing: border-box;
    border-radius: 2px;
    font-size: 16px;
    font-weight: bold;
    transition: all 0.08s ease-out;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: #ce72b5;
    }
    &:disabled {
      background-color: gray;
      cursor: default;
    }
  }
`;
export default S;
