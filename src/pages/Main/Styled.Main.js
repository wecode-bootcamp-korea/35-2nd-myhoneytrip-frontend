import styled from 'styled-components';

const S = {};

S.Container = styled.div``;

S.Header = styled.div`
  position: relative;
  max-width: 100%;
  height: 275px;
  margin: auto;
  padding: 40px;
  background: center/cover no-repeat url('/images/airplane.jpg');
`;

S.NavSpace = styled.div`
  height: 70px;
`;

S.HeaderContainer = styled.div`
  max-width: 1200px;
  margin: auto;
`;

S.SearchHeader = styled.div`
  ${props => props.theme.variables.flexSet('row', 'space-between')};
  color: white;
  font-size: 17px;
  font-weight: bold;
`;

S.Round = styled.span`
  padding: 10px 15px;
  margin: 20px 5px;
  border-bottom: 3px solid
    ${props => (props.changePattern ? 'transparent' : 'white')};
  color: ${props => (props.changePattern ? '#DCDCDC' : 'white')};
  cursor: pointer;
`;

S.OneWay = styled(S.Round)`
  margin-left: 5px;
  border-bottom: 3px solid
    ${props => (!props.changePattern ? 'transparent' : 'white')};
  color: ${props => (!props.changePattern ? '#DCDCDC' : 'white')};
`;

S.ReservationList = styled.div`
  cursor: pointer;
`;

S.SearchBar = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;

  div {
    margin-right: 3px;
  }
`;

S.ScheduleContainer = styled.div`
  position: relative;
`;

S.Schedule = styled.div`
  ${props => props.theme.variables.flexSet('row', 'space-between', 'center')};
  width: 450px;
  padding: 20px;
  background-color: white;
  border-radius: 3px;
  cursor: pointer;

  i {
    font-size: 18px;
    color: rgba(0, 0, 0, 0.7);
  }
`;

S.DateContainer = styled(S.ScheduleContainer)``;

S.Date = styled(S.Schedule)`
  width: 330px;
  justify-content: space-between;
  padding: 14px;

  i {
    font-size: 20px;
    transform: translate(20px, -2px);
    z-index: 5;
  }

  span:nth-child(3) {
    color: gray;
    font-size: 20px;
  }
`;

S.DepartureDate = styled.span`
  color: gray;
`;

S.ArriveDate = styled.span`
  display: ${props => (props.changePattern ? 'none' : 'block')};
  color: gray;
`;

S.PassengerContainer = styled.div`
  position: relative;
`;

S.Passenger = styled(S.Schedule)`
  width: 320px;
  justify-content: space-between;

  div {
    font-weight: bold;
    transform: translateY(-1px);
  }
`;

S.SearchBtn = styled.button`
  width: 80px;
  color: white;
  background-color: ${({ theme }) => theme.style.pink};
  border: none;
  border-radius: 2px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;

S.BodyContainer = styled.div`
  max-width: 1200px;
  margin: auto;
`;

export default S;
