import { useState } from 'react'
import './App.css'
import ContactProvider from './context/ContactProvider'
import ContactList from './components/ContactList'
import ContactForm from './components/ContactForm'



function App() {
  const [showForm , setShowForm ] = useState(false)

  return (
    <ContactProvider>
        <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Contact Manager
          </h1>
          <div className="flex justify-center mb-6">
            <button
            onClick={()=>setShowForm(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition duration-200"
            >
              Add New Contact
            </button>
          </div>
          {showForm && <ContactForm onClose={()=> setShowForm(false)} />}
          <ContactList />
          
        </div>
      </div>
      
    </ContactProvider>
  )
}

export default App
