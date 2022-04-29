'use strict'

class VistasCategory {
  get rules () {
    return {
      // validation rules
      name:'required | min:3 | max:255 | unique:categories,name'
    }
  }
}

module.exports = VistasCategory
