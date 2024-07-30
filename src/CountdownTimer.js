import React, { useState, useEffect } from 'react';
import './CountdownTimer.css';

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2024-08-15') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-timer">
      {timeLeft.days !== undefined ? (
        <div className="time-boxes">
          <div className="time-box">
            <span className="time">{timeLeft.days}</span>
            <span className="label">Օր</span>
          </div>
          <div className="time-box">
            <span className="time">{timeLeft.hours}</span>
            <span className="label">Ժամ</span>
          </div>
          <div className="time-box">
            <span className="time">{timeLeft.minutes}</span>
            <span className="label">Րոպե</span>
          </div>
          <div className="time-box">
            <span className="time">{timeLeft.seconds}</span>
            <span className="label">Վայրկյան</span>
          </div>
        </div>
      ) : (
        <div>Time's up!</div>
      )}
    </div>
  );
};

export default CountdownTimer;
