import React from 'react';
import S from './Styled.Loading';

const Loading = ({ loadingData }) => {
  const { arrive_name, arrive_name_code, departure_day, arrive_day } =
    loadingData;
  return (
    <S.Loading>
      <S.Video
        src="/images/Loading/Flight_mv.mp4"
        type="video/mp4"
        autoPlay
        muted
        playsInline
      ></S.Video>
      <S.Text>
        <S.TextBox>
          <S.TextTop>
            서울에서 {arrive_name}까지
            <br />
            왕복 항공권을 찾고 있습니다.
          </S.TextTop>
          <S.TextMiddle>
            <S.MiddleData>
              <strong>SEL</strong>
              <span>서울</span>
              <span>{departure_day}</span>
            </S.MiddleData>
            <S.MiddleArrow>
              <img src="/images/Loading_arrow.svg" alt="" />
            </S.MiddleArrow>
            <S.MiddleData>
              <strong>{arrive_name_code}</strong>
              <span>{arrive_name}</span>
              <span>{arrive_day}</span>
            </S.MiddleData>
          </S.TextMiddle>
        </S.TextBox>
      </S.Text>
    </S.Loading>
  );
};

export default Loading;
