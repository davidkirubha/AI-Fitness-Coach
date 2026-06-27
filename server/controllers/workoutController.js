const Workout=

require(

"../models/Workout"

)

const addWorkout=

async(req,res)=>{

const workout=

new Workout(

req.body

)

await workout.save()

res.json({

message:"Saved"

})

}

const getWorkout=

async(req,res)=>{

const data=

await Workout.find()

res.json(data)

}

const deleteWorkout=

async(req,res)=>{

await Workout.findByIdAndDelete(

req.params.id

)

res.json({

message:

"Deleted"

})

}

module.exports={

addWorkout,

getWorkout,

deleteWorkout

}