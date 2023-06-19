import { useState } from 'react';
import './App.css';

function App() {

  let time = new Date().toLocaleTimeString();

  const [currentTime, setCurrentTime] = useState(time);

  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setCurrentTime(time)
  }

  setInterval(updateTime, 1000)

  return (
    <div className="hii">
     <h1 className='main' >{currentTime}</h1>
     <h3>(◍•ᴗ•◍)</h3>
    </div>
  );
}

export default App;
