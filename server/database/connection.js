import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://nitinpsingh46:vrindavan@imageverse.myac755.mongodb.net/?retryWrites=true&w=majority";
const dbName = 'onelab';

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export async function connect() {
  await client.connect();
  console.log('Connected to MongoDB');
}

export async function getDB() {
  return client.db(dbName);
}


