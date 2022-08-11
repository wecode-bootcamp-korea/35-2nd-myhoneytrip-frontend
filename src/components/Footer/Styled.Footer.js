import styled from 'styled-components';

const S = {};
S.FooterAll = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 30px;
  margin-top: 30px;
  border-top: 1px solid #c7cdcf;
`;

S.FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

S.FooterRight = styled.div`
  display: flex;
  left: 40px;
`;

S.MapAll = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  div {
    padding: 5px;
  }
`;

S.Footer = styled.div`
  padding-bottom: 10px;
  font-size: medium;
  font-weight: bold;
  color: #666d73;
`;

S.Content = styled.div`
  padding-bottom: 10px;
  letter-spacing: 1px;
  line-height: 2;
  font-size: small;
`;

S.Chatting = styled.button`
  display: flex;
  align-items: center;
  width: 115px;
  height: 30px;
  padding: 18px;
  border: 0.5px solid #c7cdcf;
  border-radius: 5px;
  margin-top: 10px;
  background-color: transparent;
  color: black;
  font-weight: bold;
`;

S.MapTitle = styled.div`
  padding-bottom: 10px;
  font-size: 15px;
  font-weight: bold;
  color: #666d73;
`;

S.MapContent = styled.div`
  padding-bottom: 10px;
  font-size: 15px;
  font-weight: 300;
  line-height: 1.5;
  color: #c7cdcf;
`;
export default S;
