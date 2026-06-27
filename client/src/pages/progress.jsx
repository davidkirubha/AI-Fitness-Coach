import {useState} from "react"

function Progress(){

const [height,setHeight]=useState("")
const [weight,setWeight]=useState("")

const [bmi,setBmi]=useState("")
const [category,setCategory]=useState("")
const [message,setMessage]=useState("")

const calculateBMI=()=>{

const h=height/100

const value=(weight/(h*h)).toFixed(2)

setBmi(value)

if(value<18.5){

setCategory("Underweight")

setMessage(
"You should increase healthy calories."
)

}

else if(value<=24.9){

setCategory("Normal Weight")

setMessage(
"Great! You are in healthy range."
)

}

else if(value<=29.9){

setCategory("Overweight")

setMessage(
"Exercise and balanced diet recommended."
)

}

else{

setCategory("Obesity")

setMessage(
"Consult doctor and improve lifestyle."
)

}

}

return(

<div className="bmiPage">

<h1 className="title">

💜 BMI Progress Tracker

</h1>

<p className="sub">

Calculate your BMI and see category

</p>

<div className="mainBox">

<div className="left">

<div className="card">

<h2>

Calculate BMI

</h2>

<input

placeholder="Height (cm)"

value={height}

onChange={(e)=>

setHeight(

e.target.value

)

}

/>

<input

placeholder="Weight (kg)"

value={weight}

onChange={(e)=>

setWeight(

e.target.value

)

}

/>

<button

onClick={calculateBMI}

>

Calculate BMI

</button>

</div>

{

bmi &&

<div className="card">

<h2>

Your Result

</h2>

<h1>

{bmi}

</h1>

<h3>

{category}

</h3>

<p>

{message}

</p>

</div>

}

<div className="card">

<h2>

BMI Categories

</h2>

<p>

🟦 Below 18.5 → Underweight

</p>

<p>

🟩 18.5–24.9 → Normal

</p>

<p>

🟧 25–29.9 → Overweight

</p>

<p>

🟥 30+ → Obesity

</p>

</div>

</div>

<div className="right">

<h2>

BMI Category Overview

</h2>

<div className="circle">

<div className="blue">

Below 18.5

<br/>

Underweight

</div>

<div className="green">

18.5-24.9

<br/>

Normal

</div>

<div className="orange">

25-29.9

<br/>

Overweight

</div>

<div className="red">

30+

<br/>

Obesity

</div>

</div>

<div className="info">

{message}

</div>

</div>

</div>

</div>

)

}

export default Progress