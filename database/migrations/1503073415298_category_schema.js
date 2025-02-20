'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CategorySchema extends Schema {
  up () {
    this.create('categories', (table) => {
      table.increments()
      table.string('title', 80).notNullable().unique()
      table.string('description', 500).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('categories')
  }
}

module.exports = CategorySchema
