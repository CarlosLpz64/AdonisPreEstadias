'use strict'

class Roles {
  get rules () {
    return {
      name: 'required|min:3|max:50|unique:roles,name',
      status: 'required'
    }
  }
}

module.exports = Roles
