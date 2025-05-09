import {
  createContactController,
  deleteContactController,
  getContactByIdController,
  getContactsController,
  patchContactController,
  upsertContactController,
} from '../controllers/contacts.js';

import { Router } from 'express';
// import { ctrlWrapper } from '../utils/ctrlWrapper.js';
// import { isValidId } from '../middlewares/isValidId.js';
// import { validBody } from '../middlewares/validBody.js';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { isValidId } from './middlewares/isValidId.js';
import { validateBody } from '../utils/validateBody.js';
import { createContactSchema, updateContactSchema } from '../validation/contacts.js';


const router = Router();

router.get('/contacts', ctrlWrapper(getContactsController));

router.get('/contacts/:contactId', ctrlWrapper(getContactByIdController));

router.post('/contacts', ctrlWrapper(createContactController));

router.delete('/contacts/:contactId', ctrlWrapper(deleteContactController));

router.put('/contacts/:contactId', ctrlWrapper(upsertContactController));

router.patch('/contacts/:contactId', ctrlWrapper(patchContactController));

export default router;