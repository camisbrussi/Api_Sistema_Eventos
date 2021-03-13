import { Router } from 'express';
import customerController from '../controllers/Customer'


import loginrequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/:id', customerController.show); 
router.get('/', customerController.index); 

router.post('/', customerController.store); 
router.put('/', loginrequired, customerController.update);
router.delete('/', loginrequired, customerController.delete);


export default router; 