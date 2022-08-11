import styled from 'styled-components';

const S = {};

S.ReservationData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

S.ReservationTitle = styled.h1`
  width: 1200px;
  margin-bottom: 20px;
  font-size: 30px;
  font-weight: 600;
  margin-top: 110px;
`;

S.ReservationMain = styled.div`
  display: flex;
  width: 1200px;
  justify-content: center;
  margin-bottom: 100px;
`;

S.ReservationLeft = styled.div`
  width: 25%;
  border: 1px solid #e9ecef;
  border-radius: 4px;
  margin-right: 50px;
  overflow: hidden;
  height: 192px;
`;

S.LeftTitle = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  padding: 24px 0px 24px 24px;
  justify-content: flex-start;
  align-items: center;
  color: #343a40;
  border-left: 4px solid #fff;

  &.active {
    border-left: 4px solid #e57fca;
    color: #000;
    background-color: #f5f6f7;
    font-weight: 600;
  }
`;

S.ReservationRight = styled.div`
  width: 75%;
`;

S.RightTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 30px;
`;

S.RightMain = styled.div`
  ul {
    list-style: none;
    margin: 0px;
    padding: 0px;
    width: 100%;

    li {
      position: relative;
      padding: 0px 0px 48px 24px;
    }
  }
`;

S.noneTravelData = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 48px;
  text-align: center;
  height: 300px;
`;

S.noneTravelDataImg = styled.div`
  img {
    width: 58px;
    height: 58px;
    margin: 32px auto;
  }
`;

S.noneTravelDataText = styled.div`
  color: #343a40;
  margin: 0px auto 8px;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.33;
  letter-spacing: -0.4px;
  text-align: center;
`;

export default S;
