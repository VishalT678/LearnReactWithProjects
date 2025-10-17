import React from 'react'
import {useContext} from "react";
import { MyContext } from '../context/MyContext';

function UpdateValue() {
    const {setValue} = useContext(MyContext);
  return (
    <button
    className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-full shadow transition"
    onClick={() => setValue("Context Updated!")}
  >
    Update Context Value
  </button>
  )
}

export default UpdateValue;
