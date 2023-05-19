import  express  from 'express';
import { createUser } from './user.controler';

const router = express.Router();

router.get('/',)
router.post('/createUser', createUser)

export default router