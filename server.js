const express = require("express");

const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
app.post("/v1/registration", (req, res) => {
  const { firstName, LastName, email, password } = req.body;
  if (!firstName) {
    console.log("first name is required");
  }
  if (!LastName) {
    console.log("last name is required");
  }
  if (!email) {
    console.log("email is required");
  }
  if (!password) {
    console.log("password is required");
  }
  console.log(req.body);
});
app.listen(4444, () => {
  console.log("listenig to port 8000");
});
