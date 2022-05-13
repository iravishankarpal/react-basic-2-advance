// import 3 things  express cors
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({ origin: "*" }));

app.get("/get", (req, res) => {
  const customers = [
    {
      id: 1,
      first: "ravi",
      last: "pal",
    },
    {
      id: 2,
      first: "rakesh",
      last: "bohir",
    },
    {
      id: 3,
      first: "billu",
      last: "javid",
    },
  ];
  res.json(customers);
});

app.listen(9000, () => {
  console.log("server is running on port 9000");
});
