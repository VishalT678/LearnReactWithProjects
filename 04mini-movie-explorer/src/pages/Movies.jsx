import React from 'react'
import MovieCard from '../components/MovieCard';

const movies = [
  {
    id: "1",
    title: "Jurassic World Rebirth",
    poster: "https://cdn.cinematerial.com/p/297x/2s2jqaxt/jurassic-world-rebirth-movie-poster.jpg"
  },
  {
    id: "2",
    title: "Game of Thrones",
    poster: "https://img.freepik.com/free-vector/professional-suspense-movie-poster_742173-3470.jpg?t=st=1751978242~exp=1751981842~hmac=6d4b943929544baecc7effee9cb4b494e7b846b4fa31963767491edc37881949&w=1380"
  },
  {
    id: "3",
    title: "Breaking Bad",
    poster: "http://www.impawards.com/tv/posters/breaking_bad_ver5.jpg"
  },
  {
    id: "4",
    title: "Avengers Infinity War",
    poster: "http://www.impawards.com/2018/posters/avengers_infinity_war_ver2.jpg"
  }
];

function Movies() {
  return (
    <div className='min-h-[70vh] flex flex-col items-center'>
      <h2 className='text-2xl font-bold my-8 text-yellow-500'>Movies</h2>
      <div className='flex flex-wrap gap-8 justify-center'>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default Movies
