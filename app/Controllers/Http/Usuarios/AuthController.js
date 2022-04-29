'use strict'

const { query } = require("@adonisjs/lucid/src/Lucid/Model")

const User = use("App/Models/User")
const Database = use('Database')
const Hash = use('Hash')


class AuthController {

    async login ({ auth, request, response }) 
    {
        try{
            const { email, password } = request.only(User.logueo)

            const token = await auth.withRefreshToken().attempt(email, password)
    
            response.ok({message: 'logueo exitoso', token: token['token']})
        }
        catch(error){
            console.log(error)
            response.badRequest({message: 'OCURRIO UN ERROR'})
        }
    }

    async register({request, response})
    {
        try{
            await User.create(request.only(User.store))
        }
        catch(error){
            response.badRequest({message: 'OCURRIO UN ERROR'})
        }
    }

    async changePasswordOld({request, response, auth})
    {
        try{
            const user = await User.findOrFail(auth.user.id)
            const oldPassword = request.input('oldPassword')
            const comparation = await Hash.verify(oldPassword, auth.user.password)

            if (comparation){
                const newPassword = request.input('newPassword')
                user.password = newPassword
                user.save()
            }
              
            response.ok({message: "Consulta Correcta", res: comparation})
        }
        catch(error){
            response.badRequest({message: 'OCURRIO UN ERROR'})
        }
    }

    async changePassword({request, response, auth})
    {
        try{
            const user = await User.findOrFail(auth.user.id)

            const newPassword = request.input('newPassword')
            user.password = newPassword
            user.save()
              
            response.ok({message: "Contraseña cambiada correctamente"})
        }
        catch(error){
            response.badRequest({message: 'OCURRIO UN ERROR'})
        }
    }

    async logout({auth}){
        try{
            const refreshToken = ''
            const apiToken = auth.getAuthHeader()

            await auth
                .authenticator('jwt')
                .revokeTokens([refreshToken], true)

            await auth
                .authenticator('api')
                .revokeTokens([apiToken])
        }
        catch(error){
            response.badRequest({message: 'OCURRIO UN ERROR'})
        }
    }

    async show ({ auth, response}) 
    {
        var miQuery = await Database
        .select('users.username', 'users.email', 'roles.name as role')
        .from('users')
        .innerJoin('roles', 'users.rol', 'roles.id')
        .where('users.id', auth.user.id)
        .first()

        return response.ok({message: 'Consulta Correcta', data: miQuery})

    }
    async index ({ response}) 
    {
        var miQuery = await Database
        .select('users.username', 'users.email', 'roles.name as role')
        .from('users')
        .innerJoin('roles', 'users.rol', 'roles.id')
        .where('users.status', true)

        return response.ok({message: 'Consulta Correcta', data: miQuery})

    }

    async VerificarUsuario({auth}){
        try{

            await auth.check()
            return true

        } catch (error) {

            //response.send('Invalido')
            return false

          }
    }
}

module.exports = AuthController
