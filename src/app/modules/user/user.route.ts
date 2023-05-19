import  express  from 'express';
import { createUser } from './user.controler';

const router = express.Router();

router.get('/', createUser)

export default router