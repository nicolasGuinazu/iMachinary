require('dotenv').config()
const express = require('express');
const app = express();
const moviesRoutes = require('./routes/moviesRoutes');
const peopleRoutes = require("./routes/peopleRoutes")

app.use(moviesRoutes);
app.use(peopleRoutes)

let port = process.env.PORT || "3000"

app.listen(port, () => console.log(`Server running on port ${port}`));
