import React from 'react'
import {useContext} from "react";
import { MyContext } from '../context/MyContext';

function DisplayValue() {
    const {value} = useContext(MyContext);
  return (
    <div className='text-xl font-bold mb-4'>
      Context Value : <span className='text-blue-600'>{value}</span>
    </div>
  )
}

export default DisplayValue;
