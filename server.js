// Pasileidziame express serveri
const app = require('./app');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const port = process.env.PORT;
//paleidziam serveri
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});