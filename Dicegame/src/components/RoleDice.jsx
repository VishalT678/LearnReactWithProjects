import React,{useState} from 'react'

const RoleDice = ({currentDice , roleDice}) => {
    

  return (
    
    <div className='mt-15 flex flex-col items-center '>
        <div className=' cursor-pointer'
        onClick={roleDice}
        >
           <img className= "w-[22vh]" src={`/images/Dice/dice_${currentDice}.png`} alt="dice 1" /> 
        </div>
        
        <p className='text-[24px]'>Click on Dice to roll</p>
    </div>
    
    
    
  )
}

export default RoleDice