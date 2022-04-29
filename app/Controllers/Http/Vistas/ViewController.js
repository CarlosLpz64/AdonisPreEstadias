'use strict'

const View = use("App/Models/View")
const Database = use('Database')


/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with views
 */
class ViewController {
  /**
   * Show a list of all views.
   * GET views
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new view.
   * GET views/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new view.
   * POST views
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    try{
      await View.create(request.only(View.store))
    }
    catch(error){
        response.badRequest({message: 'OCURRIO UN ERROR'})
    }
  }

  /**
   * Display a single view.
   * GET views/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ auth, response }) {
    
    var miQuery = await Database

    .select('users.username', 'roles.name as roleName', 'categories.name as categoryName',
    'views.route', 'views.name as routeName', 'views.icon', 'categories.id as CategoryID')
        .from('users')
        .innerJoin('roles', 'roles.id', 'users.rol')
        .innerJoin('roles_categories', 'roles.id', 'roles_categories.role_id')
        .innerJoin('categories', 'categories.id', 'roles_categories.category_id')
        .innerJoin('views', 'views.category_id', 'categories.id')
        .where('users.id', auth.user.id)
        .where('views.status', true)

        return response.ok({message: 'Consulta Correcta', data: miQuery})
        
  }

  /**
   * Render a form to update an existing view.
   * GET views/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update view details.
   * PUT or PATCH views/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a view with id.
   * DELETE views/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = ViewController
