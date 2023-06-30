import { getMessageOfChatId } from 'apis/chat.api'
import React, { useEffect, useState } from 'react'
import { Image } from 'next/image'
import imgs from '../../assets/banner/banner1.jpg'

const ChatUserItem = user => {
  const [userMessage, setUserMessage] = useState([])
    const {name, image, chatId} = user?.user

  useEffect(() => {
    const getUserMessage = async () => {
      const res = await getMessageOfChatId(user?.user?.chatId)
      setUserMessage(res?.data)
    }
    getUserMessage()
  }, [user])

  console.log(userMessage)

  return (
    <div className='hover:bg-[#f0f0f086] cursor-pointer duration-200'>
      <div className='flex items-center gap-2 border p-1 rounded'>
        <div>
          <img
            src={
              'https://static.vecteezy.com/system/resources/previews/013/042/571/original/default-avatar-profile-icon-social-media-user-photo-in-flat-style-vector.jpg'
            }
            alt="avatar"
            width={50}
            height={50}
          ></img>
        </div>
        <div>
            <h1 className='text-sm font-semibold'>{name?.firstName } {name?.lastName}</h1>
            <p className='text-xs '>{userMessage[userMessage?.length -1]?.text}</p>
        </div>
      </div>
    </div>
  )
}

export default ChatUserItem
