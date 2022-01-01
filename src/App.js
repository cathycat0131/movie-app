import React, { useState, useEffect } from 'react';
import './bootstrap.min.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
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
// import {Watchlist} from './components/Watchlist';
// import Add from './components/Add';
// import {Watched} from './components/Watched';
// import { Link } from 'react-router-dom';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [favourites,setFavourites] = useState([]);
    const [watched, setWatched] = useState([])
    const [watchlist,setWatchlist] = useState([]);
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
      localStorage.getItem('react-movie-app')
    );
    if (movieFavourites) {
			setFavourites(movieFavourites);
		}
  },[]);

  const saveToLocalStorage = (items) =>{
    localStorage.setItem('react-movie-app',
    JSON.stringify(items));
  }
  const addFavouriteMovie = (movie) =>{
    const newFavouriteList = [...favourites,movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const addToWatchList = (movie) =>{
    const newWatchlist = [...watchlist,movie];
    setWatchlist(newWatchlist);
    saveToLocalStorage(newWatchlist);
  }

  const removeFromWatchlist = (movie)=>{
    //Remove from watchlist
    const newWatchlist = watchlist.filter(
      (watchlist) => watchlist.imdbID !== movie.imdbID);

      setWatchlist(newWatchlist);
      saveToLocalStorage(newWatchlist);
  }

  const addToWatched = (movie) =>{
    //Remove from watchlist
    const newWatchlist = watchlist.filter(
      (watchlist) => watchlist.imdbID !== movie.imdbID);

      setWatchlist(newWatchlist);
      saveToLocalStorage(newWatchlist);
      
      //Add to watched
      const newWatched= [...watched,movie];
      setWatched(newWatched);
      saveToLocalStorage(newWatched);
  };

  const removeFromWatched = (movie)=>{
    const newWatched = watched.filter(
      (watched) => watched.imdbID !== movie.imdbID)
      setWatched(newWatched);
      saveToLocalStorage(newWatched);
  }

  const removeFavouriteMovie = (movie) =>{
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID);

      setFavourites(newFavouriteList);
      saveToLocalStorage(newFavouriteList);
  };

    return ( 
      
      // <Router>
      //   <Heading></Heading>
      //   <>
      //     <Route exact path="/">
      //       <Watchlist/>
      //     </Route>
      //     <Route path="/Watched">
      //       <Watched/>
      //     </Route>
      //     <Route path="/Add">
      //       <Add/>
      //     </Route>
      //   </>
      // </Router>

    <div className = 'container-fluid movie-app' >
      

        <div className='row d-flex align-items-center mt-4 mb-4' id='SearchMovie'>
          <MovieListHeading heading='Movies App'></MovieListHeading>
          <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}></SearchBox>
        </div>
        
        {/* <ul className='nav-links'>
                <li>
                    <h2>Watch List</h2>
                </li>
                <li>
                    <h2>Watched</h2>
                </li>
                <li>
                    <h2>Search</h2>
                </li>
      </ul> */}

        <div className ='row'>
          <MovieList 
          movies={movies} 
          handleFavouritesClick={addFavouriteMovie}
          handleWatchlistClick={addToWatchList}
          favouriteComponent={AddFavourite}
          watchlistComponent={AddWatchlist}
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
          handleWatchedClick={addToWatched}
          >
          </MovieList>
        </div>

        <div className='row d-flex align-items-center mt-4 mb-4'>
          <MovieListHeading heading='Watchlist'></MovieListHeading>
          </div>
        <div className = 'row'>
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

        <div className='row d-flex align-items-center mt-4 mb-4'>
          <MovieListHeading heading='Watched'></MovieListHeading>
          </div>
        <div className = 'row'>
          <MovieList 
          movies={watched} 
          handleWatchlistClick={removeFromWatched}
          handleFavouritesClick={addFavouriteMovie}
          favouriteComponent={AddFavourite}
          watchedComponent={RemoveWatched}
          >
          </MovieList>
        </div>
        </div >
    );
};
export default App;