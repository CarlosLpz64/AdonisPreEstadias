'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class RolesCategory extends Model {
    static get table(){
        return 'roles_categories'
    }

    static get store(){
        return [
            'role_id',
            'category_id'
        ]
    }

    categories(){
        return this.belongsTo('App/Models/Category', 'category_id', 'id')
    }

    views(){
        return this.hasMany('App/Models/View', 'category_id', 'category_id')
    }
}

module.exports = RolesCategory
