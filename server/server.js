const express = require('express')
const app = express()
const port = 3000

app.get('/login/', (req, res) => {
  console.log(`Użytkownik ${req.query.email} loguje się`)
  res.json({lol:123})
})
app.get('/register/', (req, res) => {
  console.log(`Użytkownik ${req.query.email} rejestruje się`)
  res.json({ok:123})
})
app.get('/forgot_pwd/', (req, res) => {
  res.send("ok")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
