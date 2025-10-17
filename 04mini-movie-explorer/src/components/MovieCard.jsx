import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  if (!movie) return null;
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 w-64 flex flex-col items-center hover:scale-105 transition">
      <img
        src={movie.poster}
        alt={movie.title}
        className="rounded-lg mb-3 h-80 object-cover w-full"
      />
      <h3 className="font-bold text-lg mb-2 text-center">{movie.title}</h3>
      <Link
        to={`/movies/${movie.id}`}
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-1 px-4 rounded-full shadow transition"
      >
        View Details
      </Link>
    </div>
  );
}

export default MovieCard; 