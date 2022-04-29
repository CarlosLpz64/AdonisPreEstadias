'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class View extends Model {
    static get table(){
        return 'views'
    }

    static get store(){
        return [
            'route',
            'name',
            'icon',
            'category_id'
        ]
    }

    views(){
        return this.hasMany('App/Models/RolesCategory', 'category_id', 'category_id')
    }
}

module.exports = View
