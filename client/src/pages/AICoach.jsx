import {useState} from "react"

import axios from "axios"

function AICoach(){

const [question,setQuestion]=useState("")

const [answer,setAnswer]=useState("")

const askAI=async()=>{

const result=

await axios.post(

"http://localhost:5000/api/ai/ask",

{

question

}

)

setAnswer(

result.data.answer

)

}

return(

<div className="workout">

<h1>

AI Fitness Coach

</h1>

<input

placeholder="Ask anything"

value={question}

onChange={(e)=>

setQuestion(e.target.value)

}

/>

<br/><br/>

<button onClick={askAI}>

Ask AI

</button>

{

answer &&

<div className="workCard">

<h3>

🤖 {answer}

</h3>

</div>

}

</div>

)

}

export default AICoach