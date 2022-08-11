import styled from 'styled-components';

const S = {};

S.Header = styled.header`
  position: fixed;
  align-items: center;
  display: flex;
  width: 100%;
  height: 72px;
  padding: 0 30px;
  margin: 0 auto;
  background-color: white;
  z-index: 98;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 3%), 0 2px 6px 0 rgb(0 0 0 / 2%),
    0 4px 4px 0 rgb(0 0 0 / 5%);
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
  width: 35px;
  transform: translate(5px, 11px);
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
    transition: all ease 1s;
  }
`;

S.Button_none = styled.button`
  width: 90px;
  border: none;
  padding: 8px 12px;
  margin: 3px;
  background-color: transparent;
  border-radius: 2px;
  color: #999;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s ease 0s;

  &:hover {
    color: #e57fca;
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

S.Button_border = styled.button`
  width: 120px;
  padding: 8px 12px;
  margin: 3px;
  border: 1px solid #999;
  border-radius: 2px;
  background-color: transparent;
  color: #999;
  font-weight: bold;
  font-size: 14px;
  transition: background-color 0.2s ease 0s;
  cursor: pointer;

  &:hover {
    color: #e57fca;
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

S.SearchInput = styled.input`
  height: 35px;
  width: 350px;
  margin-left: 20px;
  padding: 0px 16px 0px 48px;
  background: rgba(245, 246, 255, 0.15);
  background-color: white;
  color: black;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  font-size: 15px;
  font-weight: 500;
  text-align: left;

  :focus {
    outline: none;
  }
  ::placeholder {
    color: black;
    opacity: 0.5;
  }
`;

S.SearchBox = styled.div`
  position: relative;

  i {
    position: absolute;
    top: 10px;
    left: 35px;
    color: gray;
  }
`;
export default S;
