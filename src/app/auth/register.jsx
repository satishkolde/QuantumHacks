"use client"

import React,{ useState } from 'react'
import axios from 'axios'
import { redirect } from 'next/dist/server/api-utils'
import { useRouter } from 'next/navigation'

 
const RegisterPage = () => {
   const [name,setName] = useState('')
   const [email,setEmail] = useState('')
   const [password,setPassword] = useState('')
   const formData = new FormData()
   const router = useRouter()
   
   const regis = async ()=>{
    formData.append('name',name)
    formData.append('email',email)
    formData.append('password',password)
    fetch('/api/register', {
        method:'POST',
    body: formData
  })
  .then(async (response) => {
    const data = await response.json();
    console.log(data)
    if(data.sucess == "1"){
        router.push("/")
    }else{
        console.log("Something happend")
    }
  });
   }
  return (
    <div>
      <input type="text" name="email" value={email} onChange={e =>{setEmail(e.target.value)}} />
      <input type="text" name="name" value={name} onChange={e =>{setName(e.target.value)}} />
      <input type="password" name="password" value={password} onChange={e =>{setPassword(e.target.value)}} />
      <button onClick={regis} >Submit</button>
    </div>
  )
}
 
export default RegisterPage