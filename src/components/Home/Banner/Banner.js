import { Checkbox, Container, styled } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import CategoryNav from 'src/layouts/main/CategoryNav'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
// import styles from "./Sidebar.module.css";
import 'swiper/css/autoplay'
import SwiperCore, { Pagination, Autoplay } from 'swiper'
import { BASE_URL } from 'apis/url'
import { ContextData } from 'context/dataProviderContext'

const Banner = () => {
  const RootStyle = styled('div')(({ theme }) => ({
    paddingTop: theme.spacing(17),
    // [theme.breakpoints.up("md")]: {
    //   paddingBottom: theme.spacing(15),
    // },
    // paddingBottom: theme.spacing(5),
  }))

  const {currentlyLoggedIn} = useContext(ContextData)
  const [offer, setOffer] = useState([])
  const { image, title, startFrom, endAt, isVisible } = offer || {}

  useEffect(() => {
    fetch(`${BASE_URL}/Offer`)
      .then(res => res.json())
      .then(data => {
        console.log(data, '=================================================================')
        setOffer(data.data)
      })
      .catch(err => console.log(err))
  }, [currentlyLoggedIn])

  // console.log(
  //   offer,
  //   '==============================================================='
  // )

  return (
    <div className="bg-[#f7f7ff9c] pt-5 pb-10">
      <div className="pt-32">
        {/* <CategoryNav/> */}
        <Container maxWidth="lg">
          <div className={`${isVisible && 'flex'} items-center md:gap-5 gap-2`}>
            <div
              className={`${isVisible && 'md:w-[73%] w-[73%]'} w-full h-full`}
            >
              <div>
                <Swiper
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination, Autoplay]}
                  // className={styles}
                  autoplay={true}
                  navigation
                >
                  <SwiperSlide>
                    <div className=" ">
                      <img
                        alt="banner"
                        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                        className="w-full max-h-[500px] object-cover md:rounded-lg rounded"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className=" ">
                      <img
                        alt="banner"
                        src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                        className="w-full max-h-[500px] object-cover md:rounded-lg rounded"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className=" ">
                      <img
                        alt="banner"
                        src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
                        className="w-full max-h-[500px] object-cover md:rounded-lg rounded"
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            {isVisible && (
              <div className="md:w-[27%] w-[27%] overflow-hidden">
                <div className=" ">
                  <img
                    alt="offer"
                    src={image}
                    className="h-full w-full object-cover rounded"
                  />
                </div>
              </div>
            )}
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Banner
