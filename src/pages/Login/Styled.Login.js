import styled, { keyframes } from 'styled-components';

const S = {};

const handShakeImg = keyframes`
0% {
  transform: rotate(0deg);
}
50% {
  transform: rotate(45deg);
}
100% {
  transform: rotate(0deg);
}`;
S.TEST = styled.div`
  height: 350px;
  width: 1903px;
`;
S.LogBox_out = styled.header`
  display: flex;
  justify-content: center;
`;

S.LogBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 430px;
  border: 1px solid lightgray;
  padding: 0 48px 48px;
  margin: 187px auto 240px;
  text-align: center;
`;

S.HandShakeImg = styled.div`
  width: 56px;
  height: 56px;
  margin-top: 45px;
  animation: ${handShakeImg} 0.5s 1s 2 linear alternate;
  img {
    width: 56px;
    height: 56px;
  }
`;

S.WelcomeEng = styled.div`
  margin-top: 23px;
  font-weight: bold;
  font-size: 28px;
  color: rgb(64, 68, 71);
`;

S.WelcomeKo = styled.div`
  margin: 10px 0px 0px;
  font-weight: bold;
  font-size: 16px;
  color: rgb(154, 159, 163);
  line-height: normal;
`;

S.KaLogoImg = styled.img`
  margin-top: 30px;
  cursor: pointer;
  &:hover {
    box-shadow: rgb(0 0 0/20%) 0px 1px 3px 0px;
    transition: box-shadow 200ms ease 0s;
    background-color: rgb(247, 227, 23);
  }
`;

S.SNS = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
`;

S.Facebook = styled.button`
  display: flex;
  align-items: center;
  margin: 5px;
  border: none;
  background-color: white;
  color: rgb(132, 141, 146);
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;

S.Naver = styled.button`
  display: flex;
  align-items: center;
  margin: 5px;
  border: none;
  background-color: white;
  color: rgb(132, 141, 146);
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;

S.Email = styled.button`
  display: flex;
  align-items: center;
  margin: 5px;
  border: none;
  background-color: white;
  color: rgb(132, 141, 146);
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;

S.JoinBox = styled.div`
  display: flex;
  padding-top: 40px;
`;

S.JoinSection = styled.div`
  color: rgb(132, 141, 146);
  font-weight: 600;
  font-size: 14px;
`;

S.GotoJoin = styled.a`
  padding-left: 5px;
  text-decoration: underline;
  cursor: pointer;
  color: rgb(132, 141, 146);
  font-weight: 600;
  font-size: 14px;
  &:hover {
    color: black;
  }
`;

S.FacebookImg = styled.img`
  width: 18px;
  margin: 5px;
  &:hover {
    color: rgb(173, 182, 187);
  }
`;

S.NaverImg = styled.img`
  width: 18px;
  margin: 5px;
`;

S.EmailImg = styled.img`
  width: 18px;
  margin: 5px;
`;

export default S;
