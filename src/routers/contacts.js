import { Router } from 'express';
import { getAllContacts, getContactById } from '../services/contacts';
import {
  getContactByIdController,
  getContactsController,
} from '../contrallers/contacts';

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

router.get('/contacts', getContactsController);
router.get('contacts/contactById', getContactByIdController);
export default router;
