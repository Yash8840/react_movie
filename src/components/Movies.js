import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useMovie from "../Hooks/useMovie";
import '../App.css'
import AppContext from "../context.js/AppContext";
import Tilt from 'react-parallax-tilt';

export const Movies = () => {
  
  // let movieToBeSearched = props.movie;
  // const [movieToBeSearched , setMovieToBeSearched] = useState(props.movie)
  const movieCtx = useContext(AppContext)
  const { isLoading, error, fetchMovie } = useMovie(movieCtx.movieName);

  const [moviesData, setMoviesData] = useState([]);
  // const [movieName , setMovieName] = useState('Titanic');

  

  useEffect(() => {
    const dataHandler = (data) => {
      setMoviesData(data.Search);
    };

    
    fetchMovie(dataHandler);
  }, [fetchMovie]);

    let content = <div className="container grid grid-4-col">
    {moviesData.map((movie) => {
      const { imdbID, Title, Poster } = movie;
      let movieName = Title.substring(0,15);
      if(movieName.length >= 15){
        movieName = Title.substring(0,15) + '...';
      }
      return (
        <NavLink to={`movie/${imdbID}`} key={imdbID}>
          <Tilt>
          <div className="card">
            <div className="card-info">
              <h2>{movieName}</h2>
              <img src={Poster} alt={imdbID}/>
            </div>
          </div>
          </Tilt>
        </NavLink>
      );
    })}
  </div>

  if(isLoading){
    content = <p className="loading">Loading...</p>
  }

  return (
    <>
    
      <section className="movie-page">
        
        {error && <p className="error-text">{error}</p>}
        {content}
      </section>
      
   
    </>
  );
};
