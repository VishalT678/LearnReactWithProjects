import React from 'react'

const StartGame = ({toggle}) => {
  return (
    <>
    <div className='flex justify-center items-center h-screen '>
    <div>
        <img src="images/Dices.png" alt='dice image' className='w-[90vh]' />
    </div>
    <div>
        <h1 className='poppins-extrabold text-7xl font-bold'>DICE GAME</h1>
        <button 
        onClick={toggle}
        className='poppins-thin cursor-pointer mt-4 hover:bg-white hover:text-black  border-black border-2 transition-all duration-300 bg-black text-white px-10 py-1 rounded ml-59 '>Play Now</button>
    </div>
    </div>
    </>
  )
}

export default StartGame