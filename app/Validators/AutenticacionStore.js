'use strict'

class AutenticacionStore {
  get rules () {
    return {
      username: 'required',
      email: 'required|email|unique:users,email',
      rol: 'required',
      password: 'required'
    }
  }
}

module.exports = AutenticacionStore
