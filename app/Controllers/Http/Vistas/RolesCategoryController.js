'use strict'

const RoleCategory = use("App/Models/RolesCategory")


/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with rolescategories
 */
class RolesCategoryController {
  /**
   * Show a list of all rolescategories.
   * GET rolescategories
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ auth, response}) {
    try{
      const data = await RoleCategory.query()
      .with('categories')
      .with('views')
      .fetch()

      response.ok({'msg': 'Consulta correcta', 'data': data})
    } catch{
      response.badRequest({'msg': 'Error al realizar consulta'})
    }
  }

  async indexFull ({ auth, response, view }) {
    try{
      const rol = await auth.user.rol
      const data = await RoleCategory.query()
      .with('categories')
      .with('views')
      .where('role_id', rol)
      .fetch()

      response.ok({'msg': 'Consulta correcta', 'data': data})
    } catch{
      response.badRequest({'msg': 'Error al realizar consulta'})
    }
  }

  async verificar ({ auth, response, request }) {
    try{
      var encontrado = false;
      const ruta = request.input('ruta')
      const rol = await auth.user.rol
      const data = await RoleCategory.query()
      .with('categories')
      .with('views')
      .where('role_id', rol)
      .fetch()

      const dataJson = data.toJSON()

      for(let i of dataJson) {
        for(let j of i.views) {
          if (ruta == j.route){
            encontrado = true;
          }
        }
      }

      response.ok({'msg': 'Consulta correcta', 'data': encontrado, 'aux': dataJson})
    } catch{
      response.badRequest({'msg': 'Error al realizar consulta'})
    }
  }

  /**
   * Render a form to be used for creating a new rolescategory.
   * GET rolescategories/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new rolescategory.
   * POST rolescategories
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    try{
      await RoleCategory.create(request.only(RoleCategory.store))
    }
    catch(error){
        response.badRequest({message: 'OCURRIO UN ERROR'})
    }
  }

  /**
   * Display a single rolescategory.
   * GET rolescategories/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    
  }

  /**
   * Render a form to update an existing rolescategory.
   * GET rolescategories/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update rolescategory details.
   * PUT or PATCH rolescategories/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a rolescategory with id.
   * DELETE rolescategories/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = RolesCategoryController
