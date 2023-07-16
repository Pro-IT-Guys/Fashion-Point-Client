import { Container } from '@mui/material'
import React from 'react'
import Advertise from './Advertise'
import ShariCollection from './ShariCollections'
import LehengaCollection from './LehengaCollection'
import BorkaCollection from './BorkaCollection'

export default function WomanCollection() {


    return (
        <div className=''>
            <Container maxWidth='lg'>
                <Advertise />
                <ShariCollection />
                <LehengaCollection />
                <BorkaCollection />
            </Container>
        </div>
    )
}
