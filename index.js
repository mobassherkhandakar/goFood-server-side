const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const chefs = require("./data/chafeData.json");
app.use(cors());

app.get("/", (req, res) => {
  res.send("Chef Recipe Hunter Server is Running..............");
});

app.get("/chafe", (req, res) => {
  res.send(chefs);
});

app.get("/chafe/:id", (req,res)=>{
  const id = parseInt(req.params.id);
  const selectedID = chefs.find(cf=> parseInt(cf.id) === id)
  res.send(selectedID)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
