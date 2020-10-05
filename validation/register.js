const Validator = require('validator')
const isEmpty = require('is-empty')

module.exports = function validateRegisterInput (data) {
  let errors = {}

  // Convert empty fields to an empty string
  data.name = !isEmpty(data.name) ? data.name : ''
  data.lastName = !isEmpty(data.lastName) ? data.lastName : ''
  data.email = !isEmpty(data.email) ? data.email : ''
  data.password = !isEmpty(data.password) ? data.password : ''
  data.password2 = !isEmpty(data.password2) ? data.password : ''

  // Checking name
  if (Validator.isEmpty(data.name)) {
    errors.name = 'You must put your name'
  }

  // Checking lastName
  if (Validator.isEmpty(data.lastName)) {
    errors.name = 'You must put your Last Name'
  }

  // Email Checking
  if (Validator.isEmpty(data.email)) {
    errors.email = 'You must put your email'
  } else if (!validator.isEmpty(data.email)) {
    errors.email = 'Your email is invalid'
  }

  // Passwords checks
  // Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = 'You must choose a password'
  }

  // Password2 checks
  if (Validator.isEmpty(data.password2)) {
    errors.password2 = 'You must confirm your password'
  }

  // Password length checks
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Password must be at least 6 characters'
  }

  // Confirmation password checks
  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = 'Password must match'
  }

  return { errors, isValid: isEmpty(erros) }
}
