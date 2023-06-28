import axios from 'axios'

export const createChat = async data => {
  try {
    const res = await axios.post('http://localhost:8000/api/v1/chat', data)
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export const getMessageOfChatId = async chatId => {
  try {
    const res = await axios.get(
      `http://localhost:8000/api/v1/message/${chatId}`
    )
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export const getChatOfSenderAndReceiver = async data => {
  try {
    const { senderId, receiverId } = data
    const res = await axios.get(
      `http://localhost:8000/api/v1/chat/${senderId}/${receiverId}`
    )
    return res.data
  } catch (error) {
    console.log(error)
  }
}
