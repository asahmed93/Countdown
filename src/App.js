import './App.css';
import { useState } from 'react';
import CountdownTimer from './Components/CountdownTimer';
import DatePicker from './Components/DatePicker';
import NavBar from './Components/NavBar';

function App() {
  const [targetDate, setTargetDate] = useState(new Date());

  const handleDateChange = (date) => {
    if (date) setTargetDate(new Date(date));
  };

  return (
    <div className="App">
      <div className="app-header">
        <NavBar />
      </div>
      <div className="main">
        <h1>Countdown Timer</h1>
        <DatePicker handleDateChange={handleDateChange} date={targetDate} />
        <CountdownTimer targetDate={targetDate} />
      </div>
    </div>
  );
}

export default App;
