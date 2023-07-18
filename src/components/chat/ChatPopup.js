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

export default function ChatPopup({
  socket,
  openChat,
  setOpenChat,
  anchorRef,
  chat,
  setMessage,
  message,
  setSendMessageBase,
  productUrl,
}) {
  const boxRef = useRef(null)
  const { currentlyLoggedIn } = useContext(ContextData)
  const [inputMeassage, setInputMessage] = useState('')

  const sender = chat?.members?.find(
    member => member?._id === currentlyLoggedIn?._id
  )

  // Scroll to the last message when the message list updates
  useEffect(() => {
    if (boxRef.current) {
      boxRef.current.scrollTop = boxRef.current.scrollHeight
    }
  }, [message])

  // Receive message from socket server and set message
  useEffect(() => {
    if (socket) {
      socket.on('getMessage', data => {
        setMessage(prev => [...prev, data])
      })
      setSendMessageBase(false)
    }
  }, [socket])

  useEffect(() => {
    const sendAutoMationMessage = async () => {
      const chatId = chat?._id
      const senderId = currentlyLoggedIn?._id

      const newMessage = await sendMessage({
        chatId,
        senderId,
        text: productUrl,
      })

      setMessage([...message, newMessage?.data])
      const receiverId = chat?.members?.find(
        member => member._id !== senderId
      )?._id
      socket.emit('sendMessage', {
        senderId,
        receiverId,
        createdAt: newMessage?.data?.createdAt,
        text: productUrl,
      })
    }
    if (productUrl && openChat) {
      sendAutoMationMessage()
    }
  }, [openChat])

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

    setMessage([...message, newMessage?.data])
    const receiverId = chat?.members?.find(
      member => member._id !== senderId
    )?._id
    socket.emit('sendMessage', {
      senderId,
      receiverId,
      createdAt: newMessage?.data?.createdAt,
      text: inputMeassage,
    })

    setSendMessageBase(true)
    setInputMessage('')
  }

  return (
    <MenuPopover
      open={openChat}
      onClose={() => setOpenChat(false)}
      anchorEl={anchorRef}
      sx={{
        width: {
          md: 500,
          xs: 400
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
        ref={boxRef}
        sx={{
          maxHeight: '350px',
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

      <Box sx={{ paddingBottom: 1.5, display: 'flex', alignItems:'center', pl: 2.5, pr:1.5 }}>
      <div className='w-[90%]'>
      <InputEmoji value={inputMeassage} onChange={handleInputMessage} />
      </div>
       <div className='w-[10%] p-0 overflow-hidden'>
       {/* <ButtonAnimate mediumClick={true} className='p-0'> */}
          <div onClick={handleSendMessage} className='p-0'>
            <CustomIcons.SendIcon  className='p-0 m-0 text-[#7D014D]'/>
          </div>
        {/* </ButtonAnimate> */}
       </div>
      </Box>
    </MenuPopover>
  )
}
