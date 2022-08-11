import styled, { css } from 'styled-components';

const S = {};

const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const flexDirectionColumn = css`
  display: flex;
  flex-direction: column;
`;

S.FlightListInfo = styled.div`
  display: flex;
  margin: 20px 0 60px 0;
  width: 1200px;

  label {
    padding: 20px;
    margin-bottom: 20px;
    background-color: #e57fca;
    color: #fff;
    font-size: 20px;
    font-weight: 700;
  }
`;
S.ReservationInfo = styled.div``;

S.ReservationInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

//side box 시작

S.SideSelectAirplanes = styled.div`
  position: sticky;
  top: 100px;
  left: 20px;
  padding-top: 0px;
  margin: 0 30px 200px 0;
  width: 200px;
  height: 400px;
  font-size: 16px;
  font-weight: 600;
`;

//main box 시작

S.MainSelect = styled.div`
  ${flexDirectionColumn}
  width: 950px;
`;

S.SoartingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

S.SearchResult = styled.div`
  ${flexDirectionColumn}
  font-size: 16px;
  font-weight: 600;

  p {
    margin-top: 10px;
    font-size: 12px;
    font-weight: 400;
    color: #999;
  }
`;

S.SoartingSelectBox = styled.div`
  ${flexCenter}
  width: 180px;
  height: 40px;
  border: 1px solid #e3e3e3;
  background-color: #fff;
  color: #777;

  select {
    border-style: none;
    font-size: 16px;
  }
`;

S.TicketBoxContainer = styled.div`
  ${flexDirectionColumn}
  justify-content: center;
`;

S.ticketNone = styled.div`
  ${flexDirectionColumn}
  align-items: center;
  justify-content: center;
  padding: 200px 0;
  font-size: 20px;
  color: #666;

  p {
    font-size: 50px;
    margin: 20px 0;
  }
`;

// S.PlusTicket = styled.button`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin: 20px 0;
//   padding: 20px 0;
//   background: inherit;
//   border: 1px solid #e57fca;
//   color: #e57fca;
// `;

export default S;
