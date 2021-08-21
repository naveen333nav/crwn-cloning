import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'

import CartItem from '../cart-item/cart-item.component'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItems } from '../../redux/cart/cart.selectors'

import {
  CartDropDownContainer,
  CartDropDownButton,
  EmptyMessageContainer,
  CartItemsContainer,
} from './cart-dropdown.styles'

import './cart-dropdown.styles.scss'

const CartDropDown = ({ cartItems, history, dispatch }) => (
  <CartDropDownContainer>
    <CartItemsContainer className='cart-items'>
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
      )}
    </CartItemsContainer>
    <CartDropDownButton
      onClick={() => {
        history.push('/checkout')
        dispatch(toggleCartHidden())
      }}
    >
      Go To Checkout
    </CartDropDownButton>
  </CartDropDownContainer>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
})
export default withRouter(connect(mapStateToProps)(CartDropDown))
