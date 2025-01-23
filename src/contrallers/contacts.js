import createHttpError from 'http-errors';
import {
  createContact,
  getAllContacts,
  getContactById,
} from '../services/contacts.js';

export const getContactsController = async (req, res) => {
  const contacts = await getAllContacts();

  res.json({
    status: 200,
    message: 'Successfully found Contacts!',
    data: contacts,
  });
};

export const getContactByIdController = async (req, res) => {
  const { contactId } = req.params;
  const contact = await getContactById(contactId);

  if (!contact) {
    createHttpError(404, 'Contact not found');
  }
  res.json({
    status: 200,
    message: `Successfully found student with id ${contactId}!`,
    data: contact,
  });
};
export const createContactController = async (req, res) => {
  const contact = await createContact(req.body);

  res.status(201).json({
    status: 201,
    message: `Successfully created a contact!`,
    data: contact,
  });
};
