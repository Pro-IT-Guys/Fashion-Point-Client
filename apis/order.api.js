import axios from 'axios'
import { BASE_URL } from './url'

export const getOrderById = async data => {
  const { orderId } = data
  try {
    const response = await axios.get(`${BASE_URL}/order/${orderId}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}
