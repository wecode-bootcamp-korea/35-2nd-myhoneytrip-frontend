import React from 'react';
import S from './Styled.Loading';

const Loading = ({ loadingData }) => {
  const { arrive_name, arrive_name_code, departure_day, arrive_day } =
    loadingData;
  const overTen = num => {
    return num > 9 ? num : '0' + num;
  };
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
              <span>2022년 08월 {overTen(departure_day)}일</span>
            </S.MiddleData>
            <S.MiddleArrow>
              <img src="/images/Loading_arrow.svg" alt="" />
            </S.MiddleArrow>
            <S.MiddleData>
              <strong>{arrive_name_code}</strong>
              <span>{arrive_name}</span>
              <span>2022년 08월 {overTen(arrive_day)}일</span>
            </S.MiddleData>
          </S.TextMiddle>
        </S.TextBox>
      </S.Text>
    </S.Loading>
  );
};

export default Loading;
