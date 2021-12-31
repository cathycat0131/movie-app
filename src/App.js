import React, { useState, useEffect } from 'react';
import './bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavourite from './components/AddFavourite';
import RemoveFavourite from './components/RemoveFavourite';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [favourites,setFavourites] = useState([]);
    const [searchValue,setSearchValue] = useState('');
    const getMovieRequest = async (searchValue) =>{
      const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=b7bc2d0c`;
      const response = await fetch(url);
      const responseJson = await response.json();
      if(responseJson.Search){
        setMovies(responseJson.Search);
      }
      
    };

    //Search movie
    useEffect(()=>{
      getMovieRequest(searchValue);
    },[searchValue]);
  
    //Fetch data from local storage
  useEffect(()=>{
    const movieFavourites = JSON.parse(
      localStorage.getItem('react-movie-app-favourites')
    );
    if (movieFavourites) {
			setFavourites(movieFavourites);
		}
  },[]);

  const saveToLocalStorage = (items) =>{
    localStorage.setItem('react-movie-app-favourites',
    JSON.stringify(items));
  }
  const addFavouriteMovie = (movie) =>{
    const newFavouriteList = [...favourites,movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const removeFavouriteMovie = (movie) =>{
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID);

      setFavourites(newFavouriteList);
      saveToLocalStorage(newFavouriteList);
  };

    return ( 
    < div className = 'container-fluid movie-app' >
        <div className='row d-flex align-items-center mt-4 mb-4' id='SearchMovie'>
          <MovieListHeading heading='Movies'></MovieListHeading>
          <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}></SearchBox>
        </div>
        <div className ='row'>
          <MovieList 
          movies={movies} 
          handleFavouritesClick={addFavouriteMovie}
          favouriteComponent={AddFavourite}
          >
          </MovieList>
        </div>
        <br></br><br></br><br></br>
        <div className='row d-flex align-items-center mt-4 mb-4'>
          <MovieListHeading heading='Favourites'></MovieListHeading>
          </div>
        <div className = 'row'>
          <MovieList 
          movies={favourites} 
          handleFavouritesClick={removeFavouriteMovie} 
          favouriteComponent={RemoveFavourite}
          >
          </MovieList>
        </div>
        </div >
    );
};
export default App;