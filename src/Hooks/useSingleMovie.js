import { useCallback, useEffect, useState } from "react";

const useSingleMovie = (imdbID='tt0120338') => {

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  

  const fetchMovie = useCallback(async (dataHandler) => {
    
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${imdbID}` );

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
  } , [imdbID]);

  return {
    isLoading: isLoading,
    error: error,
    fetchMovie: fetchMovie
  }
};
export default useSingleMovie;
