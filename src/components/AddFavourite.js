import React from 'react';

const AddFavourite =()=>{
    return(
        <>
		<div className='col'>
		<div className='row-3'>
        <span className=''>Add to Favourite </span>
        <svg
				width='1em'
				height='0.8em'
				viewBox='0 0 16 16'
				class='bi bi-heart-fill'
				fill='red'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					fill-rule='evenodd'
					d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'
				/>
			</svg>
		</div>
		{/* <div className='row-3'>
			<span className=''>Add to Watchlist </span>
        <svg xmlns="http://www.w3.org/2000/svg" 
        width="16" 
        height="16" 
        fill="currentColor" 
        class="bi bi-bag-plus" 
        viewBox="0 0 16 16">
    	<path fill-rule="evenodd" 
  		d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"/>
    	<path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
		</svg>
		</div>
		<div className='row-3'>
			<span className=''>Add to Watched </span>
        <svg xmlns="http://www.w3.org/2000/svg" 
        width="15" 
        height="16" 
        fill="currentColor" 
        class="bi bi-tv-fill" 
        viewBox="0 0 16 16">
  <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM2 2h12s2 0 2 2v6s0 2-2 2H2s-2 0-2-2V4s0-2 2-2z"/>
</svg>
</div> */}
	</div>
        </>

    )
}

export default AddFavourite;