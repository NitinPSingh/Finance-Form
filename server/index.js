import express from 'express';
import cors from 'cors';
import { connect, getDB } from './database/connection.js';
import { deleteOne, findMany, findOne, insertOne, updateOne } from './controller/form.js';
import bodyParser from 'body-parser';





const init = async () =>{

    try{
    await connect();
    const app = express();
    app.use(express.json()); 
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json()); 
    app.use(express.urlencoded({ extended: false }));
    app.post('/insert',insertOne);
    app.get('/',findMany);
  // Find data by ID
  app.get('/find/:id',findOne);
  
  // Update data by ID
  app.put('/update/:id',updateOne);
  
  // Delete data by ID
  app.delete('/delete/:id', deleteOne);
  
    
    app.listen(3001,(req,res)=>console.log("listening"));
    }
    catch(err){
        console.log(err);
    }
}

init();