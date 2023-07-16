import React from 'react'
import Image from 'next/image'
import { Container } from '@mui/material'

export default function MensAdvertise() {
    return (
        <Container maxWidth='lg'>
            <div className='grid grid-cols-2 gap-2 my-10'>
                <div>
                    <div>
                        <Image
                            src={'https://i.ibb.co/Y3qNWJY/alvin-mahmudov-Dn-Jio-J8nhx-I-unsplash.jpg'}
                            alt="Advertise"
                            height={400}
                            width={800}
                            className='h-full w-full object-cover'
                        />
                    </div>
                    <div className='grid grid-cols-2 gap-2'>
                        <div>
                            <Image
                                src={'https://i.ibb.co/pvP5xNT/oguz-yagiz-kara-x64-XRb-P45fg-unsplash.jpg'}
                                alt="Advertise"
                                height={400}
                                width={500}
                                className='h-full w-full object-cover'
                            />
                        </div>
                        <div>
                            <Image
                                src={'https://i.ibb.co/3p8XDfF/waldemar-Db4d6-MRIXJc-unsplash.jpg'}
                                alt="Advertise"
                                height={400}
                                width={500}
                                className='h-full w-full object-cover'
                            />
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <Image
                        src={'https://i.ibb.co/BNqWjcQ/nick-de-partee-5-DLBo-EX99-Cs-unsplash.jpg'}
                        alt="Advertise"
                        height={724}
                        width={800}
                        className='h-full w-full object-cover'
                    />
                    <div className='absolute text-white sm:text-3xl uppercase font-bold top-10 right-5'>
                        <h1>Men's Collection</h1>
                    </div>
                </div>
            </div>
        </Container>
    )
}
