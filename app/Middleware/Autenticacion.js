'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const geoip = require('geoip-lite')
const { TIMESTAMP } = require('mysql/lib/protocol/constants/types')
const Logger = use('Logger')

class Autenticacion {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request, response }, next) {
    // call next to advance the request
    const ip = request.ip()
    const loc = geoip.lookup(ip)

    const info = {
      "RequestURL": request.url(),
      "IP DESTINO": loc,
      "Datos Request": request.body,
      //"Respuesta del Servidor": response.status
    }

    Logger
      .transport('file')
      .debug(info)

    await next()
  }
}

module.exports = Autenticacion
