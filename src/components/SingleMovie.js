import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import useSingleMovie from '../Hooks/useSingleMovie';

const SingleMovie = () => {
  const { id } = useParams(); // this is the id that is after "/movie", so ye id aise hm bahar nikalenge aur isko api ki madad se, uss particular id ke movie ki info nikalenge api se
  console.log(id);
  const { isLoading, error, fetchMovie } = useSingleMovie(id);
  const [movieData, setMoviesData] = useState();

  useEffect(() => {
    const dataHandler = (data) => {
      setMoviesData(data)
      console.log(data);
    };

    
    fetchMovie(dataHandler);
  }, [fetchMovie]);

  if(movieData){
    return (
    <section className="movie-section">
      <div className="movie-card">
        <figure>
          <img src={movieData.Poster} alt="" />
        </figure>
        <div className="card-content">
          <p className="title">{movieData.Title}</p>
          <p className=""></p>
          <p className="card-text">{movieData.Released}</p>
          <p className="card-text">{movieData.Genre}</p>
          <p className="card-text">{movieData.imdbRating} / 10</p>
          <p className="card-text">{movieData.Country}</p>
          <NavLink to="/" className="back-btn">
            Go Back
          </NavLink>
        </div>
      </div>
    </section>
  );
  }
  return (
    <section className="movie-section ">
      <div className="loading">Loading....</div>;
    </section>
  );

  
}

export default SingleMovie