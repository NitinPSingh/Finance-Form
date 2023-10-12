import { getDB } from "../database/connection.js";
var collectionName = "financeformdata"

async function insertOne(req,res) {
  const db = await getDB();
  const collection = db.collection(collectionName);
  var document=req.body;
  console.log(document);
  try{
   const result = await collection.insertOne(document);
   console.log(document,result);
    res.status(200).send({msg:"inserted"})
  }catch(err){
    console.log(err)
  }
  
}

async function findOne( query) {
  const db = await getDB();
  const collection = db.collection(collectionName);
  const result = await collection.findOne(query);
  return result;
}
async function findMany(req,res) {
  const db = await getDB();
  const collection = db.collection(collectionName);
  const result = collection.find();
  return res.status(200).send(JSON.stringify(result))
}

async function updateOne( query, update) {
  const db = await getDB();
  const collection = db.collection(collectionName);
  const result = await collection.updateOne(query, { $set: update });
  return result;
}

async function deleteOne( query) {
  const db = await getDB();
  const collection = db.collection(collectionName);
  const result = await collection.deleteOne(query);
  return result;
}

export { insertOne, findOne,findMany, updateOne, deleteOne };