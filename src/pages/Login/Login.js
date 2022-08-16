import React from 'react';
import { useNavigate } from 'react-router-dom';
import S from './Styled.Login';

const Login = () => {
  const navigate = useNavigate();

  const goToSign = () => {
    navigate('/Signup');
  };

  const login = () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${'342566fe063dfa8affd1ddc743c2aa6a'}&redirect_uri=${'http://2nd-myhoneytrip.s3-website.ap-northeast-2.amazonaws.com/logining'}&response_type=code`;
  };
  return (
    <S.LogBox_out>
      <S.LogBox>
        <S.HandShakeImg>
          <img src="/images/Login/shaking_hands.png" alt="shakeimg" />
        </S.HandShakeImg>
        <S.WelcomeEng>Welcome!</S.WelcomeEng>
        <S.WelcomeKo>허니문의 모든 것, 마이허니트립</S.WelcomeKo>
        <S.KaLogoImg
          src="/images/Login/kakao_login_medium_wide.png"
          onClick={login}
        />
        <S.SNS>
          <S.Facebook>
            <S.FacebookImg src="/images/Login/facebook_logo.png" />
            페이스북
          </S.Facebook>
          <S.Naver>
            <S.NaverImg src="/images/Login/naver_icon.png" />
            네이버
          </S.Naver>
          <S.Email>
            <S.EmailImg src="/images/Login/email_icon.png" />
            이메일
          </S.Email>
        </S.SNS>
        <S.JoinBox>
          <S.JoinSection>아직 회원이 아니신가요?</S.JoinSection>
          <S.GotoJoin onClick={goToSign}>회원가입</S.GotoJoin>
        </S.JoinBox>
      </S.LogBox>
    </S.LogBox_out>
  );
};

export default Login;
