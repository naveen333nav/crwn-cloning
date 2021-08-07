import React from 'react'
import { Route } from 'react-router-dom'
import { Switch } from 'react-router'
import HomePage from './pages/homepage/homepage'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignupPage from './pages/sign-in-and-signup/sign-in-and-signup.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import './App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser: null,
    }
  }
  unsubscribeFromAuth = null
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot((snapShot) => {
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            },
            () => console.log(this.state)
          )
        })
      } else {
        this.setState({ currentUser: userAuth }, () => console.log(this.state))
      }
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignupPage} />
        </Switch>
      </div>
    )
  }
}

export default App
