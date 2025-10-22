import { useEffect, useState} from 'react'
import './App.css'
import Headers from './components/Headers'
import Cards from './components/Cards'

function App() {
  
  const BASE_URL = "http://localhost:9000";
  const [data , setData] = useState(null);
  const [loading , setLoading] = useState(false);
  const [error , setError] = useState(null);
  const [search , setSearch] = useState('')
  const [allData , setAllData] = useState([])
  const [btn , setBtn] = useState("all");




  useEffect(()=>{
    const fetchFoodData = async () =>{
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setData(json)
        setAllData(json)
        setLoading(false)
      } catch (error) {
        setError("Unable to fetch Data..")
      }
      
    };
    fetchFoodData();
  },[])

  const filterFood = (type)=>{
    if(type==="all"){
      setData(allData);
      setBtn("all");
      return;
    }
    const filter = allData?.filter((food)=>
    food.type.toLowerCase().includes(type.toLowerCase())
  )
  setData(filter)
  setBtn(type)
  }
  return (
    <>
   
    <div className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed" style={{backgroundImage: 'url(bg.png)'}} >
       <Headers search ={search} setSearch={setSearch} filterFood={filterFood}/>
       <Cards data={data} loading={loading} search={search} error={error}/>
    </div>
    </>
  )
}

export default App
