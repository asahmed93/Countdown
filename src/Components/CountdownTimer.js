import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const currentDate = new Date();
        const difference = targetDate.getTime() - currentDate.getTime();

        const daysLeft = Math.floor(difference / (1000 * 60 * 60 * 24));
        const yearsLeft = Math.floor(daysLeft / 365);
        const hoursLeft = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutesLeft = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const secondsLeft = Math.floor((difference % (1000 * 60)) / 1000)

        return {
            years: yearsLeft,
            days: daysLeft % 365,
            hours: hoursLeft,
            minutes: minutesLeft,
            seconds: secondsLeft
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div>
            <h1>Countdown Timer</h1>
            {timeLeft.years <= 0 && timeLeft.days <= 0 && timeLeft.hours <= 0 && timeLeft.minutes <= 0 && timeLeft.seconds <= 0 && (
                <span>Select a date in the future to count down to!</span>
            )}
            {timeLeft.years > 0 && (
                <span> {timeLeft.years} {timeLeft.years === 1 ? 'year' : 'years'}</span>
            )}
            {timeLeft.days > 0 && (
                <span> - {timeLeft.days} {timeLeft.days === 1 ? 'day' : 'days'} </span>
            )}
            {timeLeft.hours > 0 && (
                <span> - {timeLeft.hours} {timeLeft.hours === 1 ? 'hour' : 'hours'}</span>
            )}
            {timeLeft.minutes > 0 && (
                <span> - {timeLeft.minutes} {timeLeft.minutes === 1 ? 'minute' : 'minutes'}</span>
            )}
            {timeLeft.seconds > 0 && (
                <span> - {timeLeft.seconds} {timeLeft.seconds === 1 ? 'second' : 'seconds'}</span>
            )}
        </div>
    );
};

export default CountdownTimer;
