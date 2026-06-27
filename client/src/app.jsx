import { useState } from "react"

import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import ProgressTracker from "./pages/ProgressTracker"

function App() {

  const [page, setPage] = useState("login")

  return (

    <div>

      {

        page === "login"

          ?

          <Login
            changePage={() => setPage("register")}
            goDashboard={() => setPage("dashboard")}
          />

          :

          page === "register"

            ?

            <Register
              changePage={() => setPage("login")}
            />

            :

            page === "progress"

              ?

              <ProgressTracker />

              :

              <Dashboard
                goProgress={() => setPage("progress")}
              />

      }

    </div>

  )

}

export default App