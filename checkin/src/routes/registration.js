import { Router } from 'express';
import registrationsController from '../controllers/Registration'



const router = new Router();


router.put('/', registrationsController.update); 



export default router; 