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

S.ShowDetail = styled.div`
  ${flexDirectionColumn}
`;

S.CostDetailView = styled.div`
  border-top: 1px solid #e3e3e3;
`;

S.CostDetail = styled.div`
  ${flexDirectionColumn}
  background-color: #f9f9f9;
`;

S.DetailBoxTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 20px;
`;

S.DetailBoxTopInfo = styled.div`
  ${flexCenter}
`;

S.TopInfoDeparture = styled.div`
  background-color: #e57fca;
  color: #fff;
  font-size: 14px;
  padding: 8px;
`;

S.TopInfoConstant = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  margin: 0 20px;

  img {
    width: 20px;
    margin: 0 20px;
    padding-bottom: 5px;
  }
`;

S.TopInfoTravelTime = styled.div`
  font-size: 14px;
  font-weight: 400;
`;

S.DetailBoxMiddle = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 20px;
`;

S.DetailBoxMiddleFlight = styled.div`
  display: flex;
  font-size: 14px;
  font-weight: 400;
  color: #888;
`;

S.DetailBoxMiddleFlightDay = styled.div`
  display: flex;
  margin-left: 100px;
  font-size: 14px;
  font-weight: 400;
  color: #888;

  img {
    width: 70px;
    transform: rotate(90deg);
  }

  div {
    ${flexDirectionColumn}
    justify-content: space-between;
    height: 70px;

    p {
      font-size: 14px;
      font-weight: 400;

      span {
        font-size: 16px;
        font-weight: 700;
        color: #333;
        margin-right: 10px;
      }
    }
  }
`;

S.CostValueBox = styled.div`
  ${flexDirectionColumn}
  border-top: 3px solid #e3e3e3;
  padding: 0 10px;
`;

export default S;
