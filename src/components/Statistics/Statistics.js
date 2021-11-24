import PropTypes from 'prop-types';
import React from 'react';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={s.counters}>
    <span className={s.counter}>Good: {good}</span>
    <span className={s.counter}>Neutral: {neutral}</span>
    <span className={s.counterBad}>Bad: {bad}</span>
    <span className={s.counter}>
      <span className={s.total}>Total: </span>
      {total}
    </span>
    <span className={s.counter}>
      <span className={s.percent}>Positive feedback: </span>
      {`${positivePercentage}%`}
    </span>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
