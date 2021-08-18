import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Switch } from 'react-router'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignupPage from './pages/sign-in-and-signup/sign-in-and-signup.component'
import CheckoutPage from './pages/checkout/checkout.component'

import { selectCurrentUser } from './redux/user/user.selectors'
import { checkUserSession } from './redux/user/user.actions'

import './App.css'

class App extends React.Component {
  unsubscribeFromAuth = null
  componentDidMount() {
    const { checkUserSession } = this.props
    checkUserSession()
  }
  render() {
    const { currentUser } = this.props
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />

          <Route
            exact
            path='/signin'
            render={() =>
              currentUser ? <Redirect to='/' /> : <SignInAndSignupPage />
            }
          />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
