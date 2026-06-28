import { useState } from "react";

import Workout from "./workout";
import Meal from "./meal";
import Progress from "./progress";
import AICoach from "./AICoach";
import WorkoutTracker from "./WorkoutTracker";
import Motivation from "./Motivation";

function Dashboard() {
  const [page, setPage] = useState("home");

  return (
    <div className="dashboard">

      <div className="top">
        <h1>AI Fitness Coach</h1>
        <p>Smart Fitness System</p>
      </div>

      <div className="cards">

        <div className="card" onClick={() => setPage("workout")}>
          <h2>🏋 Workout</h2>
          <p>AI Workout Generator</p>
        </div>

        <div className="card" onClick={() => setPage("meal")}>
          <h2>🥗 Meal Planner</h2>
          <p>AI Nutrition Planner</p>
        </div>

        <div className="card" onClick={() => setPage("progress")}>
          <h2>📈 BMI Tracker</h2>
          <p>Check BMI Status</p>
        </div>

        <div className="card" onClick={() => setPage("ai")}>
          <h2>🤖 AI Coach</h2>
          <p>Fitness Assistant</p>
        </div>

        <div className="card" onClick={() => setPage("tracker")}>
          <h2>🔥 Workout Tracker</h2>
          <p>Track Reps & Calories</p>
        </div>

        <div className="card" onClick={() => setPage("motivation")}>
          <h2>🌟 Motivation Zone</h2>
          <p>AI Daily Motivation</p>
        </div>

      </div>

      {page === "workout" && <Workout />}
      {page === "meal" && <Meal />}
      {page === "progress" && <Progress />}
      {page === "ai" && <AICoach />}
      {page === "tracker" && <WorkoutTracker />}
      {page === "motivation" && <Motivation />}

    </div>
  );
}

export default Dashboard;