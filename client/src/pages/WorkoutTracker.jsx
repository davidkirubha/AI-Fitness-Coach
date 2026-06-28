import { useState, useEffect } from "react"
import axios from "axios"

function WorkoutTracker() {

  const [exercise, setExercise] = useState("Pushups")
  const [targetReps, setTargetReps] = useState("")
  const [completedReps, setCompletedReps] = useState("")
  const [date, setDate] = useState("")
  const [history, setHistory] = useState([])

  const fetchHistory = async () => {

    try {

      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/progress`
      )

      setHistory(res.data)

    }

    catch (err) {

      console.log(err)

    }

  }

  useEffect(() => {

    fetchHistory()

  }, [])

  const saveProgress = async () => {

    let calories = 0

    switch (exercise) {

      case "Pushups":
        calories = completedReps * 0.5
        break

      case "Pullups":
        calories = completedReps * 1
        break

      case "Squats":
        calories = completedReps * 0.7
        break

      case "Burpees":
        calories = completedReps * 1.5
        break

      case "Lunges":
        calories = completedReps * 0.8
        break

      case "Bench Press":
        calories = completedReps * 0.9
        break

      case "Deadlift":
        calories = completedReps * 1.2
        break

      case "Shoulder Press":
        calories = completedReps * 0.8
        break

      case "Bicep Curls":
        calories = completedReps * 0.4
        break

      case "Tricep Dips":
        calories = completedReps * 0.7
        break

      case "Leg Press":
        calories = completedReps * 1
        break

      case "Mountain Climbers":
        calories = completedReps * 0.6
        break

      case "Jumping Jacks":
        calories = completedReps * 0.4
        break

      case "Plank":
        calories = completedReps * 0.3
        break

      case "Crunches":
        calories = completedReps * 0.3
        break

      case "Running":
        calories = completedReps * 2
        break

      case "Cycling":
        calories = completedReps * 1.5
        break

      case "Jump Rope":
        calories = completedReps * 1.8
        break

      default:
        calories = completedReps * 0.5

    }

    try {

      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/progress`,
        {
          exercise,
          targetReps,
          completedReps,
          caloriesBurned: calories,
          date
        }
      )

      setTargetReps("")
      setCompletedReps("")
      setDate("")

      fetchHistory()

    }

    catch (err) {

      console.log(err)

    }

  }

  const clearHistory = async () => {

    try {

      await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/progress/clear`
      )

      setHistory([])

    }

    catch (err) {

      console.log(err)

    }

  }

  return (

    <div className="workout">

      <h1>🔥 Workout Tracker</h1>

      <select
        value={exercise}
        onChange={(e) =>
          setExercise(e.target.value)
        }
      >

        <option>Pushups</option>
        <option>Pullups</option>
        <option>Squats</option>
        <option>Burpees</option>
        <option>Lunges</option>
        <option>Bench Press</option>
        <option>Deadlift</option>
        <option>Shoulder Press</option>
        <option>Bicep Curls</option>
        <option>Tricep Dips</option>
        <option>Leg Press</option>
        <option>Mountain Climbers</option>
        <option>Jumping Jacks</option>
        <option>Plank</option>
        <option>Crunches</option>
        <option>Running</option>
        <option>Cycling</option>
        <option>Jump Rope</option>

      </select>

      <br /><br />

      <input
        placeholder="Target Reps"
        value={targetReps}
        onChange={(e) =>
          setTargetReps(e.target.value)
        }
      />

      <br /><br />

      <input
        placeholder="Completed Count"
        value={completedReps}
        onChange={(e) =>
          setCompletedReps(e.target.value)
        }
      />

      <br /><br />

      <input
        type="date"
        value={date}
        onChange={(e) =>
          setDate(e.target.value)
        }
      />

      <br /><br />

      <button onClick={saveProgress}>
        Save Progress
      </button>

      <br /><br />

      <button
        onClick={clearHistory}
        style={{
          background: "red",
          color: "white"
        }}
      >
        🗑 Clear History
      </button>

      <br /><br />

      <div className="workCard">

        <h2>📈 Workout History</h2>

        {

          history.map((item) => (

            <div
              key={item._id}
              style={{
                borderBottom: "1px solid #ddd",
                padding: "12px"
              }}
            >

              <h3>{item.exercise}</h3>

              <p>
                🎯 Target:
                {" "}
                {item.targetReps}
              </p>

              <p>
                ✅ Completed:
                {" "}
                {item.completedReps}
              </p>

              <p>
                🔥 Calories Burned:
                {" "}
                {item.caloriesBurned}
                {" "}
                kcal
              </p>

              <p>
                📅 Date:
                {" "}
                {item.date}
              </p>

            </div>

          ))

        }

      </div>

    </div>

  )

}

export default WorkoutTracker