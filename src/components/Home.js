import React, { useCallback, useContext, useEffect, useState } from 'react'
import AppContext from '../context.js/AppContext'
import useMovie from '../Hooks/useMovie';
import MovieProvider from './MovieProvider';
import { Movies } from './Movies';
import Search from './Search';

const Home = () => {
  const movieCtx = useContext(AppContext)
  // const [movie , setMovie] = useState();
  // const searchMovieHandler =useCallback((inputMovie)=>{
  //   setMovie(inputMovie);
  //   console.log(inputMovie)
  // },[]);

  // const {isLoading , error , fetchMovie} = useMovie();
  // useEffect(()=>{
  //   fetchMovie();
  // },[fetchMovie])
  console.log(movieCtx.name)
  
  return (
    <>
   
    <Search />
    <Movies/>
   
    </>
  )
}

export default Home