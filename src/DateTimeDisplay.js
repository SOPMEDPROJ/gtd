import React from 'react';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={isDanger ? 'countdown danger' : 'countdown'}>
      <p className='text-3xl'>{value}</p>
      <span className='text-smoke font-light text-xl'>{type}</span>
    </div>
  );
};

export default DateTimeDisplay;