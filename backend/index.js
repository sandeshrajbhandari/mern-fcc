//index.js
import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";
dotenv.config(); //load env variables
const MongoClient = mongodb.MongoClient;

const port = process.env.PORT || 8000; //8000 if not available

MongoClient.connect(process.env.RESTREVIEWS_DB_URI, {
  maxPoolSize: 50,
  wtimeoutMS: 2500,
  useNewUrlParser: true,
})
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  })
  .then(async (client) => {
    //finally starting the server by listen
    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    });
  });
