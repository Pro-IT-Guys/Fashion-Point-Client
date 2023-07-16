import { Container } from '@mui/material'
import React from 'react'
import img1 from '../../../assets/category/3-pcs.jpeg'
import img2 from '../../../assets/category/Baby.jpg'
import img3 from '../../../assets/category/Borka.webp'
import img4 from '../../../assets/category/coat.png'
import img5 from '../../../assets/category/hijab.webp'
import img6 from '../../../assets/category/jins.jpg'
import img7 from '../../../assets/category/lehenga.webp'
import img8 from '../../../assets/category/panjabi.jpg'
import img9 from '../../../assets/category/shari.jpg'
import img10 from '../../../assets/category/shirt.webp'
import img11 from '../../../assets/category/T-shirt.jpg'
import Image from 'next/image'

export default function Inspiration() {
    return (
        <div className='bg-accent text-white py-10'>
            <Container maxWidth='xl'>
                <div className='sm:flex items-center gap-10'>
                    <div className='sm:w-[40%]'>
                        {/* <div className='bg-primary p-2 w-24'>
                        <h1 className=' font-semibold text-white'>Inspiration</h1>
                    </div> */}
                        <h1 className='text-4xl font-extrabold mt-4 uppercase'>#Fashion Point</h1>
                        <p className='text-sm text-white text-justify mt-3'>Discover a world of style at your fingertips. Shop the latest trends in fashion online with our curated collection. Elevate your wardrobe with effortless elegance and express your unique personality. Explore, inspire, and embrace your fashion journey with us. Welcome to a seamless shopping experience.</p>

                        <div>
                            <button className='bg-primary text-white px-4 py-2 mt-5 rounded'>Shop Now</button>
                        </div>
                    </div>

                    <div className='sm:w-[60%] sm:block hidden '>
                        <div className='grid lg:grid-cols-7 md:grid-cols-6 sm:grid-cols-4 grid-cols-4 gap-3'>

                            <div className='h-32 w-full overflow-hidden'>
                                <Image
                                    src={img1}
                                    alt="3-pcs"
                                    height={500}
                                    width={300}
                                    className='h-full w-full object-cover'
                                />
                            </div>
                            <div className='h-32 overflow-hidden'>
                                <Image
                                    src={img2}
                                    alt="3-pcs"
                                    height={500}
                                    width={300}
                                    className='h-full w-full object-cover'
                                />
                            </div>
                            <div className='h-32 overflow-hidden'>
                                <Image
                                    src={img3}
                                    alt="3-pcs"
                                    height={500}
                                    width={300}
                                    className='h-full w-full object-cover'
                                />
                            </div>
                            <div className='h-32 overflow-hidden'>
                                <Image
                                    src={img4}
                                    alt="3-pcs"
                                    height={500}
                                    width={300}
                                    className='h-full w-full object-cover'
                                />
                            </div>
                            <div className='h-32 overflow-hidden'>
                                <Image
                                    src={img5}
                                    alt="3-pcs"
                                    height={500}
                                    width={300}
                                    className='h-full w-full object-cover'
                                />
                            </div>
                            <div className='h-32 overflow-hidden'>
                                <Image
                                    src={img6}
                                    alt="3-pcs"
                                    height={500}
                                    width={300}
                                    className='h-full w-full object-cover'
                                />
                            </div>
                            <div className='h-32 overflow-hidden'>
                                <Image
                                    src={img7}
                                    alt="3-pcs"
                                    height={500}
                                    width={300}
                                    className='h-full w-full object-cover'
                                />
                            </div>
                            <div className='h-32 overflow-hidden'>
                                <Image
                                    src={img8}
                                    alt="3-pcs"
                                    height={500}
                                    width={300}
                                    className='h-full w-full object-cover'
                                />
                            </div>
                            <div className='h-32 overflow-hidden'>
                                <Image
                                    src={img9}
                                    alt="3-pcs"
                                    height={500}
                                    width={300}
                                    className='h-full w-full object-cover'
                                />
                            </div>
                            <div className='h-32 overflow-hidden'>
                                <Image
                                    src={img10}
                                    alt="3-pcs"
                                    height={500}
                                    width={300}
                                    className='h-full w-full object-cover'
                                />
                            </div>
                            <div className='h-32 overflow-hidden'>
                                <Image
                                    src={img11}
                                    alt="3-pcs"
                                    height={500}
                                    width={300}
                                    className='h-full w-full object-cover'
                                />
                            </div>


                        </div>
                    </div>

                </div>
            </Container>
        </div>
    )
}
