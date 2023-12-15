'use client';
import '../../../styles/globals.css'
import { useEffect, useState } from "react";

const carouselData = [
    {
        url: '/images/carousel/Picture1.jpg',
        title: 'Welcome to IIIT Kalyani',
        subtitle: ''
    },

    {
        url: '/images/carousel/p4.webp',
        title: '',
        subtitle: ''
    },
    {
        url: '/images/carousel/p5.webp',
        title: '',
        subtitle: ''
    },
    {
        url: '/images/carousel/Precaution_Dose_Eng.jpg',
        title: '',
        subtitle: ''
    },
    {
        url: '/images/carousel/Picture3.jpg',
        title: '',
        subtitle: ""
    },
    {
        url: '/images/carousel/Picture2.jpg',
        title: '',
        subtitle: ""
    }



];

interface CarouselElement {
    title: string,
    url: string,
    subtitle?: string
}

type Poster = CarouselElement;

const Carousel = () => {
    const handleInterval = () => {
        setPoster(prev => carouselData.length - 1 === prev ? 0 : prev + 1);
    }
    const [poster, setPoster] = useState<number>(0);
    useEffect(() => {
        const interval = setInterval(handleInterval, 6000);
        return () => {
            clearInterval(interval);
        }
    }, []);
    return (
        <div className="">
            <CarouselPoster key={poster} poster={carouselData[poster]} />
        </div>
    );
}

const CarouselPoster = ({ poster }: {
    poster: Poster
}) => {
    return (
        <div className="h-screen animate-carousel-change carousel" style={{
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `linear-gradient(0deg,
            rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.5)),
            url(${poster.url})`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>

            <div className="animate-carousel-title-change textSizer drop-shadow-lg text-white font-bold welcome-text" style={{ textAlign: 'center' }}>
                {poster.title}
            </div>
            {poster.subtitle ?
                <div className='planned' >
                    {poster.subtitle}
                </div>
                : ""}

        </div>);
}

export default Carousel;
