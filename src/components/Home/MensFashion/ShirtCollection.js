import { BASE_URL } from 'apis/url'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper";
import { Container } from '@mui/material';
import ProductCard from '../Products/ProductCard';
import { set } from 'lodash';
import ProductLoader from '../Products/ProductLoader';

export default function ShirtCollection() {
    const [shirts, setShirts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(`${BASE_URL}/Product?category=Shirt`)
            .then(res => res.json())
            .then(data => {
                setShirts(data.data)
                setLoading(false)
            })
            .catch(err => setLoading(false))
    }, [])

    if (loading) {
        <ProductLoader />
    }

    return (
        <Container maxWidth='lg'>
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
