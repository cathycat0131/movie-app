import React from 'react';
import '../bootstrap.min.css';

const MovieList = (props) => {
    const FavouriteComponent = props.favouriteComponent;
	const WatchlistComponent = props.watchlistComponent;
	const WatchedComponent = props.watchedComponent;
	
	return (
		<>
			{props.movies.map((movie, index) => (
				<>
				
				<div className='image-container col'>
					<h4 className='align-items-center'>{movie.Title}</h4>
					<img src={movie.Poster} alt='movie' key={movie.imdbID} className='movie-poster'></img>
					<div className='overlay align-items-center'>
					<div 
                    onClick={() => props.handleFavouritesClick(movie)}
                    className='align-items-center movie-poster'>
                        <FavouriteComponent></FavouriteComponent>
                    </div>
					<div 
                    onClick={() => props.handleWatchlistClick(movie)}
                    className='align-items-center movie-poster'>
                        {/* Add to watchlist */}
						Watchlist + 
						{/* <watchlistComponent/> */}
                    </div> 
					<div 
                    onClick={() => props.handleWatchedClick(movie)}
                    className='align-items-center movie-poster'>
                        {/* Add to watched
						<watchedComponent/> */}
						Watched + 
                    </div>
					</div>
				</div>
				

					</>
			))}
			
		</>
	);
};
export default MovieList;



