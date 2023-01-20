import React, { useContext, useEffect, useRef, useState } from 'react';
import '../App.css';
import AppContext from '../context.js/AppContext';
import useMovie from '../Hooks/useMovie';

const Search = (props) => {
  const [input , setInput] = useState('');
  // const { isLoading, error, fetchMovie } = useMovie(props.movie);
  const inputMovie = useRef('monster')
  // const [errorMessage , setErrorMessage] = useState(error);
  // console.log(errorMessage);
  const movieCtx = useContext(AppContext);
  console.log(movieCtx.name)
  const inputChangeHandler = (event)=>{
    setInput(event.target.value);

  }
  const findMovieHandler =(event)=>{
    event.preventDefault();
    // props.onSearch(input);
    movieCtx.movieHandler(input);
    console.log(input);
  }
  
  useEffect(() => {
   const interval = setTimeout(()=>{
    // if(input.current.value === ''){
    //   movieCtx.movieHandler(input)
    // }
    // movieCtx.movieHandler(input)
    if(inputMovie.current.value ===''){
      movieCtx.movieHandler(localStorage.getItem('movie'))
    }else{
      movieCtx.movieHandler(input)
    }
    
   },500);

   return ()=>{
    clearTimeout(interval);
   }
  }, [input , props , movieCtx]);

  return (
    <>
    <section className='search-section'>
      {/* {errorMessage} */}
      <h2>Search your favourite movies</h2>
      <form action="#" onSubmit={findMovieHandler}>
         <div>
          <input ref={inputMovie} value={input} type="text" placeholder="search movie" onChange={inputChangeHandler}/>
         </div>
      </form>
    </section>
    </>
  )
}

export default Search