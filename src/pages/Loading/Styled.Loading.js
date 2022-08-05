import styled from 'styled-components';

const S = {};

S.Loading = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  z-index: 99;
`;
S.Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;
S.Text = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(100, 100, 100, 0.3);
`;
S.TextBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 20px;
  color: #fff;
  transform: translate(-50%, -50%);
`;
S.TextTop = styled.p`
  line-height: 30px;
  text-align: center;
  align-items: center;
  padding-bottom: 30px;
`;
S.TextMiddle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
  border-bottom: 1px solid #fff;
  border-top: 1px solid #fff;
  text-align: center;
  width: 400px;
`;
S.MiddleData = styled.div`
  display: flex;
  flex-direction: column;
  strong {
    font-size: 30px;
    font-weight: bold;
    padding-bottom: 5px;
  }
  span {
    padding-bottom: 8px;
    font-size: 13px;
  }
`;
S.MiddleArrow = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100px;
    height: 25px;
  }
`;

export default S;
