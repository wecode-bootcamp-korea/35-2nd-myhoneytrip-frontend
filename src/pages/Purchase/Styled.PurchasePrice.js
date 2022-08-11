import styled from 'styled-components';

const S = {};
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
      margin-top: 5px;
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
    width: 30%;
  }

  div:last-child {
    width: 30%;
    text-align: end;
  }
`;
export default S;
