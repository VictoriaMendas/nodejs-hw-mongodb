import { mongoose } from 'mongoose';
import { getEnvVar } from '../utils/getEnvVar';

export const initMongoConnection = async () => {
  try {
    const user = getEnvVar('MONGODB_USER');
    const pwd = getEnvVar('MONGODB_PASSWORD');
    const url = getEnvVar('MONGODB_URL');
    const db = getEnvVar('MONGODB_DB');

    await mongoose.connect(
      `mongodb+srv://${user}:${pwd}@${url}/${db}/?retryWrites=true&w=majority`,
    );
    console.log('Mongo connection successfully established!');
  } catch (e) {
    console.log('Error while setting up mongo connection', e);
    throw e;
  }
};
// mongodb+srv://svalexandrovna007:<db_password>@cluster0.j3zdw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// export const initMongoConnection = async () => {
//   try {
//     await client.connect();

//     await client.db('admin').command({ ping: 1 });
//     console.log('Mongo connection successfully established!');
//   } finally {
//     await client.close();
//   }
// };
// initMongoConnection().catch(console.dir);
