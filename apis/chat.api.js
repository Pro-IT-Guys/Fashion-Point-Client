import axios from 'axios'

export const createChat = async data => {
  try {
    const res = await axios.post('http://localhost:8000/api/v1/chat', data)
    return res.data
  } catch (error) {
    console.log(error)
  }
}
