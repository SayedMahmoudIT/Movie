import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import MovieCard from '../Movie/MovieCard'
import { MovieContext } from '../../Context/MovieContext'

export default function Home() {
  const movieList=useContext(MovieContext)
  console.log(movieList , 'fromHome');
  
  return <>
  <div className="container px-4">
    <h2 className='text-black font-bold my-3 text-4xl'>Featured Movie</h2>
    <div className='grid grid-cols-4 gap-4'>
        {movieList&&movieList.map((item)=><MovieCard  key={item.id} object={item}/> )}
    </div>
    
  </div>
    
  </>
}
