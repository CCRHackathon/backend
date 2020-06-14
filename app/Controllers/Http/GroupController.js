'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Group = use('App/Models/Group')

/**
 * Resourceful controller for interacting with groups
 */
class GroupController {
  /**
   * Show a list of all groups.
   * GET groups
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new group.
   * GET groups/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new group.
   * POST groups
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only(['name', 'lat', 'long', 'radio_frequency', 'description'])
    console.log(data)
    const payload = await Group.create({
      ...data, 
    })
    response.json(payload)
  }

  /**
   * Display a single group.
   * GET groups/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const rawPayload = await Group.query()
                            .where('id', params.groupId)
                            .fetch()
    const payload = rawPayload.toJSON()
    response.json(payload.length > 0 ? payload[0] : payload)
  }

  // Estimativa da aproximação da equação do círculo 
  // (xp - a)^2 + (yp - b)^2 <= r^2 , 
  // para o ponto px, py e o círculo a, b raio r
  async showByLocation ({ params, request, response, view }) {
    const Database = use('Database')

    const lat = parseFloat(params.lat)
    const lon = parseFloat(params.lon)
    const radius = parseFloat(params.radius)

/*    const payload = await Group.query()
                            .where(`pow( lat - ${lat} , 2) + pow( long - ${lon} , 2)`, '<=', `pow(${radius}, 2)`)
                            .fetch() */
    const payload = await Database.raw('select * from groups where pow( lat - ? , 2) + pow( long - ? , 2) <= pow(?, 2)', [lat, lon, radius])
                            
    response.json(payload)
  }

  /**
   * Render a form to update an existing group.
   * GET groups/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update group details.
   * PUT or PATCH groups/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a group with id.
   * DELETE groups/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = GroupController
