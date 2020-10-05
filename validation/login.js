const Validator = require('validator')
const isEmpty = require('is-empty')

module.exports = function validateLoginInput (data) {
  let errors = {}

  // Convert empty fields to an empty String
  data.email = !isEmpty(data.email) ? data.email : ''
  data.password = !isEmpty(data.password) ? data.password : ''

  // Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = 'You must put your email to login'
  } else if (!Validator.isEmpty(data.email)) {
    errors.email = 'Email intervalid'
  }

  // Password checks
  if (Validator.isEmpty(data.password)) {
    erros.password = 'You must put your password to login'
  }

  return { errors, isValid: isEmpty(erros) }
}
