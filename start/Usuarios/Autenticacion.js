const Route = use('Route')

Route.group(() => {

    Route.post('login', 'AuthController.login').validator('AutenticacionLogin')
    Route.post('register', 'AuthController.register').validator('AutenticacionStore')
    Route.post('changePassword', 'AuthController.changePassword')
    Route.get('logout', 'AuthController.logout')
    Route.get('verificarToken', 'AuthController.VerificarUsuario')
    Route.get('show', 'AuthController.show')
    Route.get('index', 'AuthController.index')
    
    
}).namespace('App/Controllers/Http/Usuarios').prefix('auth/v1').middleware(['user'])