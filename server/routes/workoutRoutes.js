const express=require(
"express"
)

const router=

express.Router()

const {

addWorkout,

getWorkout,

deleteWorkout

}=require(

"../controllers/workoutController"

)

router.post(

"/add",

addWorkout

)

router.get(

"/all",

getWorkout

)

router.delete(

"/delete/:id",

deleteWorkout

)

module.exports=

router