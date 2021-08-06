import React from 'react'
import './menu-item.styles.scss'

const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`${size} menu-item`}>
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    ></div>
    <div className='content'>
      <span className='title'>{title.toUpperCase()}</span>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
)

export default MenuItem
