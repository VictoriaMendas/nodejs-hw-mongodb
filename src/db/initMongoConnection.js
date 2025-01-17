import mongoose from 'mongoose';

// use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');`
// if your database has auth enabled

export const initMongoConnection = async () => {
  try {
    await mongoose.connect('mongodb://localhost/3000');
    console.log('Mongo connection successfully established!');
  } catch (e) {
    console.log('Error while setting up mongo connection', e);
    throw e;
  }
};
