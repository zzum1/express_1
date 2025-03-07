// Pasileidziame express serveri
const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');


dotenv.config({ path: './config.env' });

// connect to database
const DB = process.env.DATABASE.replace('<db_password>', process.env.DATABASE_PASSWORD);
mongoose.connect(DB, {
}).then(() => console.log('DB connection successful'));

const port = process.env.PORT;
//paleidziam serveri
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});