import { Router } from 'express';
import userController from '../controllers/User'

import loginrequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/:id', userController.show); // Lista usuários
router.get('/', userController.index); //Lista usuario


router.post('/', userController.store); 
router.put('/', loginrequired, userController.update);
router.delete('/', loginrequired, userController.delete);


export default router; 