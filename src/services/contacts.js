import { ContactsCollection } from '../db/models/contacts.js';

export const getAllContacts = async () => {
  const contacts = await ContactsCollection.find();
  return contacts;
};
export const getContactById = async (contactId) => {
  const contact = await ContactsCollection.findById(contactId);

  return contact;
};
export const createContact = async (payload) => {
  const contact = await ContactsCollection.create(payload);
  return contact;
};
export const updateContactById = async (contactId, payload) => {
  const result = await ContactsCollection.findOneAndUpdate(
    { _id: contactId },
    payload,
    {
      new: true,
    },
  );

  return result;
};
export const deleteContactById = async (contactId) => {
  const contact = await ContactsCollection.findOneAndDelete({
    _id: contactId,
  });
  return contact;
};
// export const updateContactById = async (contactId, payload, options = {}) => {
//   console.log(contactId);
//   const result = await ContactsCollection.findOneAndUpdate(
//     { _id: contactId },
//     payload,
//     {
//       new: true,
//       includeResultMetadata: true,
//       ...options,
//     },
//   );
//   console.log('result', result);
//   if (!result || !result.value) return null;
//   return {
//     contact: result.value,
//   };
// };
