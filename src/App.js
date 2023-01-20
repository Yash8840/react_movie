import React, { Fragment, useState } from 'react'
import {BrowserRouter , Routes ,  Route} from 'react-router-dom';
import Home from './components/Home';
import SingleMovie from './components/SingleMovie'
import Error from './components/Error';
import AppContext from './context.js/AppContext';


const App = () => {
  console.log('App is running');
  const [movie, setMovie] = useState();
  const movieHandler = (movie)=>{
    setMovie(movie)
  }
  return (

    <Fragment>
      
      <BrowserRouter>
      
      <Routes>
      
        <Route path="/" element={<AppContext.Provider value={{movieHandler:movieHandler , movieName:movie}}><Home/></AppContext.Provider>}/>
        <Route path="movie/:id" element={<SingleMovie/>}/>
        <Route path='*' element={<Error/>}/>
        
      </Routes>
      
      </BrowserRouter>
     
    </Fragment>
  )
}

export default App