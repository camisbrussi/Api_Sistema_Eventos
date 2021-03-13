import { Router } from 'express';
import studentController from '../controllers/Student'

import loginrequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/:id', studentController.show); 
router.get('/', studentController.index);


router.post('/', studentController.store); 
router.put('/', loginrequired, studentController.update);
router.delete('/', loginrequired, studentController.delete);


export default router; 