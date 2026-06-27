const Meal=

require(

"../models/Meal"

)

const addMeal=

async(req,res)=>{

const meal=

new Meal(

req.body

)

await meal.save()

res.json({

message:"Saved"

})

}

const getMeal=

async(req,res)=>{

const data=

await Meal.find()

res.json(data)

}

const deleteMeal=

async(req,res)=>{

await Meal.findByIdAndDelete(

req.params.id

)

res.json({

message:"Deleted"

})

}

module.exports={

addMeal,

getMeal,

deleteMeal

}