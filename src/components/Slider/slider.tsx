import { Swiper, SwiperProps } from "swiper/react";
import { ReactNode } from "react";
import { Navigation, Pagination } from 'swiper/modules'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./slider.css"

interface SlideProps{
    settings: SwiperProps,
    children: ReactNode,
}
export default function Slider({settings, children}:SlideProps){
    return(
        <Swiper modules={[Navigation, Pagination]} {...settings}>
            {children}
        </Swiper>
    )
}