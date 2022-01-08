import React, { useState, useEffect } from 'react';
import './bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import MovieList from './components/MovieList';
import {Heading} from './components/Unused/Heading';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavourite from './components/AddFavourite';
import AddWatchlist from './components/AddWatchlist';
import AddWatched from './components/AddWatched';
import RemoveWatched from './components/RemoveWatched';
import RemoveWatchlist from './components/RemoveWatchlist';
import RemoveFavourite from './components/RemoveFavourite';
import {Watchlist} from './components/Unused/Watchlist';
import Add from './components/Unused/Add';
import {Watched} from './components/Unused/Watched';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [favourites,setFavourites] = useState([]);
    const [watched, setWatched] = useState([])
    const [watchlist,setWatchlist] = useState([]);
    const [searchValue,setSearchValue] = useState('');
    const getMovieRequest = async (searchValue) =>{
      const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=b7bc2d0c`;
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
    const movieFavourite = JSON.parse(
      localStorage.getItem('react-movie-favourite')
    );
    const movieWatchlist= JSON.parse(
      localStorage.getItem('react-movie-watchlist')
    );
    const movieWatched= JSON.parse(
      localStorage.getItem('react-movie-watched')
    );
    if (movieWatched) {
      setWatched(movieWatched);
		}
    if (movieFavourite) {
			setFavourites(movieFavourite);
		}
    if (movieWatchlist) {
      setWatchlist(movieWatchlist)
		}
  },[]);

  //Save to local storage
  const saveToLocalStorageFavourite = (items) =>{
    localStorage.setItem('react-movie-favourite',
    JSON.stringify(items));
  }

  const saveToLocalStorageWatchlist= (items) =>{
    localStorage.setItem('react-movie-watchlist',
    JSON.stringify(items));
  }

  const saveToLocalStorageWatched = (items) =>{
    localStorage.setItem('react-movie-watched',
    JSON.stringify(items));
  }

  //Add to Favourite, Watchlist, Watched
  const addFavouriteMovie = (movie) =>{
    const newFavouriteList = [movie,...favourites];
    setFavourites(newFavouriteList);
    saveToLocalStorageFavourite(newFavouriteList);
  };

  const addToWatchlist = (movie) =>{
    const newWatchlist = [movie,...watchlist,];
    setWatchlist(newWatchlist);
    saveToLocalStorageWatchlist(newWatchlist);
  }

  const removeFromWatchlist = (movie)=>{
    //Remove from watchlist
    const newWatchlist = watchlist.filter(
      (watchlist) => watchlist.imdbID !== movie.imdbID);

      setWatchlist(newWatchlist);
      saveToLocalStorageWatchlist(newWatchlist);
  }

  const addToWatched = (movie) =>{
    //Remove from watchlist
    const newWatchlist = watchlist.filter(
      (watchlist) => watchlist.imdbID !== movie.imdbID);

      setWatchlist(newWatchlist);
      saveToLocalStorageWatchlist(newWatchlist);

      //Add to watched
      const newWatched= [movie,...watched];
      setWatched(newWatched);
      saveToLocalStorageWatched(newWatched);
  };

  const removeFromWatched = (movie)=>{
    const newWatched = watched.filter(
      (watched) => watched.imdbID !== movie.imdbID)
      setWatched(newWatched);
      saveToLocalStorageWatched(newWatched);
  }

  const removeFavouriteMovie = (movie) =>{
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID);

      setFavourites(newFavouriteList);
      saveToLocalStorageFavourite(newFavouriteList);
  };


    //Render
    return ( 
        <>
        
    <div className = 'container-fluid' >
        <div className='d-flex align-items-center justify-content-center'>
          <div className='p-2'>
          <MovieListHeading heading='CineList'>
          </MovieListHeading>
          </div>
          <div className='p-2'>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-camera-reels-fill" viewBox="0 0 16 16">
          <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
          <path d="M9 6a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
          <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7z"/>
          </svg>
          </div>
          </div>
          <div className='d-flex justify-content-between align-items-center'>
          <div class="">
            <MovieListHeading heading='Search Results'></MovieListHeading>
            <h3>{movies.length}{movies.length == 1 ? " Movie" : " Movies"}</h3>
          </div>
          <div class=""><SearchBox searchValue={searchValue} setSearchValue={setSearchValue}></SearchBox></div>
          
          </div>
        <>
        <div className ='row movie-app'>
          <MovieList 
          movies={movies} 
          handleFavouritesClick={addFavouriteMovie}
          handleWatchlistClick={addToWatchlist}
          favouriteComponent={AddFavourite}
          watchlistComponent={AddWatchlist}
          >
          </MovieList>
        </div>
        <br></br><br></br><br></br>
        <div className='row d-flex align-items-center'>
          <MovieListHeading heading='Favourites'></MovieListHeading>
          <h3>{favourites.length}{favourites.length == 1 ? " Movie" : " Movies"}</h3>
          </div>
        <div className = 'row movie-app'>
          <MovieList 
          movies={favourites} 
          handleFavouritesClick={removeFavouriteMovie} 
          favouriteComponent={RemoveFavourite}
          handleWatchedClick={addToWatched}
          handleWatchlistClick={addToWatchlist}
          >
          </MovieList>
          
        </div>
        <br></br><br></br><br></br>
        <div className='row d-flex align-items-center'>
          <MovieListHeading heading='Watchlist'></MovieListHeading>
          <h3>{watchlist.length}{watchlist.length == 1 ? " Movie" : " Movies"}</h3>
          </div>
        <div className = 'row movie-app'>
          <MovieList 
          movies={watchlist} 
          handleWatchlistClick={removeFromWatchlist}
          handleWatchedClick={addToWatched}
          handleFavouritesClick={addFavouriteMovie}
          favouriteComponent={AddFavourite}
          watchlistComponent={RemoveWatchlist}
          watchedComponent={AddWatched}
          >
          </MovieList>
        </div>
        <br></br><br></br><br></br>
        <div className='row d-flex align-items-center'>
          <MovieListHeading heading='Watched' id='watched'></MovieListHeading>
          
          <h3>{watched.length}{watched.length == 1 ? " Movie" : " Movies"}</h3>
          </div>
        <div className = 'row movie-app'>
          <MovieList 
          movies={watched} 
          handleWatchedClick={removeFromWatched}
          handleFavouritesClick={addFavouriteMovie}
          favouriteComponent={AddFavourite}
          watchlistComponent={removeFromWatchlist}
          watchedComponent={RemoveWatched}
          >
          </MovieList>
        </div>
        </>
        </div >
        
        </>
    );
};
export default App;