import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { logoutUser } from '../../actions/authActions'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Button } from '@material-ui/core'
import Welcome from '../../assets/undraw_Mobile_application_mr4r.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100vh',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
  btnSection: { display: 'flex', alignItems: 'center', margin: 20 },
  btn: { margin: 5 },
}))

const Dashboard = (props) => {
  const classes = useStyles()

  const onLogoutClick = (event) => {
    event.preventDefault()
    props.logoutUser()
  }

  const { user } = props.auth

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <img src={Welcome} alt='Luccin Dev' style={{ width: 240 }} />
        <Typography
          variant='h6'
          component='h1'
          style={{ fontFamily: 'roboto', margin: 5, textAlign: 'center' }}
        >
          Hey, {user.name} {user.lastName}
        </Typography>
        <Typography
          variant='h4'
          component='h1'
          style={{ fontFamily: 'monospace', textAlign: 'center' }}
        >
          Great! You're connected
        </Typography>
        <span role='img' aria-label='congratilations'>
          👏
        </span>
        <Typography
          variant='subtitle1'
          style={{ fontFamily: 'roboto', margin: 5, textAlign: 'center' }}
        >
          A simple user authentification buit with MERN by Luccin Masirika
        </Typography>
        <div className={classes.btnSection}>
          <Button
            variant='contained'
            color='secondary'
            className={classes.btn}
            onClick={onLogoutClick}
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  )
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}
const mapStateToProps = (state) => ({
  auth: state.auth,
})
export default connect(mapStateToProps, { logoutUser })(Dashboard)
