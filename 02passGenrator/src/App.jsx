import { useState , useCallback , useEffect , useRef} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(6)
  const [number , setNumber] = useState(false);
  const [char , setchar] = useState(false);
  const [password , setPassword] = useState("")

  const passwordRef = useRef(null)

 

  const passwordGenrator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number) str+= "0123456789"
    if(char) str+= "!@#$%^&*-_+=[]{}~`"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random()*str.length+1);
      pass += str.charAt(char)
    }
    setPassword(pass)
  },[length , number , char , setPassword])

  const copy = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0 , 999);
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenrator()
  }, [length , number , char, passwordGenrator])


  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">PasswordGenrator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white'>
        <input
            type='text'
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passwordRef}
        />
       <button
       onClick={copy}
       className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
       >copy</button>
      </div>
      <div className='flex text-sm gap-x-2 '>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer' 
          onChange={(e)=>{setLength(e.target.value)}}
          />
            <label> Length: {length}</label>
        </div>
        <div className='flex item-center gap-x-1'>
        <input
         type="checkbox" 
         defaultChecked={number}
         id='numberInput'
         onChange={()=>{
          setNumber((prev)=>!prev);
         }}
         />
         <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className='flex item-center gap-x-1'>
        <input
         type="checkbox" 
         defaultChecked={char}
         id='charInput'
         onChange={()=>{
          setchar((prev)=>!prev);
         }}
         />
         <label htmlFor="charInput">Characters</label>
        </div>
         
      </div>
      <div className='flex justify-center'>
        <button
        onClick={passwordGenrator}
        className=' outline-none bg-blue-700 hover:bg-blue-900 cursor-pointer text-white px-3 py-0.5 shrink-0 mt-3 rounded-2xl '>
        New Password
      </button>
      </div>
      
    </div>
  )
}

export default App
