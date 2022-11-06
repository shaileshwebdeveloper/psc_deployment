const express = require('express')

const app =  express()

app.use(express.json())

const PORT = process.env.PORT || 3001

app.get("/", (req,res) => {
    res.send("HELLO from backend")
})


app.listen(PORT, () =>{
    console.log(`Listening to PORT ${PORT}`)
})