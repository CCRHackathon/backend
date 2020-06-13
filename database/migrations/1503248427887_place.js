'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PlaceSchema extends Schema {
  up () {
    this.create('places', (table) => {
      table.increments()
      table.string('username', 80).notNullable().unique()
      table.decimal('lat', 8, 3).notNullable()
      table.decimal('long', 8, 3).notNullable()
      table.string('name', 60).notNullable()
      table.string('description', 500)
      table.integer('category').unsigned().references('id').inTable('categories')
      table.integer('rating').unsigned().references('id').inTable('ratings')
      table.timestamps()
    })
  }

  down () {
    this.drop('places')
  }
}

module.exports = PlaceSchema
