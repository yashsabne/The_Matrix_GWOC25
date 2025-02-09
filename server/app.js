require("dotenv").config(); 
const express = require("express");
const http = require("http");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

//importing routes
const authRoutes  = require('./routes/auth.js')
const newSareeAdd = require('./routes/addNewSaree.js')

//defining the cors
 
app.use(cors({
    origin: ["http://localhost:5173"], // Allow frontend
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
    allowedHeaders: ["Content-Type", "Authorization"], // Ensure correct headers
    credentials: true, // Allow cookies and auth headers
    optionsSuccessStatus: 200 // Handle preflight (instead of 204)
}));

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

//defining the routes
app.use('/auth',authRoutes);
app.use('/saree-related',newSareeAdd)



//statring the server
const server = http.createServer(app);
const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017', {
    dbName: "Kashvi_Saree"
})
    .then(() => {
        server.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
    }).catch((err) => console.log(`Database connection error: ${err.message}`));
