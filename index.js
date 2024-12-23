import express from 'express'
import env from 'dotenv/config.js'
const app = express()


// const port = 3000;

app.get("/",(req , res)=>{
res.send("hello muqeet")
})

app.get("/login",(req ,res)=>{
res.send("<h1>login</h1>")
})


app.listen(process.env.PORT, ()=>{
    console.log("muqeet")

});