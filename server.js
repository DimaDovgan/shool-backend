const app = require('./app');
const mongoose = require("mongoose");
const dotenv=require("dotenv");
dotenv.config();
const {DB_HOST,PORT=3004} = process.env;
mongoose.connect(DB_HOST).then(() => {
  app.listen(PORT);
  console.log(`Database connection successful on${PORT}!!!`)
} )
    .catch((error) => {
      console.log(DB_HOST)
    console.log(error.message)
    process.exit(1)
});
