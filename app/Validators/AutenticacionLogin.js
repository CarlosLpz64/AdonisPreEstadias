'use strict'

class AutenticacionLogin {
  get rules () {
    return {
      email: 'required',
      password: 'required'
    }
  }
}

module.exports = AutenticacionLogin
