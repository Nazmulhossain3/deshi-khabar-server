const express = require('express')
const app = express()
const port = 5000
const cors = require("cors");
const chefData = require('./data.json');

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(cors());

app.get('/chefData', (req,res)=> {
    res.send(chefData)
})

app.get('/chefData/:id',(req,res)=>{

    const id = req.params.id
    console.log(id)

    const chefRecipes = chefData.find(n => n.id == id)
    res.send(chefRecipes)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})