import axios from "axios"
import { BASE_URL } from "./url"

export const createProduct = async data => {
    try {
      const res = await axios.post(`${BASE_URL}/product`, data)
      return res?.data
    } catch (error) {
      console.log(error)
    }
  }