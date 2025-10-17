import React, { useState } from 'react'

const Numbers = ({ error , selectedNumber,setSelectedNumber}) => {
    const arrNumber = [1,2,3,4,5,6];
    
    
  return (
    <div className='flex gap-3 flex-col items-end py-4'>
        <p className='text-red-500'>{error}</p>
       <div className='flex gap-4 py-2'>
        {arrNumber.map((value, i)=>(
            <p
            onClick={()=>setSelectedNumber(value)}
             key={i} 
             className={`h-[72px] w-[72px] border-black border-2 cursor-pointer grid  place-items-center text-[24px] font-bold rounded transition-colors duration-200
                ${selectedNumber===value ? 'bg-black text-white':'bg-white text-black hover:bg-black hover:text-white'}`}>{value}</p>
        ))}
        </div>
        <p className='text-[24px] font-bold text-right'>Select Number</p>
       
    </div>
  )
}

export default Numbers