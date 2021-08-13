import React from 'react'
import { withRouter } from 'react-router'

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
} from './menu-item.styles'
import './menu-item.styles.scss'

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => (
  <>
    <MenuItemContainer
      className={size}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <BackgroundImageContainer
        className='background-image'
        imageUrl={imageUrl}
      ></BackgroundImageContainer>
      <ContentContainer className='content'>
        <ContentTitle>{title.toUpperCase()}</ContentTitle>
        <ContentSubtitle>SHOP NOW</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  </>
)

export default withRouter(MenuItem)
