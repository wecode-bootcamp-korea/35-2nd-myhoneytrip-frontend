import styled, { css } from 'styled-components';

const S = {};

const flexDirectionColumn = css`
  display: flex;
  flex-direction: column;
`;

S.Ticket = styled.div`
  ${flexDirectionColumn}
  margin-bottom: 25px;
  border-radius: 25px;
  background-color: #ffffff;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 8%), 0 2px 6px 0 rgb(0 0 0 / 2%),
    0 4px 4px 0 rgb(0 0 0 / 5%);
`;

S.TicketBoxs = styled.div`
  ${flexDirectionColumn}
`;

S.TicketBoxView = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 30px;
`;

S.FlightSchedule = styled.div`
  ${flexDirectionColumn}
`;

S.TicketDetailView = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 500px;
  margin: 20px 0;
`;

S.TicketBoxDeparture = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`;

S.AirplaneLogoImg = styled.div`
  display: flex;
  margin-right: 20px;

  img {
    width: 40px;
  }
`;

S.AirplaneName = styled.p`
  display: flex;
  width: 140px;
  font-size: 18px;
  font-weight: 400;
  color: #666;
`;

S.TicketBoxTimetable = styled.div`
  display: flex;
  align-items: center;
`;

S.TicketBoxTimetableDeparture = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

S.TicketBoxTimetableTime = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: 600;
  color: #444;
`;

S.TimetableTravelTimeLine = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 30px;
  font-size: 12px;
  font-weight: 400;
  color: #666;

  img {
    width: 95px;
    margin-bottom: 10px;
  }
`;

S.TimetableDepartureCode = styled.div`
  display: flex;
  font-size: 12px;
  font-weight: 400;
  color: #666;
`;

S.TicketBoxTimetableArrived = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

S.TicketBoxTimetableDay = styled.div`
  margin-left: 5px;
  font-size: 15px;
  font-weight: 400;
  color: #e57fca;
`;

S.TimetableNonstop = styled.div`
  margin-left: 20px;
  font-size: 15px;
  font-weight: 400;
  color: #666;
`;

S.FlightCost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

S.FlightCostBox = styled.button`
  padding: 12px;
  width: 280px;
  height: 75px;
  border-radius: 8px;
  border: 1px solid #e3e3e3;
  background: inherit;

  &:hover {
    border: 1px solid #e57fca;
  }

  &:focus {
    border: 1px solid #e57fca;
    background-color: rgba(219, 113, 196, 0.2);
  }
`;

S.FlightCostBoxPrice = styled.div`
  ${flexDirectionColumn}
`;

S.FlightCostBoxPersonSeat = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

S.FlightCostBoxPerson = styled.div`
  font-size: 13px;
  color: #666;
`;

S.FlightCostBoxSeat = styled.div`
  font-size: 13px;
  color: #e57fca;
`;

S.FlightPrice = styled.div`
  display: flex;
  justify-content: space-between;

  strong {
    font-size: 28px;
    color: #333;
    font-weight: 700;
  }

  span {
    font-size: 20px;
    font-weight: 500;
    color: #666;
  }

  img {
    width: 10px;
  }
`;

export default S;
