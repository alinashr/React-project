

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Register = () => {
    let [username,setUsername] = useState('')
    let [email,setEmail]=useState('')
    let [password,setPassword]=useState('')
    const dispatch=useDispatch()
    let users=useSelector(store=>store.userStore.users)

    const handleRegister=(e)=>{
        e.preventDefault()
        let usernameExists = users.find(user=>user.username===username)
        let emailExists = users.find(user=>user.email===email)
        if(usernameExists || emailExists){
            alert("Username not available or email already registered")
        }

        else{
            dispatch({type:"REGISTER",payload:{username,email,password}})
            alert("User Registered Successfully")
        }
    }
  
    return (
    <div>
      <form className='p-5 shadow-xl w-1/2 mx-auto my-5'>
      <h1 className='text-center text-3xl underline'>Register</h1>
        <label htmlFor="username">Username</label>
        <input type="text" id='username' className='border border-slate-700 w-full mb-3 px-3 py-2 rounded-md' onChange={e=>setUsername(e.target.value)}/>
        <label htmlFor="email">Email</label>
        <input type="email" id='email' className='border border-slate-700 w-full mb-3 px-3 py-2 rounded-md' onChange={e=>setEmail(e.target.value)}/>
        <label htmlFor="pwd">Password</label>
        <input type="password" id='pwd' className='border border-slate-700 w-full mb-3 px-3 py-2 rounded-md' onChange={e=>setPassword(e.target.value)} />
        <button className='bg-blue-500 w-full py-2 rounded-md' onClick={handleRegister}>Submit</button>
      </form>
    </div>
  )
}
export default Register
