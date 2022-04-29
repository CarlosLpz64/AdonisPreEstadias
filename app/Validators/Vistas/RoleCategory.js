'use strict'

class VistasRoleCategory {
  get rules () {
    return {
      // validation rules
      role_id:'required',
      category_id:'required'
    }
  }
}

module.exports = VistasRoleCategory
