
import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { IoLogoYoutube } from 'react-icons/io'
import { BsTwitter } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { BsTelephoneOutboundFill } from 'react-icons/bs'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { Container } from '@mui/material'


const options = ['$ USD', "د.إ AED", ];


export default function  TopNavbar () {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);
  
    const handleClick = () => {
      console.info(`You clicked ${options[selectedIndex]}`);
    };
  
    const handleMenuItemClick = (event, index) => {
      setSelectedIndex(index);
      setOpen(false);
    };
  
    const handleToggle = () => {
      setOpen((prevOpen) => !prevOpen);
    };
  
    const handleClose = (event) => {
      if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
      }
  
      setOpen(false);
    };
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
                <ButtonGroup
                className='text-xs'
                  variant="contained"
                  ref={anchorRef}
                  aria-label="split button"
                >
                  <Button className='text-xs' onClick={handleClick}>
                    {options[selectedIndex]}
                  </Button>
                  <Button
                  className='text-xs'
                    size="small"
                    aria-controls={open ? 'split-button-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-label="select merge strategy"
                    aria-haspopup="menu"
                    onClick={handleToggle}
                  >
                    <ArrowDropDownIcon />
                  </Button>
                </ButtonGroup>
                <Popper
                  sx={{
                    zIndex: 1,
                  }}
                  open={open}
                  anchorEl={anchorRef.current}
                  role={undefined}
                  transition
                  disablePortal
                >
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{
                        transformOrigin:
                          placement === 'bottom'
                            ? 'center top'
                            : 'center bottom',
                      }}
                    >
                      <Paper className='text-xs'>
                        <ClickAwayListener onClickAway={handleClose}>
                          <MenuList className='text-xs' id="split-button-menu" autoFocusItem>
                            {options.map((option, index) => (
                              <MenuItem
                                key={option}
                                disabled={index === 2}
                                selected={index === selectedIndex}
                                onClick={event =>
                                  handleMenuItemClick(event, index)
                                }
                              >
                                {option}
                              </MenuItem>
                            ))}
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}
