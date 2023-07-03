import React, { useContext, useState } from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { IoLogoYoutube } from 'react-icons/io'
import { BsTwitter } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { BsTelephoneOutboundFill } from 'react-icons/bs'
import MenuItem from '@mui/material/MenuItem'
import { Container, Select } from '@mui/material'
import { ContextData } from 'context/dataProviderContext'

export default function TopNavbar() {
  const { toCurrency, setToCurrency } = useContext(ContextData)

  return (
    <div>
      <div className="bg-primary py-1 md:block hidden">
        <Container maxWidth="lg">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="sm:text-xs text-xs  flex items-center gap-2">
                Follow us
                <span className="cursor-pointer hover:text-accent duration-300">
                  <FaFacebookF />
                </span>
                <span className="cursor-pointer hover:text-accent duration-300">
                  <IoLogoYoutube />
                </span>
                <span className="cursor-pointer hover:text-accent duration-300">
                  <BsTwitter />
                </span>
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <h1 className="sm:text-xs text-xs flex items-center gap-1 font-normal">
                {' '}
                <span>
                  <MdEmail />
                </span>
                dhs@gmail.com
              </h1>
              <div className="sm:text-xs text-xs flex items-center gap-1 font-normal">
                {' '}
                <span>
                  <BsTelephoneOutboundFill />
                </span>
                01868-032281
              </div>
              <div className=" z-50">
                <Select
                  value={toCurrency}
                  onChange={e => setToCurrency(e.target.value)}
                  label="Currency"
                  className="hover:border-none"
                  sx={{
                    fontSize: '0.7rem',
                    color: '#fff',
                    padding: '0',
                    border: 'none',
                    '&:hover': {
                      border: 'none',
                    },
                    ":focus": {
                      border: 'none',
                    },
                  }}
                >
                  <MenuItem value="USD">$ USD</MenuItem>
                  <MenuItem value="AED"> د.إ AED</MenuItem>
                </Select>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}
