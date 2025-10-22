 import React, { useEffect, useState } from 'react'
 
const Cards = ({ data , loading , search , error }) => {

 const filteredData = data?.filter(food => {
   return food.name.toLowerCase().includes(search?.toLowerCase() || '')
 }) || []
  if(error) return <div>{error}</div>
  if(loading) return <div>Loading...</div>
   return (
    <div className="flex justify-center items-center min-h-screen p-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
      {filteredData?.map((food, index) => (
        <div key={index} className="relative  bg-opacity-30 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20 shadow-2xl">
          {/* Food Image */}
          <div className="flex justify-center mb-4">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white border-opacity-30 shadow-lg">
              <img 
                src={`http://localhost:9000${food.image}`}
                alt={food.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Food Name */}
          <h3 className="text-white text-xl font-bold text-center mb-3 uppercase tracking-wide">
            {food.name}
          </h3>
          
          {/* Description */}
          <p className="text-white text-opacity-80 text-sm text-center mb-6 leading-relaxed">
            {food.text}
          </p>
          
          {/* Price Button */}
          <div className="flex justify-center">
            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105">
              ${food.price}.00
            </button>
          </div>
        </div>
         ))}
         </div>
       </div>
   )
 }
 
 export default Cards