const express = require("express");
const cors = require("cors");
const { connectdb } = require("./dbConfig.js");
const app = express();

const contactRoutes = require("./routes/contactsRoutes.js");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  return res.send("<h1>Hello world</h1>");
});

//routes config
app.use("/api/v1/contact", contactRoutes);

//database connection call
connectdb();

//server port number
const port = process.env.port || 8081;

app.listen(port, (err, res) => {
  console.log("Server listening at: " + port);
});
