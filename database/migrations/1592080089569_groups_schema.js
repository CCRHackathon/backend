'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GroupsSchema extends Schema {
  up () {
    this.create('groups', (table) => {
      table.increments()
      table.string('name', 80).notNullable()
      table.decimal('lat', 8, 3).notNullable()
      table.decimal('long', 8, 3).notNullable()
      table.string('radio_frequency', 30).notNullable()
      table.string('description', 500)
      table.timestamps()
    })
  }

  down () {
    this.drop('groups')
  }
}

module.exports = GroupsSchema
