import axios from 'axios'

export const stripePayment = async data => {
  const { orderId, token, currency, amount } = data

  try {
    await axios.post('/payment/stripe', {
      orderId,
      token,
      currency,
      amount,
    })
  } catch (error) {
    console.log(error)
  }
}
