import React from 'react'
import { Link } from 'react-router-dom';

export const Heading = () => {
    return (
        <div>
            <div className='container'>
        <div className='inner-content'>
            <div className='brand'>
                <Link to="/">WatchList</Link>
            </div>
            <ul className='nav-links'>
                <li>
                    <Link to="/">Watch List</Link>
                </li>
                <li>
                    <Link to="/watched">Watched</Link>
                </li>
                <li>
                    <Link to="/Add" className='btn'>+ Add</Link>
                </li>
            </ul>
        </div>
    </div>
        </div>
    )
}
