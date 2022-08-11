import React from 'react';
import S from './Styled.Footer';

const Footer = () => {
  return (
    <S.FooterAll>
      <S.FooterLeft>
        <S.Footer>고객지원실 운영 안내</S.Footer>
        <S.Content>
          연중무휴 09:00 - 18:00 (점심시간 12:00-13:00)
          <br /> 주말/공휴일 포함, 한국시간 기준 <br />※ 항공권 환불/변경은 평일
          09:00-17:00 접수 가능 <br />
          유선상담 1670-8282
        </S.Content>
        <S.Chatting>1:1 채팅상담</S.Chatting>
      </S.FooterLeft>
      <S.FooterRight>
        {ROW_FOOTER.map((item, idx) => {
          return (
            <S.MapAll key={item.title}>
              <S.MapTitle>{item.title}</S.MapTitle>
              <S.MapContent>
                {item.content.map((content, idx) => {
                  return <div key={content}>{content}</div>;
                })}
              </S.MapContent>
            </S.MapAll>
          );
        })}
      </S.FooterRight>
    </S.FooterAll>
  );
};

export default Footer;

const ROW_FOOTER = [
  {
    title: '소개',
    content: ['회사소개', '채용', '공고'],
  },
  {
    title: '파트너',
    content: [
      '파트너 등록하기',
      'Affiliate 프로그램',
      '리얼파트너',
      '파트너 블로그',
    ],
  },
  {
    title: '지원',
    content: ['자주 묻는 질문', '최저가 보장제'],
  },
];
