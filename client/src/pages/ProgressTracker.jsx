import { useEffect, useState } from "react"
import axios from "axios"

function ProgressTracker() {

  const [exercise, setExercise] = useState("")
  const [targetReps, setTargetReps] = useState("")
  const [completedReps, setCompletedReps] = useState("")
  const [caloriesBurned, setCaloriesBurned] = useState("")
  const [date, setDate] = useState("")
  const [history, setHistory] = useState([])

  const fetchHistory = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/progress"
      )

      setHistory(res.data)

    } catch (err) {

      console.log(err)

    }

  }

  useEffect(() => {

    fetchHistory()

  }, [])

  const saveProgress = async () => {

    try {

      await axios.post(
        "http://localhost:5000/api/progress",
        {
          exercise,
          targetReps,
          completedReps,
          caloriesBurned,
          date
        }
      )

      setExercise("")
      setTargetReps("")
      setCompletedReps("")
      setCaloriesBurned("")
      setDate("")

      fetchHistory()

    } catch (err) {

      console.log(err)

    }

  }

  return (

    <div className="workout">

      <h1>📈 Workout Progress Tracker</h1>

      <input
        placeholder="Exercise Name"
        value={exercise}
        onChange={(e) =>
          setExercise(e.target.value)
        }
      />

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
        placeholder="Completed Reps"
        value={completedReps}
        onChange={(e) =>
          setCompletedReps(e.target.value)
        }
      />

      <br /><br />

      <input
        placeholder="Calories Burned"
        value={caloriesBurned}
        onChange={(e) =>
          setCaloriesBurned(e.target.value)
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

      <div className="workCard">

        <h2>Workout History</h2>

        {
          history.map((item) => (

            <div
              key={item._id}
              style={{
                borderBottom:
                  "1px solid #ddd",
                padding: "10px"
              }}
            >

              <h3>
                {item.exercise}
              </h3>

              <p>
                Target Reps:
                {item.targetReps}
              </p>

              <p>
                Completed Reps:
                {item.completedReps}
              </p>

              <p>
                Calories Burned:
                {item.caloriesBurned}
              </p>

              <p>
                Date:
                {item.date}
              </p>

            </div>

          ))
        }

      </div>

    </div>

  )

}

export default ProgressTracker