'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Vehicle extends Model {

    User () {
        return this.belongsTo('App/Models/User')
    }
}

module.exports = Vehicle
