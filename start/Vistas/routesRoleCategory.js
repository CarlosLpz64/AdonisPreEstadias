const Route = use('Route')

Route.group(()=>{
    Route.resource('roleCategories', 'RolesCategoryController').validator(new Map([
        [['roleCategories.store'], ['Vistas/RoleCategory']] // [nombre método del controlador], [nombre de archivo validator]
    ]))
    Route.get('detalles/index', 'RolesCategoryController.indexFull')
    Route.post('detalles/verificar', 'RolesCategoryController.verificar')

}).prefix('api/v1').namespace('Vistas').middleware(['auth']) //Nombre del controlador