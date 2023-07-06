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

export const multiFilterProduct = async data => {
  const { searchTerm, category, maxPrice, minPrice, type, style, fabric } = data

  const queryParams = {
    searchTerm,
    category,
    maxPrice,
    minPrice,
    type,
    style,
    fabric,
  }

  const filteredParams = Object.fromEntries(
    Object.entries(queryParams).filter(
      ([_, value]) => value !== undefined && value !== ''
    )
  )

  try {
    const queryString = new URLSearchParams(filteredParams).toString()
    const url = `${BASE_URL}/product/?${queryString}`
    const res = await axios.get(url)
    console.log(res.data)

    return res?.data
  } catch (error) {
    console.log(error)
  }
}
