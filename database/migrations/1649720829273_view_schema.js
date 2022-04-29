'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ViewSchema extends Schema {
  up () {
    this.create('views', (table) => {
      table.increments('id')
      table.string('route', 50).notNullable()
      table.string('name', 254).notNullable()
      table.string('icon', 50).notNullable()
      table.integer('category_id').unsigned().references('id').inTable('categories').onDelete('CASCADE')
      table.boolean('status').defaultTo(true)
      table.timestamps()
    })
  }

  down () {
    this.drop('views')
  }
}

module.exports = ViewSchema
