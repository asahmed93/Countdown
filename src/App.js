import './App.css';
import { useState } from 'react';
import CountdownTimer from './Components/CountdownTimer';
import DatePicker from './Components/DatePicker';

function App() {
  const [targetDate, setTargetDate] = useState(new Date());

  const handleDateChange = (date) => {
    if (date) setTargetDate(new Date(date));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Countdown Timer</h1>
        <DatePicker handleDateChange={handleDateChange} date={targetDate} />

        <CountdownTimer targetDate={targetDate} />

      </header>
    </div>
  );
}

export default App;
