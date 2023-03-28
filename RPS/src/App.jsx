import { useState } from 'react';
import './App.css';
import {FaRegHandPaper, FaRegHandRock, FaRegHandScissors} from 'react-icons/fa';
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
        <div className={styles.playerRock}>
          <FaRegHandPaper size={60}/>
          <p>Rock</p>
        </div>  
        <div classname={styles.midCol}>
          <p classname={styles.resultsWinner} >Winner:: Player</p>
          <p classname={styles.resultsMessage} >Rock beats scissors:: Player</p>
          <p>Rock beats scissors</p>
        </div>
        <div className={styles.computerRock}>
          <FaRegHandPaper size={60}/>
          <p>Rock</p>
        </div>
      </div>
    </div>
    
  )
}

export default App
