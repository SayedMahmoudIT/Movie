import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import AxiosInstance from '../../api/axiosInstance';
import MovieRating from './MovieRating';
import { MovieContext } from '../../Context/MovieContext';
import MovieList from './MovieList';

export default function ShowMovie() {
    //   let params=useParams();
    const { id } = useParams();
    //console.log(id);
    const movieList = useContext(MovieContext)

    const [movie, setMovie] = useState({});


    useEffect(() => {
        AxiosInstance.get(`${id}?language=en-US`)
            .then((resp) => resp.data)
            .then((data) => {
                //console.log(data);

                setMovie(data)
            })
    }, [movie]);

    const { original_title, overview, poster_path, vote_average } = movie;
    console.log(vote_average);
    return <>
        <div className="container px-3 my-5">
            <div className="grid md:grid-cols-4 gap-3">
                <div>
                    <img className="max-w-2xs" src={'https://image.tmdb.org/t/p/original' + poster_path} alt="" />
                </div>
                <div>
                    <h1 className='text-blue-900 font-extrabold'>{original_title}</h1>
                    <p className='text-gray-500'>{overview}</p>
                    <div className="mb-3">
                        <span className='text-red-500'>Rating{"  "}<MovieRating rate={vote_average / 2} /></span>
                    </div>
                </div>
            </div>
            <MovieList list={movieList.slice(0,8)}>
                <h2 className="mb-3">Suggestion Movies</h2>
            </MovieList>
        </div>

    </>
}
