const express = require('express');
const app = express();
const cors = require('cors');
// app.use(cors({ origin: "*" }));

app.get('/get', cors(), (req, res) => {
    const customers = [
      {id: 1, firstName: 'John', lastName: 'Doe'},
      {id: 2, firstName: 'Brad', lastName: 'Traversy'},
      {id: 3, firstName: 'Mary', lastName: 'Swanson'},
    ];
  
    res.json(customers);
  });
  
app.listen(2000, () => {
  console.log("express rerver is running on port 2000");
});
