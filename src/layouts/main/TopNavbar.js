import React, { useRef, useState } from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { IoLogoYoutube } from 'react-icons/io'
import { BsTwitter } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { BsTelephoneOutboundFill } from 'react-icons/bs'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Grow from '@mui/material/Grow'
import Paper from '@mui/material/Paper'
import Popper from '@mui/material/Popper'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import { Container, Menu, Select } from '@mui/material'

const options = ['$ USD', 'د.إ AED']

export default function TopNavbar() {
  const [currency, setCurrency] = useState('AED')

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
                  value={currency}
                  onChange={e => setCurrency(e.target.value)}
                  label="Currency"
                  sx={{ fontSize: '0.75rem', color: '#fff', border: 'none' }}
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
