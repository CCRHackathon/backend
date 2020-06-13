'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TransmissionSchema extends Schema {
  up () {
    this.create('transmissions', (table) => {
      table.increments()
      table
      .integer('user')
      .unsigned()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      table.string('latitude', 80).notNullable()
      table.string('longitude', 80).notNullable()
      table.string('title', 80).notNullable()
      table.string('messages', 80).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('transmissions')
  }
}

module.exports = TransmissionSchema
