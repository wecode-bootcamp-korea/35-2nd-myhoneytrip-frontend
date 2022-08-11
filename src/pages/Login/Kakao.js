import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Kakao = () => {
  const navigate = useNavigate();

  let params = new URL(window.location.href).searchParams;
  let code = params.get('code');

  useEffect(() => {
    fetch(`http://10.58.1.42:8000/users/signin/kakao`, {
      method: 'POST',
      body: JSON.stringify({ authorize_code: code }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'SUCCESS') {
          localStorage.setItem('token', res.token);
          localStorage.setItem('kakaotoken', res.kakao_token);
          navigate('/');
        }
      });
  }, [code, navigate]);
};

export default Kakao;
