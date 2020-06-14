'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Service extends Model {

    ratings () {
        return this.hasMany('App/Models/Ratings')
    }
}

module.exports = Service
