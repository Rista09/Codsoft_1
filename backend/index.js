const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser'); // Import body-parser

require('dotenv').config();
const connectDB = require('./config/db');
const router = require('./routes');

const app = express();

// Middleware
const corsOptions = {
    origin: ["http://localhost:3000", "https://shop.codebyte.tech"],
    credentials: true,
    optionnSuccessStatus: 200,
    allowedHeaders: 'Content-Type, Authorization',
    methods: 'GET, POST, PUT, DELETE, OPTIONS'
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json({ limit: '10mb' })); // Increase payload limit for JSON

// Routes
app.use("/api", router);

// Server initialization
const PORT = process.env.PORT || 8080;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Connected to DB");
        console.log("Server is running on port " + PORT);
    });
});
