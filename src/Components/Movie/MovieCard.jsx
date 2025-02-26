import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import poster from '../../assets/spiderManPoster.jpg'

export default function MovieCard() {
    return <>

        <div className="movie-card w-80">
            <div className="top-card w-full relative">
                <img src={poster} alt="" />
                <div className='absolute top-3 left-0 flex justify-between w-full'>
                    <span className='bg-gray-50/50 mx-2 p-1 rounded-full'>TV Series</span>
                    <span className='bg-gray-50/50 mx-2 p-1  rounded-3xl'>
                        <FontAwesomeIcon icon={faHeart} />
                    </span>
                </div>
                <div className="details">
                    <span className='text-sm  font-bold text-gray-400 mb-3'>USA, 2016 - Current</span>
                    <h2 className='text-xl font-bold text-gray-900'>Spider Man</h2>
                    <h3 className='text-sm  font-bold text-gray-400 font-sm'>Action Advensure</h3>
                </div>
            </div>
        </div>

    </>
}
