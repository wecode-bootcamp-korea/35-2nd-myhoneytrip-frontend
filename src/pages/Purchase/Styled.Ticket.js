import styled from 'styled-components';

const S = {};

S.Ticket = styled.div``;

S.TicketTop = styled.div`
  display: flex;
  align-items: center;
  height: auto;
  box-shadow: none;
  padding: 0;
  margin-bottom: 16px;
  background-color: #fff;
  border-radius: 2px;
  margin-top: 30px;
  margin-bottom: 15px;

  span {
    background-color: #e57fca;
    color: #fff;
    font-size: 13px;
    box-sizing: border-box;
    text-align: center;
    font-weight: bold;
    display: inline-block;
    min-width: 44px;
    height: 24px;
    padding: 0 5px;
    line-height: 24px;
  }

  strong {
    height: 24px;
    line-height: 24px;
    font-size: 20px;
    margin: 0 10px;
    font-weight: 500;
  }

  img {
    width: 20px;
    height: 20px;
    margin: 0 10px;
  }
`;

S.TicketBottom = styled.div`
  border: 1px solid #e9ecef;
  display: flex;
  align-items: center;
  height: 100px;
  font-size: 14px;
`;

S.TicketBottomImg = styled.div`
  display: flex;
  align-items: center;
  margin: 0 25px;
  font-size: 15px;

  img {
    width: 23%;
    height: 23%;
    margin-right: 10px;
  }
`;

S.TicketBottomTime = styled.div`
  display: flex;
`;

S.TicketBottomDeparture = styled.div`
  margin: 0 15px;
  text-align: end;
  font-weight: 800;
  font-size: 18px;

  span {
    font-weight: 500;
    font-size: 13px;
    color: #999;
  }
`;

S.TicketBottomArrive = styled.div`
  margin-left: 15px;
  margin-right: 40px;
  font-weight: 800;
  font-size: 18px;

  span {
    font-weight: 500;
    font-size: 13px;
    color: #999;
  }
`;

S.TicketBottomTotalTime = styled.div`
  color: #999;
  font-size: 14px;
  p {
    margin-top: 7px;
  }
`;

S.TicketBottomArrow = styled.div`
  position: relative;
  text-align: end;
  color: #999;

  div {
    position: absolute;
    top: 32.5%;
    width: 96%;
    border-bottom: 2px solid #999;
  }
`;

S.TicketDetail = styled.div`
  border: 1px solid #e9ecef;
  border-top: none;
  display: flex;
  height: 140px;
  font-size: 14px;
  padding: 25px;
  span {
    margin-left: 14px;
  }
`;

S.TicketDetailDeparture = styled.div`
  margin-left: 80px;
`;

S.TicketDetailIcon = styled.div`
  margin: 0 30px;
  position: relative;

  img {
    position: absolute;
    top: 40px;
    left: -48px;
    transform: rotate(90deg);
    height: 13px;
    width: 87px;
  }
`;

S.TicketDetailTime = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    font-size: 15px;

    strong {
      font-weight: bold;
      margin-right: 10px;
    }
  }

  span {
    font-size: 13px;
    color: #999;
  }
`;

export default S;
