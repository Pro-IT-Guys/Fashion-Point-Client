import React from 'react'
import Image from 'next/image'
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
import { Container } from '@mui/material'

export default function CategorySection() {
    return (
        <Container maxWidth='lg'>
            <h1 className='text-2xl font-semibold mb-2'>Category</h1>
            <div className='grid lg:grid-cols-9 md:grid-cols-6 sm:grid-cols-4 grid-cols-3 gap-3'>
                <div className='bg-white shadow rounded overflow-hidden cursor-pointer hover:shadow-md duration-200'>
                    <div className='h-32 overflow-hidden'>
                        <Image
                            src={img10}
                            alt="3-pcs"
                            width={500}
                            height={700}
                            className='h-full w-full object-cover'
                        />
                    </div>
                    <h1 className='text-center text-sm pt-1 pb-1 font-semibold'>Shirt</h1>
                </div>
                <div className='bg-white shadow rounded overflow-hidden cursor-pointer hover:shadow-md duration-200'>
                    <div className='h-32 overflow-hidden '>
                        <Image
                            src={img8}
                            alt="3-pcs"
                            width={500}
                            height={700}
                            className='h-full w-full object-cover'
                        />
                    </div>
                    <h1 className='text-center text-sm pt-1 pb-1 font-semibold'>Panjabi</h1>
                </div>
                <div className='bg-white shadow rounded overflow-hidden cursor-pointer hover:shadow-md duration-200'>
                    <div className='h-32 overflow-hidden '>
                        <Image
                            src={img11}
                            alt="3-pcs"
                            width={500}
                            height={700}
                            className='h-full w-full object-cover'
                        />
                    </div>
                    <h1 className='text-center text-sm pt-1 pb-1 font-semibold'>T-Shirt</h1>
                </div>
                <div className='bg-white shadow rounded overflow-hidden cursor-pointer hover:shadow-md duration-200'>
                    <div className='h-32 overflow-hidden '>
                        <Image
                            src={img4}
                            alt="3-pcs"
                            width={500}
                            height={700}
                            className='h-full w-full object-cover'
                        />
                    </div>
                    <h1 className='text-center text-sm pt-1 pb-1 font-semibold'>Coat</h1>
                </div>
                <div className='bg-white shadow rounded overflow-hidden cursor-pointer hover:shadow-md duration-200'>
                    <div className='h-32 overflow-hidden '>
                        <Image
                            src={img9}
                            alt="3-pcs"
                            width={500}
                            height={700}
                            className='h-full w-full object-cover'
                        />
                    </div>
                    <h1 className='text-center text-sm pt-1 pb-1 font-semibold'>Shari</h1>
                </div>
                <div className='bg-white shadow rounded overflow-hidden cursor-pointer hover:shadow-md duration-200'>
                    <div className='h-32 overflow-hidden '>
                        <Image
                            src={img7}
                            alt="3-pcs"
                            width={500}
                            height={700}
                            className='h-full w-full object-cover'
                        />
                    </div>
                    <h1 className='text-center text-sm pt-1 pb-1 font-semibold'>Lehenga</h1>
                </div>
                <div className='bg-white shadow rounded overflow-hidden cursor-pointer hover:shadow-md duration-200'>
                    <div className='h-32 overflow-hidden '>
                        <Image
                            src={img3}
                            alt="3-pcs"
                            width={500}
                            height={700}
                            className='h-full w-full object-cover'
                        />
                    </div>
                    <h1 className='text-center text-sm pt-1 pb-1 font-semibold'>Borka</h1>
                </div>
                <div className='bg-white shadow rounded overflow-hidden cursor-pointer hover:shadow-md duration-200'>
                    <div className='h-32 overflow-hidden '>
                        <Image
                            src={img5}
                            alt="3-pcs"
                            width={500}
                            height={700}
                            className='h-full w-full object-cover'
                        />
                    </div>
                    <h1 className='text-center text-sm pt-1 pb-1 font-semibold'>Hijab</h1>
                </div>
                <div className='bg-white shadow rounded overflow-hidden cursor-pointer hover:shadow-md duration-200'>
                    <div className='h-32 overflow-hidden '>
                        <Image
                            src={img1}
                            alt="3-pcs"
                            width={500}
                            height={700}
                            className='h-full w-full object-cover'
                        />
                    </div>
                    <h1 className='text-center text-sm pt-1 pb-1 font-semibold'>3-Piece</h1>
                </div>
            </div>
        </Container>
    )
}
