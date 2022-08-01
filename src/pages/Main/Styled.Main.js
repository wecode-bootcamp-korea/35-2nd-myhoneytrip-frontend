import styled from 'styled-components';

const S = {};

S.Container = styled.div`
  max-width: 1200px;
  margin: auto;
  font-family: Arial, Helvetica, sans-serif;
`;

S.Header = styled.div`
  height: 345px;
  padding: 60px;
  background: center/cover no-repeat url('/images/airplane.jpg');
  opacity: 0.7;
`;

S.NavSpace = styled.div`
  height: 120px;
`;

S.SearchHeader = styled.div`
  ${props => props.theme.variables.flexSet('row', 'space-between')};
  margin-bottom: 20px;
  color: white;
  font-size: 17px;
  font-weight: bold;
`;

S.Round = styled.span`
  padding: 10px 15px;
  margin: 20px 5px;
  border-bottom: 3px solid
    ${props => (props.changePattern ? 'transparent' : 'white')};
  color: ${props => (props.changePattern ? 'gray' : 'white')};
  cursor: pointer;
`;

S.OneWay = styled(S.Round)`
  margin-left: 5px;
  border-bottom: 3px solid
    ${props => (!props.changePattern ? 'transparent' : 'white')};
  color: ${props => (!props.changePattern ? 'gray' : 'white')};
`;

S.ReservationList = styled.div`
  cursor: pointer;
`;

S.SearchBar = styled.div`
  display: flex;
  justify-content: center;

  div {
    margin-right: 3px;
  }
`;

S.Schedule = styled.div`
  ${props => props.theme.variables.flexSet('row', 'space-between', 'center')};
  width: 400px;
  padding: 17px;
  background-color: white;
  border-radius: 2px;
  cursor: pointer;

  i {
    font-size: 18px;
    color: rgba(0, 0, 0, 0.7);
  }
`;

S.Date = styled(S.Schedule)`
  position: relative;
  width: 300px;

  i {
    position: absolute;
  }

  span:nth-child(3) {
    position: absolute;
    top: 17px;
    left: 150px;
    color: gray;
    font-size: 20px;
  }
`;

S.DepartureDate = styled.span`
  margin-left: 25px;
  color: gray;
`;

S.ArriveDate = styled.span`
  display: ${props => (props.changePattern ? 'none' : 'block')};
  color: gray;
`;

S.Passenger = styled(S.Schedule)`
  width: 300px;

  span {
    transform: translateX(-50px);
  }
`;

S.SearchBtn = styled.button`
  width: 80px;
  color: white;
  background-color: ${props => props.theme.style.pink};
  border: none;
  border-radius: 2px;
  cursor: pointer;
`;

export default S;
