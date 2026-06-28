import {useState} from "react"

import axios from "axios"

function Login({changePage,goDashboard}){

const [email,setEmail]=useState("")

const [password,setPassword]=useState("")

const loginUser=async()=>{

const result=await axios.post(

`${import.meta.env.VITE_API_URL}/api/auth/login`,

{

email,
password

}

)

if(result.data.message==="Login Success"){

goDashboard()

}

else{

alert("Invalid User")

}

}

return(

<div className="login">

<h1>Login</h1>

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

<button onClick={loginUser}>

Login

</button>

<p>

Don't have account?

<span onClick={changePage}>

 Register

</span>

</p>

</div>

)

}

export default Login