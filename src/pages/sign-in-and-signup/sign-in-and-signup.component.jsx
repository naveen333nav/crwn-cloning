import React from 'react'

import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'
import { SignInAndSignupContainer } from './sign-in-and-signup.styles'

import './sign-in-and-signup.styles.scss'

const SignInAndSignupPage = () => (
  <SignInAndSignupContainer className='sign-in-and-sign-up'>
    <SignIn />
    <SignUp />
  </SignInAndSignupContainer>
)

export default SignInAndSignupPage
