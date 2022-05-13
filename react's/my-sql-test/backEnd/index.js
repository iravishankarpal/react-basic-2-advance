const express = require('express');
const app = express()
app.listen(2000, () => {
    console.log(`server is running on port 2000  `)
  })

app.get('/get', (req, res) => {

  res.json({"user":["user1","user2","user3"]})
})


