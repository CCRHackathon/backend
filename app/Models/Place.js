'use strict'

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Place extends Model {
  static boot () {
    super.boot()
  }


  ratings () {
    return this.hasMany('App/Models/Ratings')
  }
}

module.exports = Place
