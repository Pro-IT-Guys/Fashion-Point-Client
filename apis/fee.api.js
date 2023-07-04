import axios from 'axios'
const { BASE_URL } = require('./url')

export const getAllCountriesWithFees = async () => {
  const response = await axios.get(`${BASE_URL}/fee/all`)
  return response.data
}
