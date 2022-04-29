const Route = use('Route')

Route.group(()=>{
    Route.resource('categories', 'CategoryController').validator(new Map([
        [['categories.store'], ['Vistas/Category']] // [nombre método del controlador], [nombre de archivo validator]
    ]))
}).prefix('api/v1').namespace('Vistas').middleware(['auth']) //Nombre del controlador