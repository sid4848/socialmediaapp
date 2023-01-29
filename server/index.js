import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from "cors"
import postRoutes from "./routes/post.js"

const app = express()

//ROUTES

app.use("/posts", postRoutes)

app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors())


const CONNECTION_URL = "mongodb+srv://shitalSiddhagavali:Shital123@cluster0.wu6hqgy.mongodb.net/?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000

mongoose.set('strictQuery', false);

mongoose.connect(CONNECTION_URL, { useNewUrlParser:true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`server running o port : ${PORT}`)))
    .catch((error) => console.log(error))

// mongoose.set('useFindAndModify', false)