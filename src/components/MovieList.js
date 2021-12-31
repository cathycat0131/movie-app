import React from 'react';

const MovieList = (props) => {
    const FavouriteComponent = props.favouriteComponent;
	return (
		<>
			{props.movies.map((movie, index) => (
				<div className='image-container d-flex justify-content-start col-xl'>
					<img src={movie.Poster} alt='movie' width='auto' className=''></img>
                    <div 
                    onClick={() => props.handleFavouritesClick(movie)}
                    className='overlay align-items-center justify-content-center'>
                        <FavouriteComponent></FavouriteComponent>
                    </div>
				</div>
			))}
		</>
	);
};

export default MovieList;