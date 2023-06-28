import { Avatar, Box, Button, Card, Divider, Typography } from '@mui/material'
import MenuPopover from '../MenuPopover'
import { styled } from '@mui/material/styles'
import InputEmoji from 'react-input-emoji'
import MessageItem from './MessageItem'
import { userId } from 'constant/constant'
import { useState } from 'react'
import { CustomIcons } from 'public/static/mui-icons'
import { ButtonAnimate } from '../animate'

const InfoStyle = styled(Typography)(({ theme }) => ({
  display: 'flex',
  marginBottom: theme.spacing(0.75),
  color: theme.palette.text.secondary,
}))

const MessageImgStyle = styled('img')(({ theme }) => ({
  width: '100%',
  cursor: 'pointer',
  objectFit: 'cover',
  borderRadius: theme.shape.borderRadius,
  [theme.breakpoints.up('md')]: {
    height: 200,
    minWidth: 296,
  },
}))

export default function ChatPopup({
  openChat,
  setOpenChat,
  anchorRef,
  message,
  chat,
}) {
  const [inputMeassage, setInputMessage] = useState('')
  const sender = chat?.members?.find(member => member?._id === userId)

  const handleInputMessage = text => {
    setInputMessage(text)
  }

  return (
    <MenuPopover
      open={openChat}
      onClose={() => setOpenChat(false)}
      anchorEl={anchorRef}
      sx={{
        width: {
          xs: 280,
          sm: 320,
          md: 500,
        },
        transformOrigin: {
          vertical: 'bottom',
          horizontal: 'right',
        },
        marginTop: '-65px',
        marginLeft: '-10px',
      }}
    >
      <Box sx={{ my: 1.5, px: 2.5 }}>
        <Typography variant="subtitle1" noWrap>
          {sender?.name?.firstName} {sender?.name?.lastName}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
          {sender?.email}
        </Typography>
      </Box>

      <Divider />

      <Box
        sx={{
          maxHeight: '250px',
          overflowY: 'auto',
        }}
      >
        {message?.map((item, index) => (
          <MessageItem key={index} message={item} chat={chat} />
        ))}
      </Box>

      <Box sx={{ paddingBottom: 1.5, display: 'flex', px: 2.8 }}>
        <InputEmoji value={inputMeassage} onChange={handleInputMessage} />
        <ButtonAnimate mediumClick={true}>
          <Button>
            <CustomIcons.SendIcon />
          </Button>
        </ButtonAnimate>
      </Box>
    </MenuPopover>
  )
}
