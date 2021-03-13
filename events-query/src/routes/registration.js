import { Router } from 'express';
import registrationsController from '../controllers/Registration'



const router = new Router();


router.get('/:event_id/registrations', registrationsController.show); 



export default router; 