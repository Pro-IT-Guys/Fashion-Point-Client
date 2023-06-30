import { getChats } from 'apis/chat.api'
import React, { useEffect, useState } from 'react'
import ChatUserItem from './chatUserItem'

const ChatSideBar = () => {
  const [chats, setChats] = useState([])

  useEffect(() => {
    const getChatAll = async () => {
      const res = await getChats()
      setChats(res?.data)
    }
    getChatAll()
  }, [])

  // console.log(chats);

  let chatUser = []
  // get all chats user without admin
  const userChat = chats?.map(chat => {
    chat?.members?.map(member => {
      // console.log(member);
      if (member?.role !== 'admin') {
        member.chatId = chat?._id
        chatUser.push(member)
      }
    })
  })

  return (
    <div className='mt-5'>
      <div className="h-[70vh] w-[20%] border rounded bg-white shadow p-2 overflow-y-scroll">
        {chatUser?.map(user => (
          <ChatUserItem user={user} key={user?._id} />
        ))}
      </div>
    </div>
  )
}

export default ChatSideBar
