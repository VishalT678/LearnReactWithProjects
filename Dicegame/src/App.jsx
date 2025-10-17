import { useState } from 'react'
import './App.css'
import StartGame from './components/StartGame'
import GamePlay from './components/GamePlay';

function App() {
  const [gameStarted , setGameStarted] = useState(false);
  const toggleGameStarted =()=>{
    setGameStarted((prev)=>!prev);
  }


  return (
    <>
      {gameStarted ? <GamePlay /> : <StartGame toggle={toggleGameStarted} />}
    </>
  )
}

export default App
