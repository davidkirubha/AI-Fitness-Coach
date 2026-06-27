const express=require("express")

const mongoose=require("mongoose")

const cors=require("cors")

require("dotenv").config()

const authRoutes=require(
"./routes/authRoutes"
)

const aiRoutes=require(
"./routes/aiRoutes"
)

const workoutRoutes=require(
"./routes/workoutRoutes"
)

const mealRoutes=require(
"./routes/mealRoutes"
)

const progressRoutes=require(
"./routes/progressRoutes"
)

const motivationRoutes=require(
"./routes/motivationRoutes"
)

const app=express()

app.use(cors())

app.use(express.json())

mongoose.connect(

process.env.MONGO_URL

)

.then(()=>{

console.log(

"MongoDB Connected"

)

})

.catch((err)=>{

console.log(err)

})

app.use(

"/api/auth",

authRoutes

)

app.use(

"/api/ai",

aiRoutes

)

app.use(

"/api/workout",

workoutRoutes

)

app.use(

"/api/meal",

mealRoutes

)

app.use(

"/api/progress",

progressRoutes

)

app.use(

"/api/motivation",

motivationRoutes

)

app.listen(

5000,

()=>{

console.log(

"Server Running"

)

}

)