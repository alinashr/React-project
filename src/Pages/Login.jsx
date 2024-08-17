import { Password } from "@mui/icons-material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
    let [user,setUser] = useState({})
    let Navigate= useNavigate()

    const users = useSelector(store=>store.userStore.users)

    const handleLogin=(e)=>{
        e.preventDefault()
        let userExist=users.find(us=>us.email===user.email)
        if(!userExist){
            alert("Email not registered")
        }

        else{
            let passwordMatch=user.password===userExist.password?true:false
            if(passwordMatch){
                localStorage.setItem("userInfo",JSON.stringify({username:userExist.username,email:userExist.email}))
                Navigate('/')

            }
            else{
                alert("Email and password do not match")
            }
        }
    }

    return (
    <>
      <form className="p-5 shadow-xl w-1/2 mx-auto my-5">
        <h1 className="text-center text-3xl underline">Login</h1>
        <label htmlFor="email">Email</label>

        <input
          type="email"
          id="email"
          className="border border-slate-700 w-full mb-3 px-3 py-2 rounded-md"
          onChange={(e) => setUser({...user,email:e.target.value})}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          className="border border-slate-700 w-full mb-3 px-3 py-2 rounded-md"
           onChange={(e) => setUser({...user,password:e.target.value})}
        />
        <button
          className="bg-blue-500 w-full py-2 rounded-md"
          onClick={handleLogin}
        >
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
