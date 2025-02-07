require("dotenv").config(); 
const express = require("express");
const http = require("http");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

//importing routes
const authRoutes  = require('./routes/auth.js')

//defining the cors
app.use(cors({
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));

app.use(express.json());
app.use(express.static("public"));

//defining the routes
app.use('/auth',authRoutes);



//statring the server
const server = http.createServer(app);
const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017', {
    dbName: "Kashvi_Saree"
})
    .then(() => {
        server.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
    }).catch((err) => console.log(`Database connection error: ${err.message}`));
