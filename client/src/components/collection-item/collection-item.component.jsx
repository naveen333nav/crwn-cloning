import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cart.actions'
import {
  CollectionItemContainer,
  AddButton,
  BackgroundImage,
  CollectionsFooterContainer,
  NameContainer,
  PriceContainer,
} from './collection-item.styles.jsx'

import './collection-item.styles.scss'

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item
  return (
    <CollectionItemContainer>
      <BackgroundImage className='image' imageUrl={imageUrl} />
      <CollectionsFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionsFooterContainer>
      <AddButton
        className='custom-button'
        inverted
        onClick={() => addItem(item)}
      >
        ADD TO CART
      </AddButton>
    </CollectionItemContainer>
  )
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
})
export default connect(null, mapDispatchToProps)(CollectionItem)
