'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Category extends Model {
    static get table(){
        return 'categories'
    }
    
    static get store(){
        return [
          'name',
          'status'
        ]
    }

    categories(){
        return this.hasMany('App/Models/RolesCategory', 'id', 'category_id')
    }
}

module.exports = Category
