import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import styles from './App.module.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.container}>
      <div className={styles.titleCtn}>
        <h1>ROCK, PAPER, SCISSORS</h1>
        <p>React Game!</p>
      </div>
    </div>
  )
}

export default App
