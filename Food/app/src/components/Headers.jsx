import React from "react";

const Headers = ({search , setSearch , filterFood}) => {

  return (
    <>
      <div className="bg-[#323334]  p-10 ">
        <div className="flex justify-between">
          <img src="logo.svg" alt="logo" />
          <input
            className="border-2 border-red-800 text-white placeholder:text-white placeholder:p-2 rounded"
            type="text"
            placeholder="Search Food.."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex gap-3 mt-10 items-center justify-center">
          <button
          onClick={()=>filterFood("all")} 
          className="bg-[#ff4433] rounded text-white p-2 cursor-pointer ">
            
            All
          </button>
          <button
          onClick={()=>filterFood("breakfast")} 
          className="bg-[#ff4433] rounded text-white p-2 cursor-pointer ">
            
            Breakfast
          </button>
          <button
          onClick={()=>filterFood("lunch")} 
          className="bg-[#ff4433] rounded text-white p-2 cursor-pointer ">
            
            Lunch
          </button>
          <button
          onClick={()=>filterFood("dinner")} 
          className="bg-[#ff4433] rounded text-white p-2 cursor-pointer ">
            
            Dinner
          </button>
        </div>
      </div>
    </>
  );
};

export default Headers;
