import {createContext, useEffect, useState} from "react";
import AxiosInstance from "../api/axiosInstance";

export const MovieContext=createContext([]);

export function MovieContextProvider(props) {
    const [movieList,setMovieList]=useState([]);
    useEffect(()=>{
        AxiosInstance.get('now_playing?language=ar-eg&page=1')
        .then((resp)=>resp.data)
        .then(({results})=>{
            console.log(results);
            setMovieList(results);
            
        })
    },[]);

    return <MovieContext.Provider value={movieList}>
        {props.children}
    </MovieContext.Provider>
    
}