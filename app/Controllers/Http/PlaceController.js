'use strict'

const { default: Axios } = require('axios')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env')

const Place = use('App/Models/Place')

const apiurl = Env.get('PHP_MS')
const axios = require('axios')

/**
 * Resourceful controller for interacting with Places
 */
class PlaceController {
  /**
   * Show a list of all places.
   * POST Places
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
      const position = request.only(['latitude', 'longitude', 'limite_km'])
      console.log(position)
      await axios.get(`${apiurl}/?limite_km=${position.limite_km}&latitude=${position.latitude}&longitude=${position.longitude}`, position)
      .then(async e => {
          return response.json(e.data)
      })

  }

  /**
   * Render a form to be used for creating a new vehicle.
   * GET places/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new vehicle.
   * POST places
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) { 
    const data = request.only(['username', 'lat', 'long', 'name', 'description', 'category_id'])
    console.log(data)
    const payload = await Place.create({
      ...data, 
    })
    response.json(payload)
  }

  /**
   * Display a single vehicle.
   * GET places/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing vehicle.
   * GET places/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update vehicle details.
   * PUT or PATCH places/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a vehicle with id.
   * DELETE places/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = PlaceController
