'use strict'

const Category = use("App/Models/Category")
const Database = use('Database')


/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with categories
 */
class CategoryController {
  /**
   * Show a list of all categories.
   * GET categories
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    try{

      var miQuery = await Database

      .select('categories.name as categoryName', 'categories.id as categoryID')
          .from('categories')
          .where('categories.status', true)

      response.ok({message: 'Consulta Correcta', data: miQuery})
    }
    catch(error){
        response.badRequest({message: 'OCURRIO UN ERROR'})
    }
  }

  async store ({ request, response }) {
    try{
      await Category.create(request.only(Category.store))
    }
    catch(error){
        response.badRequest({message: 'OCURRIO UN ERROR'})
    }
  }

  async show ({ params, request, response, view }) {
  }

  
  async edit ({ params, request, response, view }) {
  }


  async update ({ params, request, response }) {
  }

  
  async destroy ({ params, request, response }) {
  }
}

module.exports = CategoryController
