import { Router } from 'express';
import eventsController from '../controllers/Events'


const router = new Router();

router.get('/:id', eventsController.show); 
router.get('/', eventsController.index);


router.post('/', eventsController.store); 
router.put('/:id', eventsController.update);
router.delete('/:id', eventsController.delete);


export default router; 