import { urlencoded, json } from "body-parser";
import express, { json as _json } from "express";
import { connect } from 'mongoose';
require('dotenv').config();

import ToDoModels from './Models/To_do';
import StatusModels from './Models/Status';


const app = express()
const port = 3005

app.set ('port', port)
app.set ('view engine', 'ejs')
app.use (express.static("public"))
app.use (urlencoded({extended:true}))
app.use (json())
app.use (_json())
app.use ('/api/todo', ToDoModels)
app.use ('/api/status', StatusModels)

app.get('/', (res) => {
  res.render('index.ejs')
})


connect(process.env.MONGO_DB_URI)
.then(() => console.log('connected to db'))
.catch((err)=> console.log(err))

app.listen (port, () =>  {
  console.log(`El puerto es: ${port}`)
})