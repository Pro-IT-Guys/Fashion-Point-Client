import { Avatar, Box, Button, Card, Divider, Typography } from '@mui/material'
import MenuPopover from '../MenuPopover'
import { styled } from '@mui/material/styles'
import InputEmoji from 'react-input-emoji'
import MessageItem from './MessageItem'
import { useContext, useEffect, useRef, useState } from 'react'
import { CustomIcons } from 'public/static/mui-icons'
import { ButtonAnimate } from '../animate'
import { getMessageOfChatId, sendMessage } from 'apis/chat.api'
import { ContextData } from 'context/dataProviderContext'
import { io } from 'socket.io-client'

export default function ChatPopup({ openChat, setOpenChat, anchorRef, chat }) {
  const socket = useRef()
  // socket.current = io('http://localhost:8080')
  const { currentlyLoggedIn } = useContext(ContextData)

  const [onlineUsers, setOnlineUsers] = useState([])
  const [message, setMessage] = useState([])
  const [inputMeassage, setInputMessage] = useState('')

  const sender = chat?.members?.find(
    member => member?._id === currentlyLoggedIn?._id
  )

  useEffect(() => {
    const retriveMessage = async () => {
      if (chat?._id) {
        const messages = await getMessageOfChatId(chat?._id)
        setMessage(messages.data)
      }
    }
    retriveMessage()
  }, [chat])

  // Initialize socket..Make useEffect if only the currentlyLoggedIn exist
  useEffect(() => {
    if (currentlyLoggedIn) {
      socket.current = io('http://localhost:8080')
      socket.current.emit('join', currentlyLoggedIn._id)
      socket.current.on('activeUsers', users => {
        setOnlineUsers(users)
      })
    }
  }, [currentlyLoggedIn])

  

  // Main functions==========>
  const handleInputMessage = text => {
    setInputMessage(text)
  }

  const handleSendMessage = async () => {
    const chatId = chat?._id
    const senderId = currentlyLoggedIn?._id

    const newMessage = await sendMessage({
      chatId,
      senderId,
      text: inputMeassage,
    })
    setMessage([...message, newMessage.data])
    const receiverId = chat?.members?.find(member => member?._id !== senderId)
    setInputMessage('')
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
          <MessageItem
            key={index}
            message={item}
            chat={chat}
            user={currentlyLoggedIn}
          />
        ))}
      </Box>

      <Box sx={{ paddingBottom: 1.5, display: 'flex', px: 2.8 }}>
        <InputEmoji value={inputMeassage} onChange={handleInputMessage} />
        <ButtonAnimate mediumClick={true}>
          <Button onClick={handleSendMessage}>
            <CustomIcons.SendIcon />
          </Button>
        </ButtonAnimate>
      </Box>
    </MenuPopover>
  )
}
