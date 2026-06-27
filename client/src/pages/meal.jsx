import { useState } from "react"
import axios from "axios"

function Meal() {

  const [goal, setGoal] = useState("")
  const [age, setAge] = useState("")
  const [weight, setWeight] = useState("")
  const [diet, setDiet] = useState("")
  const [food, setFood] = useState("")
  const [meal, setMeal] = useState("")

  const generateMeal = async () => {

    try {

      const result = await axios.post(
        "http://localhost:5000/api/ai/ask",
        {
          question: `

You are an expert nutritionist.

Goal: ${goal}

Age: ${age}

Weight: ${weight}

Diet Type: ${diet}

Foods Consumed Today:

${food}

Provide:

1. Estimated calories for each food item.

2. Total calories consumed.

3. Breakfast recommendation.

4. Lunch recommendation.

5. Dinner recommendation.

6. Healthy snacks.

7. Foods to avoid for this goal.

8. Foods to eat more.

9. Daily water intake recommendation.

Format clearly with headings.

`
        }
      )

      setMeal(result.data.answer)

    }

    catch (error) {

      console.log(error)

    }

  }

  return (

    <div className="workout">

      <h1>

        🤖 AI Nutrition & Meal Planner

      </h1>

      <input
        type="text"
        placeholder="Goal (Weight Gain / Weight Loss)"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Diet Type (Veg / Non-Veg)"
        value={diet}
        onChange={(e) => setDiet(e.target.value)}
      />

      <br /><br />

      <textarea
        placeholder="Foods Eaten Today (Rice, Apple, Banana, Milk...)"
        value={food}
        onChange={(e) => setFood(e.target.value)}
        rows="5"
      />

      <br /><br />

      <button onClick={generateMeal}>

        Generate Nutrition Plan

      </button>

      {

        meal &&

        <div className="workCard">

          <h2>

            🍽️ AI Nutrition Report

          </h2>

          <pre className="mealResult">

            {meal}

          </pre>

        </div>

      }

    </div>

  )

}

export default Meal