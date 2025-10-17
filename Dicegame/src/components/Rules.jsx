import React from 'react'

const Rules = () => {
  return (
    <div className="flex flex-col gap-3 bg-red-100 rounded p-6 max-w-200 mt-2 w-full mx-auto shadow-sm">
    <h1 className="poppins-bold text-[24px] mt-4">How to play dice game</h1>
    <p className=" poppins-regular">
      Select any number <br /> Click on dice image <br /> after click on
      dice if selected number is equal to dice number you will get same
      point as dice <br /> if you get wrong guess then 2 point will be
      dedcuted
    </p>
  </div>
  )
}

export default Rules