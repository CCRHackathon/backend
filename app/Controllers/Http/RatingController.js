'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Rating = use('App/Models/Rating')

/**
 * Resourceful controller for interacting with ratings
 */
class RatingController {
  /**
   * Show a list of all ratings.
   * GET ratings
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new rating.
   * GET ratings/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new rating.
   * POST ratings
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only(['user_id', 'service_id', 'stars', 'comment'])
    console.log(data)
    const payload = await Rating.create({
      ...data, 
    })
    response.json(payload)
  }

  /**
   * Display a single rating.
   * GET ratings/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Display a single rating.
   * GET ratings/place/:placeId
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async showByPlace ({ params, request, response, view }) {
    const Database = use('Database')
    const payload = await Database.raw(`
        select avg(r.stars) 
        from ratings r
        left join services s on r.service_id = s.id
        where s.place_id = ${params.placeId}`)

    console.log(payload.rows)
    //[ { avg: '5.0000000000000000' } ]

    response.json(payload.rows && payload.rows.length > 0 ? payload.rows[0].avg : null)
  }
  
  async showByService ({ params, request, response, view }) {
    const payload = await Rating.query()
                            .where('service_id', params.serviceId)
                            .fetch()
    response.json(payload)
  }

  async showAvgByService ({ params, request, response, view }) {
    const Database = use('Database')
    const payload = await Database.raw(`
        select avg(r.stars) 
        from ratings r
        where r.service_id = ${params.serviceId}`)

    console.log(payload.rows)
    //[ { avg: '5.0000000000000000' } ]

    response.json(payload.rows && payload.rows.length > 0 ? payload.rows[0].avg : null)
  }

  /**
   * Render a form to update an existing rating.
   * GET ratings/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update rating details.
   * PUT or PATCH ratings/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a rating with id.
   * DELETE ratings/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = RatingController
