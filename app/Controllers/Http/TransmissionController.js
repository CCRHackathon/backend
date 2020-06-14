'use strict'

const { default: Axios } = require('axios')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Env = use('Env')

const Transmission = use('App/Models/Transmission')

const apiurl = Env.get('PHP_MS')
const axios = require('axios')

/**
 * Resourceful controller for interacting with transmissions
 */
class TransmissionController {
  /**
   * Show a list of all transmissions.
   * GET transmissions
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new transmission.
   * GET transmissions/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new transmission.
   * POST transmissions
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only(['lat', 'long', 'title', 'message', 'user'])
    const payload = await Transmission.create({
      user: data.user,
      latitude: data.lat,
      longitude: data.long,
      title: data.title,
      messages: data.message
    })
    return response.json(payload)
  }

  /**
   * Display a single transmission.
   * GET transmissions/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const payload = await Transmission.all()
    response.json(payload)
  }

  async showByLocation ({ params, request, response, view }) {
    const lat = parseFloat(params.lat)
    const lon = parseFloat(params.lon)
    const radius = parseFloat(params.radius)
    
    const url = `${apiurl}getTransmissao.php?limite_km=${radius}&latitude=${lat}&longitude=${lon}`;
    console.log(url);

    await axios.get(url)
    .then(async e => {
        return response.json(e.data)
    })
  }

  /**
   * Render a form to update an existing transmission.
   * GET transmissions/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update transmission details.
   * PUT or PATCH transmissions/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a transmission with id.
   * DELETE transmissions/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = TransmissionController
