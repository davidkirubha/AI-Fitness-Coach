import {useState} from "react"

import axios from "axios"

function Register({changePage}) {

const [name,setName]=useState("")

const [email,setEmail]=useState("")

const [password,setPassword]=useState("")

const registerUser=async()=>{

await axios.post(

`${import.meta.env.VITE_API_URL}/api/auth/register`,

{

name,
email,
password

}

)

alert("User Registered")

changePage()

}

return(

<div className="login">

<h1>Register</h1>

<input
type="text"
placeholder="Enter Name"

onChange={(e)=>setName(e.target.value)}

/>

<br/><br/>

<input
type="email"
placeholder="Enter Email"

onChange={(e)=>setEmail(e.target.value)}

/>

<br/><br/>

<input
type="password"
placeholder="Enter Password"

onChange={(e)=>setPassword(e.target.value)}

/>

<br/><br/>

<button onClick={registerUser}>

Register

</button>

<p>

Already have account?

<span onClick={changePage}>

 Login

</span>

</p>

</div>

)

}

export default Register