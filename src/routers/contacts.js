import { Router } from 'express';
import { authenticate } from '../middlewares/authenticate.js';

import {
  createContactController,
  deleteContactController,
  getContactByIdController,
  getContactsController,
  patchContactController,
} from '../contrallers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  createContactSchema,
  updateContactSchema,
} from '../validation/contacts.js';
import { isValidId } from '../middlewares/isValidId.js';
import { checkRoles } from '../middlewares/checkRoles.js';
import { ROLES } from '../constants/index.js';

const router = Router();
router.use(authenticate);

router.get(
  '/contacts',
  checkRoles(ROLES.TEACHER),
  ctrlWrapper(getContactsController),
);
router.get(
  '/contacts/:contactId',
  checkRoles(ROLES.TEACHER, ROLES.PARENT),
  isValidId,
  ctrlWrapper(getContactByIdController),
);
router.post(
  '/register',
  validateBody(createContactSchema),
  ctrlWrapper(createContactController),
);
router.post(
  '/contacts',
  checkRoles(ROLES.TEACHER),
  validateBody(createContactSchema),
  ctrlWrapper(createContactController),
);
router.patch(
  '/contacts/:contactId',
  checkRoles(ROLES.TEACHER, ROLES.PARENT),
  isValidId,
  validateBody(updateContactSchema),
  ctrlWrapper(patchContactController),
);
router.delete(
  '/contacts/:contactId',
  checkRoles(ROLES.TEACHER),
  isValidId,
  ctrlWrapper(deleteContactController),
);

router.get('/', ctrlWrapper(getContactsController));

export default router;
