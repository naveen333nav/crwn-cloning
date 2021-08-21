import React from 'react'

import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey =
    'pk_test_51JN9BXSH24F6JZBNq4y4IV0s74zuCOfaeR4vTi85cqy1CbQfVLXHjtktOFmbalKvG33TBTGSEpA1DDjbm59B6BfF00lr1C2UVt'
  const onToken = (token) => {
    console.log(token)
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert('payment successful')
      })
      .catch((error) => {
        console.log(error)
        alert(
          'There was a problem with your payment. Please sure you use the provided credit card.'
        )
      })
  }
  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
