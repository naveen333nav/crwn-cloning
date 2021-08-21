import React from 'react'

import { CustomButtomContainer } from './custom-button.styles'
import './custom-button.styles.scss'

const CustomButton = ({ children, ...otherProps }) => (
  <CustomButtomContainer {...otherProps}>{children}</CustomButtomContainer>
)

export default CustomButton
