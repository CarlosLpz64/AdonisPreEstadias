'use strict'

const RolesValidator = require("../../../Validators/Roles")
const Role = use("App/Models/Role")
const { validate } = use('Validator')
const Database = use('Database')
const RolesCategory = use("App/Models/RolesCategory")



class RoleController {
    async index({response}){
        try{

            var miQuery = await Database

            .select('id', 'name')
                .from('roles')
                .where('roles.status', true)

            response.ok({message: 'Consulta Correcta', data: miQuery})

        }
        catch(error){

            response.badRequest({message: 'OCURRIO UN ERROR'})

        }
        
    }

    async store({request, response}){
        try{

            const validacion = await validate(request.only(Role.store), RolesValidator)

            if(validacion.fails()){

                response.badRequest({message: "Error en los datos enviados"})
                return validacion.messages()

            }

            else{

                await Role.create(request.only(Role.store))
                response.ok({message: "Datos fueron insertados"})
            }
        }
        catch(error){
            response.internalServerError({message: 'OCURRIO UN ERROR'})
        }
    }

    async storeFull({request, response}){
        /*try{*/
            const role = await Role.create(request.only(Role.store))

            const id = role.id
            const categoria = request.input('categoria')

            
            categoria.forEach(element => {
                RolesCategory.create({
                    "role_id": id,
                    "category_id": element
                })
            });
            
            //await RolesCategory.create(data)
            response.ok({message: "Datos fueron insertados", data: role.id})
        //}
        //catch(error){
            //response.badRequest({message: 'OCURRIO UN ERROR'})
        //}
    }

    async update({request, response, params}){
        try{
            const rol = await Role.find(params.id)

            if(rol == null){
                response.notFound({message: 'no se encontro el rol'})
            }

            else{
                rol.name=request.input('name')
                rol.status=request.input('status')

                rol.save()
                response.ok({message: "Datos fueron modificados"})
            }
        }
        catch(error){
            response.internalServerError({message: 'OCURRIO UN ERROR'})
        }
    }

    async show({params, response}){
        try{
            const rol = await Role.findOrFail(params.id)

            response.ok({message: "Consulta correcta", data: rol})
        }
        catch(error){
            response.notFound({message: "No se encontro el dato"})
        }
    }

    async destroy({params, response}){
        try{
            const rol = await Role.findOrFail(params.id)

            rol.delete()
            response.ok({message: "Eliminacion correcta"})
        }
        catch(error){
            response.notFound({message: "No se encontro el dato"})
        }
    }
}

module.exports = RoleController
