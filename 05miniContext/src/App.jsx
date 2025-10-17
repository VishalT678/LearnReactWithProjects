import { useState } from 'react'
import './App.css'
import MyProvider from './context/MyProvider'
import DisplayValue from './components/DisplayValue'
import UpdateValue from './components/UpdateValue'

function App() {
  const [count, setCount] = useState(0)

  return (
   <MyProvider>
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <DisplayValue/>
      <UpdateValue />
    </div>
   </MyProvider>
  )
}

export default App
