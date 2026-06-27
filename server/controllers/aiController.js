const { GoogleGenerativeAI } = require(
  "@google/generative-ai"
)

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
)

const askAI = async (req, res) => {

  try {

    const { question } = req.body

    const model =
      genAI.getGenerativeModel({

        model: "gemini-2.5-flash"

      })

    let prompt = ""

    if (question === "motivation") {

      prompt = `

Generate:

1. One powerful motivational quote.

2. One unique inspiring success story from any field
(fitness, bodybuilding, sports, running,
business, science, education, leadership,
entrepreneurship or life).

3. One achievement lesson.

Requirements:

- Every response must be different.
- Keep it inspiring.
- Keep it under 200 words.
- Use emojis.
- Format nicely.

`

    }

    else {

      prompt = `

You are an AI fitness coach.

User request:

${question}

Give meal plan with:

Breakfast
Lunch
Dinner
Calories

Keep answer short.

`

    }

    const result =
      await model.generateContent(
        prompt
      )

    const response =
      result.response.text()

    res.json({

      answer: response

    })

  }

  catch {

    res.json({

      answer: "AI Error"

    })

  }

}

module.exports = {
  askAI
}
