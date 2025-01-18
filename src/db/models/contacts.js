import { Schema, model } from 'mongoose';

const contactsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: false,
    },
    isFavourite: {
      type: Boolean,
      required: false,
      default: false,
    },
    contactType: {
      type: String,
      enum: ['work', 'home', 'personal'],
      required: true,
      default: 'personal',
    },
  },
  {
    timestamps: true,
  },
);
export const ContactsCollection = model('contacts', contactsSchema);

export const getAllStudents = async () => {
  const contacts = await ContactsCollection.find();
  return contacts;
};
export const getStudentById = async (contactId) => {
  const contact = await ContactsCollection.findById(contactId);
  console.log(contact);
  return contact;
};
