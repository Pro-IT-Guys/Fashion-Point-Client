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

  const { currentlyLoggedIn } = useContext(ContextData)
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
    <div className="pt-5 pb-10">
      <div className="pt-32">
        {/* <CategoryNav/> */}
        <Container maxWidth="lg">
          <div className={`${isVisible && 'lg:flex'} items-center md:gap-5 gap-2`}>
            <div
              className={`${isVisible && 'lg:w-[73%] '} w-full h-full`}
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
                    <div className=" xl:h-[450px] md:h-[420px] h-[320px] overflow-hidden">
                      <img
                        alt="banner"
                        src="https://i.ibb.co/k8JDcGJ/3.jpg"
                        className="w-full h-full object-cover md:rounded-lg rounded"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className=" xl:h-[450px] md:h-[420px] h-[320px] overflow-hidden">
                      <img
                        alt="banner"
                        src="https://i.ibb.co/5T9sG9s/2.jpg"
                        className="w-full h-full object-cover md:rounded-lg rounded"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className=" xl:h-[450px] md:h-[420px] h-[320px] overflow-hidden">
                      <img
                        alt="banner"
                        src="https://i.ibb.co/PghtnLh/1.jpg"
                        className="w-full h-full object-cover md:rounded-lg rounded"
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            {isVisible && (
              <div className="lg:w-[27%] lg:block hidden overflow-hidden">
                <div className=" xl:h-[450px] md:h-[420px] h-[320px] overflow-hidden">
                  <img
                    alt="offer"
                    src={'https://i.ibb.co/Yc0CySy/Screenshot-2023-07-17-165750.jpg'}
                    // src={'https://i.ibb.co/QX3KBx0/Screenshot-2023-07-17-165417.jpg'}
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
