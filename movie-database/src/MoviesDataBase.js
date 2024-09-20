import React, { useEffect, useState } from 'react';

const MoviesDataBase = () => {
    
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);


  const fetchMovies=async()=>{
    const data=await fetch("https://dummyapi.online/api/movies");
    const json =await data.json();
    console.log(json);
    setMovies(json)
    
  }
  return (
    
    <div>
      <h1>Movies DataBase</h1>
      <ul className='headContainer'>
        {movies.map(movie => (
         <a target='_blanck' href={movie.imdb_url}><li className='listDiv' key={movie.id}>{movie.movie}</li></a> 
        ))}
      </ul>
    </div>
  );
};

export default MoviesDataBase;
