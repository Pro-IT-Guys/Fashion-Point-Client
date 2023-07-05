import axios from 'axios'
import { BASE_URL } from './url'

export const createProduct = async data => {
  try {
    const res = await axios.post(`${BASE_URL}/product`, data)
    return res?.data
  } catch (error) {
    console.log(error)
  }
}

export const getProductBySku = async sku => {
  try {
    const res = await axios.get(`${BASE_URL}/product/sku/${sku}`)
    
    return res?.data
  } catch (error) {
    console.log(error)
  }
}
