import { getAllContacts, getContactById } from '../services/contacts.js';

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
    res.status(404).json({
      message: 'Student not found',
    });
    return;
  }

  res.json({
    status: 200,
    message: `Successfully found student with id ${contactId}!`,
    data: contact,
  });
};
