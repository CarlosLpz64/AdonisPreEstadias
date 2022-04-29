'use strict'

const Database = require('@adonisjs/lucid/src/Database')

//Modelos
const Category = use("App/Models/Category")
const RoleCategory = use("App/Models/RolesCategory")
const View = use("App/Models/View")
const Role = use("App/Models/Role")
const User = use("App/Models/User")

//Data
const RoleJson = require("../../dataFiles/roles.json")
const CategoryJson = require("../../dataFiles/categories.json")
const RoleCategoryJson = require("../../dataFiles/roleCategories.json")
const UserJson = require("../../dataFiles/users.json")
const ViewJson = require("../../dataFiles/views.json")


/*
|--------------------------------------------------------------------------
| DataDefaultSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class DataDefaultSeeder {
  async run () {
    try{
      await Role.createMany(RoleJson)
      await Category.createMany(CategoryJson)
      await RoleCategory.createMany(RoleCategoryJson)
      await User.createMany(UserJson)
      await View.createMany(ViewJson)
    }catch(e){
      return e
    }
  }
}

module.exports = DataDefaultSeeder
