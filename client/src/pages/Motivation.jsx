import { useState, useEffect } from "react"
import axios from "axios"

function Motivation() {

  const [motivation, setMotivation] = useState("")

  const [favorites, setFavorites] = useState([])

  const generateMotivation = async () => {

    try {

      const res = await axios.post(

        "http://localhost:5000/api/ai/ask",

        {
          question: "motivation"
        }

      )

      setMotivation(
        res.data.answer
      )

    }

    catch (err) {

      console.log(err)

    }

  }

  const loadFavorites = async () => {

    try {

      const res = await axios.get(

        "http://localhost:5000/api/motivation"

      )

      setFavorites(
        res.data
      )

    }

    catch (err) {

      console.log(err)

    }

  }

  useEffect(() => {

    loadFavorites()

  }, [])

  const saveQuote = async () => {

    if (!motivation) {

      alert("Generate motivation first")

      return

    }

    const exists = favorites.some(

      item => item.quote === motivation

    )

    if (exists) {

      alert("Quote already saved ❤️")

      return

    }

    try {

      await axios.post(

        "http://localhost:5000/api/motivation/save",

        {

          quote: motivation

        }

      )

      alert("❤️ Quote Saved")

      loadFavorites()

    }

    catch (err) {

      console.log(err)

    }

  }

  const deleteQuote = async (id) => {

    try {

      await axios.delete(

        `http://localhost:5000/api/motivation/${id}`

      )

      loadFavorites()

    }

    catch (err) {

      console.log(err)

    }

  }

  const clearFavorites = async () => {

    try {

      await axios.delete(

        "http://localhost:5000/api/motivation/clear"

      )

      setFavorites([])

    }

    catch (err) {

      console.log(err)

    }

  }

  return (

    <div className="workout">

      <h1 className="motivation-title">

        🌟 AI Motivation Zone

      </h1>

      <button

        className="motivation-btn"

        onClick={generateMotivation}

      >

        Generate Motivation

      </button>

      <br />

      <br />

      {

        motivation &&

        <>

          <div className="motivation-result">

            {motivation}

          </div>

          <br />

          <button

            className="motivation-btn"

            onClick={saveQuote}

          >

            ❤️ Save Quote

          </button>

        </>

      }

      <h2 className="favorite-heading">

        📚 Favorite Quotes

      </h2>

      {

        favorites.length > 0 &&

        <button

          className="clear-btn"

          onClick={clearFavorites}

        >

          🗑 Clear All Favorites

        </button>

      }

      <br />

      <br />

      {

        favorites.length === 0

          ?

          <p>

            No favorite quotes saved yet.

          </p>

          :

          favorites.map((item) => (

            <div

              key={item._id}

              className="favorite-card"

            >

              <p>

                {item.quote}

              </p>

              <button

                className="clear-btn"

                onClick={() => deleteQuote(item._id)}

              >

                🗑 Delete Quote

              </button>

            </div>

          ))

      }

    </div>

  )

}

export default Motivation