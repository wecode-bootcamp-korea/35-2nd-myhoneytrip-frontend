import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import styled from 'styled-components';
import styles from './Passenger.module.css';

const theme = createTheme({
  palette: {
    primary: blue,
    secondary: { main: '#E57FCA' },
  },
});

function Passenger({ open, onClose, count, passengerInfo, setPassengerInfo }) {
  return (
    <Dialog
      class={styles.passenger}
      onClose={onClose}
      open={open}
      BackdropProps={{ invisible: true }}
    >
      <Box className={styles.lists}>
        <ModalHeader>
          <span>인원 & 좌석등급</span>
          <i className="fa-solid fa-xmark" onClick={onClose}></i>
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
      </Box>
    </Dialog>
  );
}

Passenger.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

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

const Box = styled.div`
  width: 360px;
  height: 260px;
  padding: 25px;
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
