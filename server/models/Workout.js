const mongoose=require(
"mongoose"
)

const WorkoutSchema=

new mongoose.Schema({

workout:String,

duration:String

})

module.exports=

mongoose.model(

"Workout",

WorkoutSchema

)