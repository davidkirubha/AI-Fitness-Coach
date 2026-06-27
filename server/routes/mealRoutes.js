const express=require(
"express"
)

const router=

express.Router()

const {

addMeal,

getMeal,

deleteMeal

}=require(

"../controllers/mealController"

)

router.post(

"/add",

addMeal

)

router.get(

"/all",

getMeal

)

router.delete(

"/delete/:id",

deleteMeal

)

module.exports=

router