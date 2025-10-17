import { useState } from 'react'
import InputBox from './component/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0);
  const [from , setFrom] = useState("usd");
  const [to , setTo] = useState("inr");
  const [convertedAmount , setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const convert  = () => {
    setConvertedAmount(Number((amount * currencyInfo[to]).toFixed(2)));
  }

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-800">
      <h1 className="text-3xl font-bold text-white mb-8 text-center drop-shadow-lg">
        Currency Convertor
      </h1>
      <div className="bg-blue-900 p-8 rounded-2xl shadow-2xl w-full max-w-md flex flex-col gap-6">
        <InputBox
          label="From"
          amount={amount}
          onAmountChange={setAmount}
          onCurrencyChange={setFrom}
          currencyOptions={options}
          selectCurrency={from}
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg self-center font-semibold transition"
          onClick={swap}
        >
          Swap
        </button>
        <InputBox
          label="To"
          amount={convertedAmount}
          onAmountChange={setConvertedAmount}
          onCurrencyChange={setTo}
          currencyOptions={options}
          selectCurrency={to}
          amountDisable={true}
        />
        <button
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg mt-2 font-semibold transition"
          onClick={convert}
        >
          Convert
        </button>
      </div>
    </div>
  )
}

export default App
