'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RolesCategoriesSchema extends Schema {
  up () {
    this.create('roles_categories', (table) => {
      table.increments('id').primary()
      table.integer('role_id').unsigned().references('id').inTable('roles').onDelete('CASCADE')
      table.integer('category_id').unsigned().references('id').inTable('categories').onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('roles_categories')
  }
}

module.exports = RolesCategoriesSchema
