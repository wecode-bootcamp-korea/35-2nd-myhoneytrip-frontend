import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import styled from 'styled-components';

const theme = createTheme({
  palette: {
    primary: blue,
    secondary: { main: '#E57FCA' },
  },
});

function Passenger({ shown, close, count, passengerInfo, setPassengerInfo }) {
  return shown ? (
    <ModalBackdrop
      onClick={() => {
        close();
      }}
    >
      <ModalContent
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <PassengerModal>
          <ModalHeader>
            <span>인원 & 좌석등급</span>
            <i className="fa-solid fa-xmark" onClick={close}></i>
          </ModalHeader>
          <ModalMain>
            <ModalList>
              <ListContent>
                <span>성인</span> <span>만 12세이상</span>
              </ListContent>
              <ListCount>
                <i
                  className="fa-solid fa-circle-minus"
                  onClick={() => {
                    count > 1 &&
                      setPassengerInfo({ ...passengerInfo, count: count - 1 });
                  }}
                ></i>
                <div>{count}</div>
                <i
                  className="fa-solid fa-circle-plus"
                  onClick={() => {
                    setPassengerInfo({ ...passengerInfo, count: count + 1 });
                  }}
                ></i>
              </ListCount>
            </ModalList>
          </ModalMain>
          <RowRadioButtonsGroup
            passengerInfo={passengerInfo}
            setPassengerInfo={setPassengerInfo}
          ></RowRadioButtonsGroup>
        </PassengerModal>
      </ModalContent>
    </ModalBackdrop>
  ) : null;
}

export default Passenger;

function RowRadioButtonsGroup({ passengerInfo, setPassengerInfo }) {
  const SEATS = [
    {
      value: '비즈니스석',
    },
    {
      value: '일반석',
    },
    {
      value: '할인석',
    },
  ];
  return (
    <ThemeProvider theme={theme}>
      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          {SEATS.map((element, i) => {
            return (
              <FormControlLabel
                key={i}
                value={element.value}
                control={
                  <Radio
                    color="secondary"
                    onClick={e => {
                      setPassengerInfo({
                        ...passengerInfo,
                        seat: e.target.value,
                      });
                    }}
                  />
                }
                label={element.value}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
    </ThemeProvider>
  );
}

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

const ModalContent = styled.div`
  height: 270px;
  background-color: white;
  padding: 25px;
  border: none;
  border-radius: 3px;
  transform: translate(385px, -40px);
  box-shadow: 0px 11px 15px -7px rgb(0 0 0 / 10%),
    0px 24px 38px 3px rgb(0 0 0 / 5%), 0px 9px 46px 8px rgb(0 0 0 / 2%);
`;

const PassengerModal = styled.div`
  width: 345px;
  height: 200px;
  padding: 20px;
  background-color: white;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 30px;

  i {
    cursor: pointer;
  }
`;

const ModalMain = styled.div`
  border-bottom: 1px solid black;
`;

const ModalList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

const ListContent = styled.div`
  span:first-child {
    display: block;
    padding: 5px 0;
  }
  span:last-child {
    color: gray;
    font-size: 12px;
  }
`;

const ListCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: inline-block;
    margin: 0 13px;
    font-size: 20px;
  }
  i {
    font-size: 30px;
    color: white;
    background-color: pink;
    border: 1px solid pink;
    border-radius: 30px;
    cursor: pointer;
  }
`;
