'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RatingSchema extends Schema {
  up () {
    this.create('ratings', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('place_id').unsigned().references('id').inTable('places')
      table.integr('stars').notNullable()
      table.string('comment', 500).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('ratings')
  }
}

module.exports = RatingSchema
