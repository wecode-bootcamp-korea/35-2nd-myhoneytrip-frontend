import React from 'react';
import { useNavigate } from 'react-router-dom';
import S from './Styled.Nav';

const Nav = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <S.Header>
      <S.Container>
        <S.ImgBox src="/images/Nav/logo.svg" alt="site_logo" />
        <S.SearchInput placeholder="도시나 상품을 검색해보세yo" />
        <S.LoginBox>
          <S.LoginArea>
            <S.Button_none onClick={goToLogin}>로그인</S.Button_none>
            <S.Button_border>회원가입</S.Button_border>
          </S.LoginArea>
        </S.LoginBox>
      </S.Container>
    </S.Header>
  );
};

export default Nav;
