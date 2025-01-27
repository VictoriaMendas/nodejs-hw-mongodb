import { Router } from 'express';

import {
  createContactController,
  deleteContactController,
  getContactByIdController,
  getContactsController,
  patchContactController,
} from '../contrallers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/contacts', ctrlWrapper(getContactsController));
router.get('contacts/contactById', ctrlWrapper(getContactByIdController));
router.post('contacts', ctrlWrapper(createContactController));
router.patch('contacts/contactById', ctrlWrapper(patchContactController));
router.delete('/contacts/:contactById', ctrlWrapper(deleteContactController));
export default router;
