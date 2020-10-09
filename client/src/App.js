import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import jwt_decode from 'jwt-decode'
import setAuthToken from './utils/setAuthToken'
import { setCurrentUser, logoutUser } from './actions/authActions'
import { Provider } from 'react-redux'
import store from './store'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Home from './components/layout/Home'
import Dashboard from './components/dashboard/Dashboard'
import NavBar from './components/layout/Navbar'
import PrivateRoute from './components/private-route/PrivateRoute'

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken
  setAuthToken(token)
  // Decode token and get user info and exp
  const decoded = jwt_decode(token)
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded)) // Check for expired token
  const currentTime = Date.now() / 1000 // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser()) // Redirect to login
    window.location.href = './login'
  }
}

const useStyles = makeStyles((theme) => ({
  root: { flexGrow: 1, paddingTop: 50 },
}))

function App() {
  const classes = useStyles()
  return (
    <Provider store={store}>
      <Router>
        <div className={classes.root}>
          <NavBar />
          <Route exact path='/' component={Home} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Switch>
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
          </Switch>
        </div>
      </Router>
    </Provider>
  )
}

export default App
