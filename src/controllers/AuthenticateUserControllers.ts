import {Request, Response} from 'express'
import { AuthenticateUserService } from '../service/AuthenticateUserService'


class AuthenticateUserControllers{
    async handle(request:Request,response:Response){

        const {code} = request.body
        const service = new AuthenticateUserService()
        try {
            const result = await service.execute(code)
            return response.json(result)

        } catch (err) {
            return response.json({error:err.message})    
        }

        

       // service.execute()

    }
}


export {AuthenticateUserControllers}