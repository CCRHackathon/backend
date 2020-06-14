'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ServicesSchema extends Schema {
  up () {
    this.create('services', (table) => {
      table.increments()
      table.string('name', 60).notNullable()
      table.string('description', 500)
      table.integer('category_id').unsigned().references('id').inTable('categories')
      table.integer('place_id').unsigned().references('id').inTable('places')
      table.timestamps()
    })
  }

  down () {
    this.drop('services')
  }
}

module.exports = ServicesSchema
