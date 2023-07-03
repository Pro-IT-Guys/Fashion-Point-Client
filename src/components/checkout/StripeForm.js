import { useState } from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { Button, CircularProgress } from '@mui/material'

const StripeForm = ({ handleSubmit }) => {
  const stripe = useStripe()
  const elements = useElements()
  const [loading, setLoading] = useState(false)

  const handlePaymentSubmit = async event => {
    event.preventDefault()

    setLoading(true)

    if (!stripe || !elements) {
      return
    }

    const cardElement = elements.getElement(CardElement)

    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    })

    console.log(paymentMethod, 'paymentMethod')

    if (error) {
      console.error(error)
      setLoading(false)
      return
    }

    handleSubmit(paymentMethod.id)
  }

  return (
    <form onSubmit={handlePaymentSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
            },
          },
        }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={!stripe || loading}
        sx={{ mt: 2 }}
      >
        {loading ? <CircularProgress size={24} /> : 'Pay Now'}
      </Button>
    </form>
  )
}

export default StripeForm
