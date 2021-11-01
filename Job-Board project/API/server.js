const express = require("express");
const cors = require("cors");

const app = express();
const db = require("./models");
db.sequelize.sync();
//db.sequelize.sync({ force: true }).then(() => {
   // console.log("Drop and re-sync db.");
  //});
 
const corsOptions = {
  origin:"*",
  // optionsSuccessStatus:200,
}


 app.use(cors(corsOptions));


app.use(express.json());


app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.json({ message: "Welcome to Jobber application." });
});

require("./routes/job_post.routes")(app);
require("./routes/user.routes")(app);
require("./routes/companies.route")(app);
require("./routes/messages.route")(app);
require("./routes/locations.route")(app);



const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// Add Access Control Allow Origin headers
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });