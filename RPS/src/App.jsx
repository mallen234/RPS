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
      <div className={styles.scoreCtn}>
        <div className={styles.score}>
          <h3>Player</h3>
          <p>Score: 0</p>
        </div>
        <div className={styles.score}>
          <h3>Computer</h3>
          <p>Score: 0</p>

        </div>
      
      </div>
      <div className={styles.results}>
        <div className={styles.playerHand}>
        <div classname={styles.midCol}>
          <p>Winner:: Player</p>
          <p>Rock beats scissors</p>
        </div>
        </div>
        <div className={styles.computerHand}>
          
        </div>
      </div>
    </div>
    
  )
}

export default App
