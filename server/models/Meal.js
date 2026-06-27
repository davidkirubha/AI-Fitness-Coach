const mongoose=require(
"mongoose"
)

const MealSchema=

new mongoose.Schema({

food:String,

calories:String

})

module.exports=

mongoose.model(

"Meal",

MealSchema

)