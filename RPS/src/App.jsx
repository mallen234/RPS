import { useState } from 'react';
import './App.css';
import {FaRegHandPaper, FaRegHandRock, FaRegHandScissors} from 'react-icons/fa';
import styles from './App.module.css';


function App() {
  const [count, setCount] = useState(0)

  const [playerHand, setPlayerHand] = useState(0);
  const [computerHand, setComputerHand] = useState(0);


  const selectOption = (handIndex) => {
    setPlayerHand(handIndex);
  }

  const start = () => {
    generateComputerHand();
  }

  const generateComputerHand = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    console.log("random",randomNumber)
    setComputerHand(randomNumber);



  }

  console.log("ComputerHand",computerHand);
  console.log("PlayerHand",playerHand);

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
          <FaRegHandRock size={100}/>
          <p>Rock</p>
        </div>  
        <div className={styles.midCol}>
          <p className={styles.resultsWinner}> 
            Winner: Player
          </p>
          <p className={styles.resultsMessage}> 
            Rock beats scissors
          </p>
        </div>
        <div className={styles.computerHand}>
          <FaRegHandRock size={100}/>
          <p>Rock</p>
        </div>
      </div>
      <div className={styles.choiceBtnCtn}>
        <button className={`${styles.choiceBtn} ${styles.bounce}`} onClick ={() => selectOption(0)} >
          <FaRegHandRock size={60}/>
          <p>Rock</p>
        </button>
        <button className={`${styles.choiceBtn} ${styles.bounce}`} onClick ={() => selectOption(1)}>
          <FaRegHandPaper size={60}/>
          <p>Paper</p>
        </button>
        <button className={`${styles.choiceBtn} ${styles.bounce}`} onClick ={() => selectOption(2)}>
          <FaRegHandScissors size={60}/>
          <p>Scissors</p>
        </button>
      </div>
      <button className={styles.playBtn} onClick={start}>
        Play
      </button>
    </div>
    
  )
}

export default App
