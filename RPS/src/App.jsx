import { useEffect, useState } from 'react';
import './App.css';
import {FaRegHandPaper, FaRegHandRock, FaRegHandScissors} from 'react-icons/fa';
import styles from './App.module.css';


function App() {
  const [count, setCount] = useState(0)

  const [playerHand, setPlayerHand] = useState(0);
  const [computerHand, setComputerHand] = useState(0);
  const [timer, setTimer] = useState(3);
  const [runTimer, setRunTimer] = useState(false);
  const [results, setResults] = useState({
    winner: '',
    message: '',
  });

  const [score, setScore] = useState({
    player: 0,
    computer: 0,
  })

  useEffect(() => {
    if(runTimer && timer > 0) {
      setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
    } else if (runTimer && timer < 1){
      setRunTimer(false);
      setTimer(3);
      play();
    }
  }, [runTimer, timer]);


  const options = [
    {name: 'rock', icon: <FaRegHandRock size = {60} /> },
    {name: 'paper', icon: <FaRegHandPaper size = {60} /> },
    {name: 'scissors', icon: <FaRegHandScissors size = {60} /> },
  ]

  const selectOption = (handIndex) => {
    setResults({winner: '',message: ''});
    setPlayerHand(handIndex);
  }

  const generateComputerHand = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    // console.log("random",randomNumber);
    setComputerHand(randomNumber);
  }

  const start = () => {
    setResults({winner: '',message: ''});
    setRunTimer(true);
    generateComputerHand();
  };

  const play = () => {
    // console.log('PLaying');
    if (options[playerHand].name === options[computerHand].name ) {
      setResults({winner: 'No one', message: 'We have a draw'});
    }
    else if (options[playerHand].name === 'rock' && options[computerHand].name === 'paper') {
      setResults({winner: 'Computer', message: 'Paper beats Rock'});
      setScore({player: score.player, computer: score.computer+1})
    }
    else if (options[playerHand].name === 'rock' && options[computerHand].name === 'scissors') {
      setResults({winner: 'Player', message: 'Rock beats Scissors'});
      setScore({player: score.player+1, computer: score.computer})

    }
    else if (options[playerHand].name === 'paper' && options[computerHand].name === 'rock') {
      setResults({winner: 'Player', message: 'Paper beats Rock'});
      setScore({player: score.player+1, computer: score.computer})
    }
    else if (options[playerHand].name === 'paper' && options[computerHand].name === 'scissors') {
      setResults({winner: 'Computer', message: 'Scissors beats Paper'});
      setScore({player: score.player, computer: score.computer+1})

    }
    else if (options[playerHand].name === 'scissors' && options[computerHand].name === 'rock') {
      setResults({winner: 'Computer', message: 'Rock beats Scissors'});
      setScore({player: score.player, computer: score.computer+1})

    }
    else if (options[playerHand].name === 'scissors' && options[computerHand].name === 'paper') {
      setResults({winner: 'Player', message: 'Scissors beats Paper'});
      setScore({player: score.player+1, computer: score.computer})

    }
    

  };

  console.log("ComputerHand",computerHand);
  // console.log("PlayerHand",playerHand);

  return (
    <div className={styles.container}>
      <div className={styles.titleCtn}>
        <h1>ROCK, PAPER, SCISSORS</h1>
        <p>React Game!</p>
      </div>
      <div className={styles.scoreCtn}>
        <div className={styles.score}>
          <h3>Player</h3>
          <p>Score: {score.player}</p>
        </div>
        <div className={styles.score}>
          <h3>Computer</h3>
          <p>Score: {score.computer}</p>
        </div>
      </div>
      <div className={styles.results}>
        <div className={`${styles.playerHand} ${results.winner === 'Player' ? styles.winnerAnimation : ''}`}>
          {runTimer && <div className={styles.playerShake}>{options[0].icon} </div>}
          
          {results?.winner && (
            <>
              {options[playerHand].icon}
              <p>{options[playerHand].name}</p>
            </>

          )}
          
        </div>  
        
        <div className={styles.midCol}>
          {runTimer && <p className={styles.timer}> {timer} </p>}
          
          {results?.winner && (
            <>
              <p className={styles.resultsWinner}> Winner: {results.winner}</p>
              <p className={styles.resultsMessage}> {results.message}</p>
            </>
          )}
          
        </div>
        
        <div className={`${styles.computerHand} ${results.winner === 'Computer' ? styles.winnerAnimation : ''}`}>
        {runTimer && <div className={styles.computerShake}>{options[0].icon} </div>}
        {results?.winner && (
            <>
              {options[computerHand].icon}
              <p>{options[computerHand].name}</p>
            </>
          )}
          
        </div>
      </div>
      <div className={styles.choiceBtnCtn}>
        <button className={`${styles.choiceBtn} ${styles.bounce} ${playerHand === 0 ? styles.activeChoice: ''}`}  onClick ={() => selectOption(0)} >
          <FaRegHandRock size={60}/>
          <p>Rock</p>
        </button>
        <button className={`${styles.choiceBtn} ${styles.bounce} ${playerHand === 1 ? styles.activeChoice: ''}`} onClick ={() => selectOption(1)}>
          <FaRegHandPaper size={60}/>
          <p>Paper</p>
        </button>
        <button className={`${styles.choiceBtn} ${styles.bounce} ${playerHand === 2 ? styles.activeChoice: ''}`} onClick ={() => selectOption(2)}>
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
