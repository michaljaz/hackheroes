const express = require('express')
const app = express()
const port = 3000

var baza={}

app.get('/login/', (req, res) => {
  console.log(`Użytkownik ${req.query.email} loguje się`)
  if(baza[req.query.email]==req.query.password){
    res.json({resp:"ok"})
  }else{
    res.json({resp:"invalid_pwd"})
  }

})
app.get('/register/', (req, res) => {
  console.log(`Użytkownik ${req.query.email} rejestruje się`)
  if(baza[req.query.email]==undefined){
    baza[req.query.email]=req.query.password
    res.json({resp:"ok"})
  }else{
    res.json({resp:"account_exist"})
  }
})
app.get('/forgot_pwd/', (req, res) => {
  res.send("ok")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
