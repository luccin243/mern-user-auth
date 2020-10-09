import React, { useEffect } from 'react'
import clsx from 'clsx'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loginUser } from '../../actions/authActions'

import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import Singin from '../../assets/undraw_mobile_login_ikmv.png'
import LinkPath from './../section/LinkPath'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  margin: { margin: theme.spacing(1) },
  textField: { width: '30ch' },
  btn: { height: '6ch' },
  other: { display: 'flex', width: '100%' },
}))

const Login = (props) => {
  const classes = useStyles()
  const [values, setValues] = React.useState({
    amount: '',
    weight: '',
    weightRange: '',
    showPassword: false,
    email: '',
    password: '',
    errors: {},
  })


  useEffect(() => {
    if (props.auth.isAuthenticated) {
      props.history.push('/dashboard')
    }
  }, [props.auth.isAuthenticated])

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const preventDefault = (event) => {
    event.preventDefault()
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const userData = {
      email: values.email,
      password: values.password,
    }
    props.loginUser(userData)
  }

  const { errors } = values

  return (
    <div className={classes.root}>
      <img src={Singin} alt='Sing up' style={{ width: 240 }} />
      <div className={classes.container}>
        <form
          noValidate
          autoComplete='off'
          onSubmit={onSubmit}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          {}
          <TextField
            id='email'
            label='Email'
            className={clsx(classes.margin, classes.textField)}
            variant='outlined'
            value={values.email}
            onChange={handleChange('email')}
            error={errors.email}
          />
          {}
          <FormControl
            className={clsx(classes.margin, classes.textField)}
            variant='outlined'
          >
            <InputLabel htmlFor='outlined-adornment-password'>
              Password
            </InputLabel>
            <OutlinedInput
              id='outlined-adornment-password'
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              error={errors.password}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    onMouseDown={preventDefault}
                    edge='end'
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={90}
            />
          </FormControl>
          <Button
            variant='contained'
            color='primary'
            type='submit'
            className={clsx(classes.margin, classes.btn)}
          >
            Login
          </Button>
        </form>
        <Typography
          variant='subtitle1'
          style={{ fontFamily: 'roboto', margin: 5 }}
        >
          <Link href='#' onClick={preventDefault}>
            Forgot your password ?
          </Link>
        </Typography>
        <div className={classes.other}>
          <Button
            variant='contained'
            color='secondary'
            className={clsx(classes.margin, classes.other, classes.btn)}
          >
            <LinkPath path='/register' name='Sign up' />
          </Button>
        </div>
        <Typography
          variant='subtitle1'
          style={{ fontFamily: 'roboto', margin: 5 }}
        >
          If you haven't an account yet
        </Typography>
      </div>
    </div>
  )
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
})
export default connect(mapStateToProps, { loginUser })(Login)
