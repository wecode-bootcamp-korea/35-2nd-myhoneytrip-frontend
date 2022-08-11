import { useNavigate } from 'react-router-dom';
import S from './Styled.Nav';

const Nav = () => {
  const navigate = useNavigate();

  const tokenValid = localStorage.getItem('token');

  const goToLogin = () => {
    navigate('/login');
  };
  const goToSign = () => {
    navigate('/Signup');
  };

  const goToMypage = () => {
    navigate('/mypage');
  };

  const goToMain = () => {
    navigate('/');
  };

  const logoutFunction = () => {
    localStorage.removeItem('token');
    alert('다음에 또 만나요!');
    navigate('/');
  };

  return (
    <S.Header>
      <S.Container>
        <S.ImgBox
          src="/images/Nav/logo.svg"
          alt="site_logo"
          onClick={goToMain}
        />
        <S.SearchBox>
          <S.SearchInput placeholder="도시나 상품을 검색해보세요" />
          <i class="fa-solid fa-magnifying-glass"></i>
        </S.SearchBox>
        <S.LoginBox>
          <S.LoginArea>
            {tokenValid ? (
              <S.Button_none onClick={logoutFunction}>로그아웃</S.Button_none>
            ) : (
              <S.Button_none onClick={goToLogin}>로그인</S.Button_none>
            )}
            {!tokenValid ? (
              <S.Button_border onClick={goToSign}>회원가입</S.Button_border>
            ) : (
              <S.Button
                onClick={goToMypage}
                src="/images/Nav/bee.png"
              ></S.Button>
            )}
            <S.Button onClick={goToMypage} src="/images/Nav/bee.png"></S.Button>
          </S.LoginArea>
        </S.LoginBox>
      </S.Container>
    </S.Header>
  );
};

export default Nav;
