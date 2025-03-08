import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import poster from '../../assets/spiderManPoster.jpg'
import { Link } from 'react-router'

export default function MovieCard({ object }) {

    const { id, original_title, poster_path, release_date } = object
    return <>

        <div className="movie-card w-60">
            <div className="top-card w-full relative">
                <img src={"https://image.tmdb.org/t/p/original" + poster_path} alt={original_title} />
                <div className='absolute top-3 left-0 flex justify-between w-full'>
                    <span className='bg-gray-50/50 mx-2 p-1 rounded-full'>TV Series</span>
                    <span className='bg-gray-50/50 mx-2 p-1  rounded-3xl'>
                        <FontAwesomeIcon icon={faHeart} />
                    </span>
                </div>
                <div className="details">
                    <span className='text-sm  font-bold text-gray-400 mb-3'>USA, {release_date.slice(0, 4)} - Current</span>
                    {/* <h2 className='text-xl font-bold text-gray-900'>{original_title}</h2> */}
                    <h2 className='text-xl font-bold text-gray-900'><Link to={"show/movie/" + id}>{original_title}</Link> </h2>
                    <h3 className='text-sm  font-bold text-gray-400 font-sm'>Action Advensure</h3>
                </div>
            </div>
        </div>

    </>
}
