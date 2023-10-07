import React from 'react';
import DateTimeDisplay from './DateTimeDisplay';
import { useCountdown } from './hooks/useCountdown';

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
        <h2 className='text-2xl text-white mb-4'>ДО КОНЦА ЗАПИСИ НА КУРС ОСТАЛОСЬ:</h2>
        <div className=' flex text-center gap-[2vw] mb-10'>
            <DateTimeDisplay value={days} type={'Дней'} isDanger={days <= 3} />
        <p>:</p>
        <DateTimeDisplay value={hours} type={'Часов'} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={'Минут'} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={'Секунд'} isDanger={false} />
        </div>

    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
