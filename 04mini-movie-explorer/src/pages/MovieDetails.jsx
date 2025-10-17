import { useParams, Link } from "react-router-dom";

const movies = [
  {
    id: "1",
    title: "Jurassic World Rebirth",
    poster: "https://cdn.cinematerial.com/p/297x/2s2jqaxt/jurassic-world-rebirth-movie-poster.jpg",
    description: "Dinosaurs are back in a new adventure!"
  },
  {
    id: "2",
    title: "Game of Thrones",
    poster: "https://img.freepik.com/free-vector/professional-suspense-movie-poster_742173-3470.jpg?t=st=1751978242~exp=1751981842~hmac=6d4b943929544baecc7effee9cb4b494e7b846b4fa31963767491edc37881949&w=1380",
    description: "Epic battles and dragons in the world of Westeros."
  },
  {
    id: "3",
    title: "Breaking Bad",
    poster: "http://www.impawards.com/tv/posters/breaking_bad_ver5.jpg",
    description: "A chemistry teacher turns to a life of crime."
  },
  {
    id: "4",
    title: "Avengers Infinity War",
    poster: "http://www.impawards.com/2018/posters/avengers_infinity_war_ver2.jpg",
    description: "Earth's mightiest heroes face Thanos."
  }
];

function MovieDetails() {
  const { id } = useParams();
  const movie = movies.find(m => m.id === id);

  if (!movie) {
    return (
      <div className="flex flex-col items-center justify-center flex-grow">
      <div className="flex flex-col items-center bg-white/90 rounded-2xl shadow-2xl p-10 max-w-md w-full">
        <span className="text-6xl mb-4 text-red-500">🚫</span>
        <div className="text-center text-red-600 text-2xl font-bold mb-4">
          Movie not found!
        </div>
        <Link
          to="/movies"
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-full shadow transition"
        >
          Back to Movies
        </Link>
      </div>
    </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center flex-grow">
      {/* <div className="bg-white/90 rounded-2xl shadow-2xl p-10 flex flex-col items-center max-w-xl w-full"> */}
        <img src={movie.poster} alt={movie.title} className="rounded-lg mb-6 h-96 object-cover shadow-lg" />
        <h2 className="text-3xl font-bold mb-2 text-center">{movie.title}</h2>
        <p className="mb-6 text-lg text-white text-center max-w-xl">{movie.description}</p>
        <Link to="/movies" className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-full shadow transition">
          Back to Movies
        </Link>
      </div>
    // </div>
  );
}

export default MovieDetails; 