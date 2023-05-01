const express = require('express');
const app = express();
const port = process.env.PORT || 5000

app.get("/",(req,res)=>{
  res.send('Chef Recipe Hunter Server is Running')
})

app.listen(port, ()=>{
  console.log(`Example app listening on port ${port}`);
})