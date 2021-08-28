const express = require('express')
const cors = require('cors')
const path = require('path')
const Stripe = require('stripe')

if (process.env.NODE_ENV !== 'production') require('dotenv').config()

const stripe = Stripe(process.env.STRIPE_SECRET_KEY)

const appa = express()
const port = process.env.PORT || 5001

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')))
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  })
}

app.listen(port, (error) => {
  if (error) throw error
  console.log('listening on port 5001...')
})

app.post('/payment', (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'usd',
    description: 'impressive',
  }
  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.send({ error: stripeErr })
    } else {
      res.status(200).send({ success: stripeRes })
    }
  })
})
