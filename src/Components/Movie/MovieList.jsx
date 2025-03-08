import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Link } from 'react-router';

export default function MovieList({ children,list }) {
    console.log(list);
    
    return <>
        <div>
            {children}
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {/* <SwiperSlide><Link to={''}><img src=''/></Link></SwiperSlide> */}
                {list&&list.map((item)=><SwiperSlide key={item.id}><Link to={"/show/movie/"+item.id}><img src={"https://image.tmdb.org/t/p/original" + item.poster_path}/></Link></SwiperSlide>)}
                
            </Swiper>
        </div>
    </>
}
