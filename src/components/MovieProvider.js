import React from 'react'
import AppContext from '../context.js/AppContext'
import Home from './Home'

const MovieProvider = (props) => {
  return (
    <AppContext.Provider value={{movieName: 'titanic'}}>
      <Home></Home>
    </AppContext.Provider>
  )
}

export default MovieProvider