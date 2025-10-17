import React from 'react'
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center flex-grow">
      <div className="bg-white/90 rounded-2xl shadow-2xl p-10 flex flex-col items-center max-w-lg w-full">
        <span className="text-6xl mb-4">🎬</span>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2 text-center drop-shadow">
          Welcome to <span className="text-yellow-500">Mini Movie Explorer</span>
        </h1>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Discover, browse and explore your favorite movies with awesome posters and details!
        </p>
        <Link
          to="/movies"
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-full shadow transition"
        >
          Explore Movies
        </Link>
      </div>
    </div>
  )
}

export default Home
