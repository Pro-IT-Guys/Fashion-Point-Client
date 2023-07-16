import { BASE_URL } from 'apis/url'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper";
import { Container } from '@mui/material';
import ProductCard from '../Products/ProductCard';

export default function TShirtCollection() {
    const [shirts, setShirts] = useState([])

    useEffect(() => {
        fetch(`${BASE_URL}/Product?category=T-Shirt`)
            .then(res => res.json())
            .then(data => {
                setShirts(data.data)
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <Container maxWidth='lg'>
                    <h1 className='text-2xl font-semibold mb-2 mt-5'>T-Shirt Fashion</h1>
            <Swiper
                autoplay={true}
                modules={[Autoplay]}
                className="mySwiper pb-3 h-full"
                // spaceBetween={50}
                // slidesPerView={6}
                loop={true}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    440: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                        width: 768,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    1440: {
                        slidesPerView: 6,
                        spaceBetween: 20,
                    },
                }}
            >
                {shirts?.map((product) => (
                    <SwiperSlide key={product?.id} className="h-full mb-1">
                        <ProductCard product={product} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    )
}
