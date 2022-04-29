//const Roles = require("../../app/Validators/Roles")

const Route = use('Route')

Route.group(()=>{

    //Route.resource('roles', 'RoleController').apiOnly()
    Route.get('roles', 'RoleController.index')
    Route.get('roles/:id', 'RoleController.show')
    Route.post('roles', 'RoleController.store').validator('Roles')
    Route.put('roles/:id', 'RoleController.update').validator('Roles')
    Route.delete('roles/:id', 'RoleController.destroy')
    Route.post('roles/asignar', 'RoleController.storeFull')

  }).namespace('App/Controllers/Http/Usuarios').prefix('api/v1').middleware(['auth'])