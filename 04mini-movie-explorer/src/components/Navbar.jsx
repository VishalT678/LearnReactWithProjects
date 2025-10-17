import { Link } from "react-router-dom"

function Navbar() {
    return(
        <nav className="flex gap-8 bg-black text-white p-4 justify-center shadow-lg">
            <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
            <Link to="/movies" className="hover:text-yellow-400 transition">Movies</Link>
            <Link to="/about" className="hover:text-yellow-400 transition">About</Link>
        </nav>
    )
}

export default Navbar