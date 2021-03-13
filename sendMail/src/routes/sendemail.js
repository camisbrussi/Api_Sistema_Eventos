import { Router } from 'express';
import sendEmailController from '../controllers/SendMail'



const router = new Router();


router.get('/', sendEmailController.store); 



export default router; 