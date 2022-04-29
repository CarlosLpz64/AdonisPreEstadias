const Route = use('Route')

Route.group(()=>{
    Route.resource('views', 'ViewController').validator(new Map([
        [['views.store'], ['Vistas/View']] // [nombre método del controlador], [nombre de archivo validator]
    ]))
    Route.get('vistas/show', 'ViewController.show')
}).prefix('api/v1').namespace('Vistas').middleware(['auth']) //Nombre del controlador