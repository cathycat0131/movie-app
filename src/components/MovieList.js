import React from 'react';

const MovieList = (props) => {
    const FavouriteComponent = props.favouriteComponent;
	const WatchlistComponent = props.watchlistComponent;
	const WatchedComponent = props.watchedComponent;
	return (
		<>
			{props.movies.map((movie, index) => (
				<>
				<div className='image-container justify-content-start col-3'>
					<img src={movie.Poster} alt='movie' width='auto' className=''></img>
                
					{/* <div className='row'>
					<div 
                    onClick={() => props.handleFavouritesClick(movie)}
                    className='overlay align-items-center justify-content-center col-12'>
                        <FavouriteComponent></FavouriteComponent>
                    </div> */}
					{/* <div 
                    onClick={() => props.handleWatchlistClick(movie)}
                    className=' overlay align-items-center justify-content-center col-12'>
                        <WatchlistComponent></WatchlistComponent>
                    </div> */}

					{/* <div 
                    onClick={() => props.handleWatchedClick(movie)}
                    className='overlay align-items-center justify-content-center col-12'>
                        <h2 >Add to watched</h2>
                    </div> */}
					{/* </div> */}
					<div 
                    onClick={() => props.handleFavouritesClick(movie)}
                    className='align-items-center justify-content-center col-12'>
                        <FavouriteComponent></FavouriteComponent>
                    </div>
					<div 
                    onClick={() => props.handleWatchlistClick(movie)}
                    className='align-items-center justify-content-center col-12'>
                        <h2 >Add to watchlist</h2>
						<watchlistComponent/>
                    </div> 
					<div 
                    onClick={() => props.handleWatchedClick(movie)}
                    className='align-items-center justify-content-center col-12'>
                        <h2 >Add to watched</h2>
						<watchedComponent/>
                    </div>
					</div>
				

					</>
			))}
			
		</>
	);
};

export default MovieList;