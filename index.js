require('dotenv').config()
const express = require('express')
// import express from 'express'
/**both are above are same syntax one is modern one is older  */



/*app is very powerfu it has various  method*/
const app = express()



const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/insta', (req, res) => {
    res.send("YashSharma")
  })
app.get('/login',(req,res)=>{
res.send("<h1>please login on chai aur code</h1>")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})