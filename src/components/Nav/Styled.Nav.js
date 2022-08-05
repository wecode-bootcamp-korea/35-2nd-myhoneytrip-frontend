import styled from 'styled-components';

const S = {};

S.Header = styled.header`
  align-items: center;
  display: flex;
  width: 100%;
  height: 72px;
  padding: 0 30px;
  margin: 0 auto;
  background-color: white;
  z-index: 99;
  background-color: gray;
`;

S.Container = styled.div`
  position: relative;
  ${props => props.theme.variables.flexSet('row', 'flex-start', 'center')};
  width: 100%;
  height: 72%;
  max-width: 1200px;
  margin: 0px auto;
`;

S.ImgBox = styled.img`
  display: inline;
  border: 0;
  width: 150px;
  cursor: pointer;
`;

S.LoginBox = styled.div`
  ${props => props.theme.variables.flexSet('row', 'flex-start', 'center')};
  justify-content: flex-end;
  flex-grow: 1;
  height: 100%;
`;

S.LoginArea = styled.div`
  margin-right: 0px;
`;

S.Button = styled.img`
  border: 1px solid white;
  border-radius: 50%;
  width: 35px;
  transform: translate(9px, 9px);
  cursor: pointer;
`;

S.Button_none = styled.button`
  width: 90px;
  border: none;
  border-radius: 2px;
  padding: 8px 12px;
  margin: 3px;
  background-color: transparent;
  cursor: pointer;
  color: white;
  font-weight: bold;
  font-size: 14px;
  transition: background-color 0.2s ease 0s;
  &:hover {
    color: rgb(255, 255, 255);
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

S.Button_border = styled.button`
  width: 120px;
  border: 1px solid white;
  border-radius: 2px;
  padding: 8px 12px;
  margin: 3px;
  background-color: transparent;
  cursor: pointer;
  color: white;
  font-weight: bold;
  font-size: 14px;
  transition: background-color 0.2s ease 0s;
  &:hover {
    color: rgb(255, 255, 255);
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

S.SearchInput = styled.input`
  background: rgba(245, 246, 255, 0.15);
  height: 35px;
  width: 350px;
  border: none;
  border-radius: 2px;
  font-size: 15px;
  font-weight: 500;
  text-align: left;
  margin-left: 20px;
  padding: 0px 16px 0px 48px;
  color: rgb(255, 255, 255);
`;

export default S;
