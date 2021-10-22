import {Router} from 'express'

import { AuthenticateUserControllers } from './controllers/AuthenticateUserControllers'
import { CreateMessageController } from './controllers/CreateMessegeContrloller'
import { ensureAuthenticate } from './middleware/ensureAuthenticate'
import { etLast3MessageController } from './controllers/etLast3MessageController'
import { ProfileUserController } from './controllers/ProfileUserController'


const router = Router()

router.post("/authenticate",new AuthenticateUserControllers().handle)
router.post('/messages',ensureAuthenticate,
new CreateMessageController().handle)

router.get("/messages/last3",new etLast3MessageController().handle)
router.get("/profile",ensureAuthenticate,new ProfileUserController().handle)


export {router}


