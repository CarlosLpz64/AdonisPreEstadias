'use strict'

class VistasView {
  get rules () {
    return {
      // validation rules
      route:'required | max:50',
      name:'required | max:254',
      icon:'required | max:50',
      category_id:'required'
    }
  }
}

module.exports = VistasView
