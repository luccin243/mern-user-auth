import React from 'react'
import clsx from 'clsx'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { registerUser } from '../../actions/authActions'

import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import Signup from '../../assets/undraw_sign_in_e6hj.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  margin: { margin: theme.spacing(1) },
  withoutLabel: { marginTop: theme.spacing(3) },
  textField: { width: '30ch' },
  btn: { height: '6ch' },
}))

const Register = (props) => {
  const classes = useStyles()
  const [values, setValues] = React.useState({
    amount: '',
    weight: '',
    weightRange: '',
    showPassword: false,
    name: '',
    lastName: '',
    email: '',
    password: '',
    password2: '',
    errors: {},
  })

  React.useEffect(() => {
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

    const newUser = {
      name: values.name,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
      password2: values.password2,
    }

    props.registerUser(newUser, props.history)
  }

  const { errors } = values

  return (
    <div className={classes.root}>
      <img src={Signup} alt='Sing up' style={{ width: 240 }} />
      <form
        noValidate
        autoComplete='off'
        onSubmit={onSubmit}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        {}
        <TextField
          required
          id='name'
          label='Name'
          className={clsx(classes.margin, classes.textField)}
          variant='outlined'
          value={values.name}
          onChange={handleChange('name')}
          error={errors.name}
        />
        {}
        <TextField
          required
          id='lastName'
          label='Last Name'
          className={clsx(classes.margin, classes.textField)}
          variant='outlined'
          value={values.lastName}
          onChange={handleChange('lastName')}
          error={errors.lastName}
        />
        {}
        <TextField
          required
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
          <InputLabel htmlFor='outlined-adornment-password' required>
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
        {}
        <TextField
          required
          id='password2'
          type='password'
          autoComplete='current-password'
          label='Confirm your password'
          className={clsx(classes.margin, classes.textField)}
          variant='outlined'
          value={values.password2}
          onChange={handleChange('password2')}
          error={errors.password2}
        />
        {}
        <Button
          variant='contained'
          color='primary'
          type='submit'
          className={clsx(classes.margin, classes.btn)}
        >
          Sign up
        </Button>
      </form>
    </div>
  )
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = (values) => ({
  auth: values.auth,
  errors: values.errors,
})

export default connect(mapStateToProps, { registerUser })(withRouter(Register))
