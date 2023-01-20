import { useCallback, useEffect, useState } from "react";

const useMovie = (movieName='titanic') => {
  // if(movieName === ''){
  //   movieName='titanic'
  // }
  localStorage.setItem('movie' , movieName)
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovie = useCallback(async (dataHandler) => {
    console.log('mew')
    
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${movieName ? movieName : 'titanic'}` );

      if (!response.ok) {
        throw new Error("Request failed!");
      }
      const data = await response.json();
      if(data.Response === 'False'){
        setError(data.Error);
        console.log(data);
        return;
      }
      dataHandler(data);
      console.log(data);
      
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  } , [movieName]);

  return {
    isLoading: isLoading,
    error: error,
    fetchMovie: fetchMovie
  }
};
export default useMovie;
