import { useState } from "react"
import axios from "axios"

function Workout() {

  const [goal, setGoal] = useState("")
  const [age, setAge] = useState("")
  const [days, setDays] = useState("")
  const [place, setPlace] = useState("")
  const [bodyPart, setBodyPart] = useState("")
  const [plan, setPlan] = useState("")

  const generateWorkout = async () => {

    try {

      const result = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/ai/ask`,
        {
          question: `

Generate a professional workout plan.

Goal: ${goal}

Age: ${age}

Workout Days: ${days}

Location: ${place}

Target Body Part: ${bodyPart}

Provide:

1. Warmup

2. Exercises

3. Sets

4. Reps

5. Rest Time

6. Workout Duration

7. Cooldown

Make it beginner friendly and well formatted.

`
        }
      )

      setPlan(result.data.answer)

    }

    catch (error) {

      console.log(error)

    }

  }

  return (

    <div className="workout">

      <h1>

        🤖 AI Workout Generator

      </h1>

      <input
        type="text"
        placeholder="Goal (Weight Loss / Muscle Gain)"
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
        placeholder="Workout Days"
        value={days}
        onChange={(e) => setDays(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Location (Home / Gym)"
        value={place}
        onChange={(e) => setPlace(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Body Part (Chest, Back, Legs, Biceps, Triceps, Shoulders, Abs)"
        value={bodyPart}
        onChange={(e) => setBodyPart(e.target.value)}
      />

      <br /><br />

      <button onClick={generateWorkout}>

        Generate Workout

      </button>

      {

        plan &&

        <div className="workCard">

          <h2>

            💪 AI Workout Plan

          </h2>

          <pre className="mealResult">

            {plan}

          </pre>

        </div>

      }

    </div>

  )

}

export default Workout