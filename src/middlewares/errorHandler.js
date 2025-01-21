import { getContactById } from '../services/contacts';

export const getContactByIdController = async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await getContactById(contactId);

  // Код який був до цього
  // if (!student) {
  // res.status(404).json({
  // message: "Student not found",
  // });
  // return;
  // }

  // А тепер додаємо базову обробку помилки замість res.status(404)
  if (!contact) {
    next(new Error('Student not found'));
    return;
  }

  res.json({
    status: 200,
    message: `Successfully found student with id ${contactId}!`,
    data: contact,
  });
};
