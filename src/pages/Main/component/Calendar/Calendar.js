import React from 'react';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import 'react-datepicker/dist/react-datepicker.css';
import './Calendar.css';

const Calendar = ({
  setDateRange,
  startDate,
  endDate,
  patternChange,
  onewayDate,
  setOnewayDate,
}) => {
  const oneWayOrRound = {
    ...(patternChange
      ? {
          placeholderText: '가는날 입력',
          selected: onewayDate,
          onChange: function (update) {
            setOnewayDate(update);
          },
        }
      : {
          placeholderText: '가는날 입력  -  오는날 입력',
          selectsRange: true,
          startDate,
          endDate,
          onChange: function (update) {
            setDateRange(update);
          },
        }),
  };

  return (
    <DatePicker
      locale={ko}
      {...oneWayOrRound}
      monthsShown={2}
      isClearable={true}
      dateFormat=" MM. dd  (eee) "
      minDate={new Date()}
      showPopperArrow={false}
      renderCustomHeader={({
        monthDate,
        customHeaderCount,
        decreaseMonth,
        increaseMonth,
      }) => (
        <div>
          <button
            aria-label="Previous Month"
            className="react-datepicker__navigation react-datepicker__navigation--previous"
            style={customHeaderCount === 1 ? { visibility: 'hidden' } : null}
            onClick={decreaseMonth}
          >
            <span className="react-datepicker__navigation-icon react-datepicker__navigation-icon--previous">
              {'<'}
            </span>
          </button>
          <span className="react-datepicker__current-month">
            {monthDate.toLocaleString('ko', {
              month: 'long',
              year: 'numeric',
            })}
          </span>
          <button
            aria-label="Next Month"
            className="react-datepicker__navigation react-datepicker__navigation--next"
            style={customHeaderCount === 0 ? { visibility: 'hidden' } : null}
            onClick={increaseMonth}
          >
            <span className="react-datepicker__navigation-icon react-datepicker__navigation-icon--next">
              {'>'}
            </span>
          </button>
        </div>
      )}
    />
  );
};

export default Calendar;
