const path = require('path')
const express = require('express')
require('colors') 
require('dotenv').config()
const {errorHandler} = require("./middleware/errorMiddleware")
const PORT = process.env.PORT || 5001
const connectDB = require("./config/db")


// Connect to database
connectDB()

const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.get("/", (req,res)=>{
    res.json({message: "Welcome to the Support Desk API"})
})

// Routes
app.use('/api/users', require('./routes/userRoutes'))


app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))