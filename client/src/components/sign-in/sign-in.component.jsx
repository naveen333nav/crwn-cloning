import React, { useState } from 'react'
import { connect } from 'react-redux'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.actions'

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
} from './sign-in.styles'
import './sign-in.styles.scss'

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  })

  const { email, password } = userCredentials

  const handleSubmit = async (event) => {
    event.preventDefault()
    emailSignInStart(email, password)
  }

  const handleChange = (event) => {
    const { value, name } = event.target
    setUserCredentials({ ...userCredentials, [name]: value })
  }

  return (
    <SignInContainer>
      <SignInTitle>I already have an Account</SignInTitle>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          value={email}
          label='email'
          handleChange={handleChange}
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          label='password'
          handleChange={handleChange}
          required
        />
        <ButtonsBarContainer>
          <CustomButton type='submit'>Sign In</CustomButton>
          <CustomButton
            type='button'
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign In With Google
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  )
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
})

export default connect(null, mapDispatchToProps)(SignIn)
