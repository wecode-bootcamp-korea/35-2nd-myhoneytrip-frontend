import React from 'react';
import { useNavigate } from 'react-router-dom';
import S from './Styled.Login';

const Signup = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');
  };

  const signin = () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${'342566fe063dfa8affd1ddc743c2aa6a'}&redirect_uri=${'http://localhost:3000/logining'}&response_type=code`;
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
          onClick={signin}
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
          <S.JoinSection>이미 아이디가 있으신가요?</S.JoinSection>
          <S.GotoJoin onClick={goToLogin}>로그인</S.GotoJoin>
        </S.JoinBox>
      </S.LogBox>
    </S.LogBox_out>
  );
};

export default Signup;
