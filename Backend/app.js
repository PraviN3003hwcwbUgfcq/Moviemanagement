const express = require('express');
const connectDB = require('./config/db');
const router = require('./routes/movieRoutes');
const app = express();
const cors = require('cors');
connectDB();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use('/',router)


app.listen(3000,() => {
  console.log("Server is Running");
  
})