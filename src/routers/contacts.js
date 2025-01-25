import { Router } from 'express';
import { getAllContacts, getContactById } from '../services/contacts.js';
import {
  createContactController,
  deleteContactController,
  getContactByIdController,
  getContactsController,
} from '../contrallers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/contacts', async (req, res, _next) => {
  const getContacts = await getAllContacts();
  res.json({
    status: 200,
    message: 'Successfully found contacts!',
    data: getContacts,
  });
});
router.get('/contacts/:contactId', async (req, res, _next) => {
  const { contactId } = req.params;

  const getContactId = await getContactById(contactId);
  if (!getContactId) {
    res.status(404).json({
      status: 'Product not found',
    });
    return;
  }
  res.json({
    status: 200,
    message: `Successfully found contact with id ${contactId}!`,
    data: getContactId,
  });
});

router.get('/contacts', ctrlWrapper(getContactsController));
router.get('contacts/contactById', ctrlWrapper(getContactByIdController));
router.post('contacts', ctrlWrapper(createContactController));
router.delete('/contacts/:contactById', ctrlWrapper(deleteContactController));
export default router;
