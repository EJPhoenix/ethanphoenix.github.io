const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./config/mongoose.config')
require('./routes/person.routes')(app);

// ABOVE LINE CAN ALSO USE LONG-HAND LIKE BELOW:
// const personRoutes = require('./routes/person.routes');
// personRoutes(app)
    
app.listen(8000, () => {
    console.log("Listening at Port 8000")
});