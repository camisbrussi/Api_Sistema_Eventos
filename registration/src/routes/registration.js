import { Router } from 'express';
import registrationsController from '../controllers/Registration'



const router = new Router();


router.post('/', registrationsController.store); 



export default router; 