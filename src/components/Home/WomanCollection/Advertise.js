import React from 'react'
import img1 from '../../../assets/product/collection/bulbul-ahmed-YMWRzJiYmgk-unsplash.jpg'
import img2 from '../../../assets/product/collection/charlesdeluvio-_4K7BwaHUGc-unsplash.jpg'
import img3 from '../../../assets/product/collection/marcus-loke-xXJ6utyoSw0-unsplash.jpg'
import img4 from '../../../assets/product/collection/freestocks-_3Q3tsJ01nc-unsplash.jpg'
import Image from 'next/image'

export default function Advertise() {
    return (
        <div>
            <div className='grid grid-cols-2 gap-2'>
                <div className='relative'>
                    <Image
                        src={'https://i.ibb.co/L1SpSxM/marcus-loke-x-XJ6utyo-Sw0-unsplash.jpg'}
                        alt="Advertise"
                        height={724}
                        width={800}
                        className='h-full w-full object-cover'
                    />
                    <div className='absolute text-white sm:text-3xl uppercase font-bold top-10 left-5'>
                        <h1>Women's Collection</h1>
                    </div>
                </div>
                <div>
                    <div>
                        <Image
                            src={'https://i.ibb.co/7KbZXDk/freestocks-3-Q3ts-J01nc-unsplash.jpg'}
                            alt="Advertise"
                            height={400}
                            width={800}
                            className='h-full w-full object-cover'
                        />
                    </div>
                    <div className='grid grid-cols-2 gap-2'>
                        <div>
                            <Image
                                src={'https://i.ibb.co/x5P8bQJ/artawkrn-k-Yq-Iq1-SLJoc-unsplash.jpg'}
                                alt="Advertise"
                                height={400}
                                width={500}
                                className='h-full w-full object-cover'
                            />
                        </div>
                        <div>
                            <Image
                                src={'https://i.ibb.co/qjyKzS8/ashish-kumar-pandey-UIUDtnki-Tj-M-unsplash.jpg'}
                                alt="Advertise"
                                height={400}
                                width={500}
                                className='h-full w-full object-cover'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
