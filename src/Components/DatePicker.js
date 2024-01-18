import React, { useEffect, useState } from 'react';

const DatePicker = ({ handleDateChange, date }) => {
    useEffect(() => {
        console.log(date.toString());
    }, [date]);

    return (
        <div>
            <input type="date" onChange={(e) => handleDateChange(e.target.value)} />
            <p>Selected Date: {date.toLocaleDateString("en-US")}</p>
        </div>
    );
};

export default DatePicker;
