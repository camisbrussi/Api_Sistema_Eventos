import { Router } from 'express';
import registrationsController from '../controllers/Registration'



const router = new Router();


router.get('/', registrationsController.show); 



export default router; 