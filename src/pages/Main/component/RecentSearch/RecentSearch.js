import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const RecentSearch = () => {
  const navigate = useNavigate();
  const recentData = JSON.parse(localStorage.getItem('recentData'));
  const recentThree = [
    recentData[recentData.length - 3],
    recentData[recentData.length - 2],
    recentData[recentData.length - 1],
  ];
  const recentFiltered = recentThree.filter(
    (element, i) => element !== undefined
  );

  const recentDataFetch = (
    destination,
    departureDate,
    returnDate,
    passengerCount
  ) => {
    const DEPARTURE_LOCATION = 'Seoul';
    const destinationMatch = {
      '☀️ 몰디브': 'Maldive',
      '🏝 발리': 'Bali',
      '🏖 하와이': 'Hawaii',
      '🌊 칸쿤': 'Cancun',
    };
    const destinationLocation = destinationMatch[destination];

    const loadingDataMatch = {
      '☀️ 몰디브': ['MLE', '몰디브'],
      '🏝 발리': ['DPS', '발리'],
      '🏖 하와이': ['HNL', '하와이'],
      '🌊 칸쿤': ['CUN', '칸쿤'],
    };

    const loadingLocationCode = loadingDataMatch[destination];

    navigate(
      `/reservation?departure_name=${DEPARTURE_LOCATION}&destination_name=${destinationLocation}&departure_date=${departureDate}&return_date=${returnDate}&passenger=${passengerCount}`,
      {
        state: {
          arrive_name: loadingLocationCode[1],
          arrive_name_code: loadingLocationCode[0],
          departure_day: departureDate,
          arrive_day: returnDate,
        },
      }
    );
  };

  // const deleteStorage = e => {
  //   const target = e.target.parentElement.parentElement;
  //   recentData.forEach(element => {
  //     console.log(element.innerText);
  //   });
  //   console.dir(target);
  //   const recentDeleteData = recentData.filter(element => {
  //     element;
  //   });
  //   localStorage.setItem('recentData', JSON.stringify(newSearchArray));
  // };

  return (
    <RecentContainer>
      <RecentTitle>최근 검색한 항공권</RecentTitle>

      <RecentContentBox>
        {recentFiltered.map((element, i) => {
          const { destination, departureDate, returnDate, passengerCount } =
            element;

          const [startMonth, startDate, endMonth, endDate] = [
            new Date(departureDate).getMonth() + 1,
            new Date(departureDate).getDate(),
            new Date(returnDate).getMonth() + 1,
            new Date(returnDate).getDate(),
          ];

          const fetchDateMatch = {
            ...(!returnDate
              ? {
                  departureDate: new Date(departureDate).getDate(),
                  returnDate: 0,
                }
              : {
                  departureDate: new Date(departureDate).getDate(),
                  returnDate: new Date(returnDate).getDate(),
                }),
          };

          return (
            <RecentContent
              key={i}
              id={i}
              onClick={() => {
                recentDataFetch(
                  destination,
                  fetchDateMatch.departureDate,
                  fetchDateMatch.returnDate,
                  passengerCount
                );
              }}
            >
              <RecentContentUpLine>
                <RecentPatternBox>
                  {returnDate ? '왕복' : '편도'}
                </RecentPatternBox>
                {/* <i
                  className="fa-solid fa-xmark"
                  onClick={e => {
                    deleteStorage(e);
                  }}
                ></i> */}
              </RecentContentUpLine>
              <RecentContentPlan>
                서울 (SEL) <i className="fa-solid fa-arrows-rotate"></i>{' '}
                {destination}
              </RecentContentPlan>
              <RecentDetail>
                {startMonth}월 {startDate}일 - {endMonth}월 {endDate}일 - 성인
                {passengerCount}명
              </RecentDetail>
            </RecentContent>
          );
        })}
      </RecentContentBox>
    </RecentContainer>
  );
};

export default RecentSearch;

const RecentContainer = styled.div`
  padding: 30px 0;
`;

const RecentTitle = styled.div`
  font-size: 20px;
  margin-bottom: 15px;
`;

const RecentContentBox = styled.div`
  ${props => props.theme.variables.flexSet('row', 'flex-start', 'center')};
`;

const RecentContent = styled.div`
  width: 400px;
  height: 130px;

  padding: 25px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  :nth-child(2) {
    margin: 0 20px;
  }
`;

const RecentContentUpLine = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const RecentPatternBox = styled.div`
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.style.pink};
  border-radius: 3px;
  font-size: 11px;
  font-weight: bold;
  color: ${({ theme }) => theme.style.pink};
`;

const RecentContentPlan = styled.div`
  margin-bottom: 10px;

  i {
    margin: 0px 5px;
    color: gray;
  }
`;

const RecentDetail = styled.div`
  font-size: 13px;
  color: gray;
`;
