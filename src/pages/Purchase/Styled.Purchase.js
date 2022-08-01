import styled from 'styled-components';

const S = {};

S.SearchInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

S.Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

S.MainTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 50px;
  font-size: 20px;
  font-weight: 500;
  div {
    cursor: pointer;
    display: flex;
    align-items: center;
    p {
      position: absolute;
      left: 0;
      font-size: 14px;
      color: #666;
      font-weight: 400;
      margin-left: 35px;
    }
    img {
      position: absolute;
      width: 20px;
      height: 20px;
      transform: rotate(180deg);
      left: 10px;
      top: 15px;
    }
  }
`;

S.SubTitle = styled.div`
  width: 100%;
  text-align: center;
  color: #fff;
  background-color: #e57fca;

  h1 {
    padding: 13px 0;
    font-size: 15px;
    font-weight: 400;
  }
`;

S.PurchaseInfo = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 0;
  width: 1200px;
`;

S.PurchaseLeft = styled.div`
  margin-right: 20px;
  width: 60%;
`;

S.PurchaseRight = styled.div`
  width: 25%;
  margin-top: 30px;
  margin-left: 30px;
`;

S.PurchaseRightTitle = styled.div`
  font-size: 23px;
  color: #e57fca;
  padding-bottom: 15px;
  border-bottom: 1px solid #e9ecef;

  strong {
    margin: 0 10px;

    img {
      width: 15px;
      height: 15px;
    }
  }

  p {
    margin-top: 10px;
    font-size: 13px;
    color: black;
    font-weight: 400;
  }
`;

S.ReservationButton = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0;
  padding-top: 40px;
  width: 100%;
  border-top: 1px solid #e9ecef;

  button {
    border-color: transparent;
    background-color: #e57fca;
    height: 48px;
    width: 10%;
    padding: 0 10px;
    box-sizing: border-box;
    border-radius: 2px;
    font-size: 16px;
    font-weight: bold;
    transition: all 0.08s ease-out;
    color: #fff;
    border: none;
    cursor: pointer;
  }
`;

export default S;
