import React, { useEffect, useState } from 'react';

const DatePicker = ({ handleDateChange, date }) => {
    const [selectedDate, setSelectedDate] = useState(date);

    const handleInputChange = (e) => {
        const inputDate = new Date(e.target.value + 'T00:00:00Z'); // Ensure consistent time
        setSelectedDate(inputDate);
        handleDateChange(inputDate);
    };

    return (
        <div>
            <input type="date" onChange={handleInputChange} value={selectedDate.toISOString().split('T')[0]} />
            <p>Selected Date: {selectedDate.toISOString().split('T')[0]}</p>
        </div>
    );
};

export default DatePicker;
