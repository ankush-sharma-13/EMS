import React from 'react'
import { useState } from 'react'

const Login = ({handleLogin}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email,password)
    setEmail("")
    setPassword("")
  }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 border-emerald-600 p-20 rounded-xl'>
        <form onSubmit={(e) => {
          submitHandler(e)
        }}
          className='flex flex-col items-center justify-center'>
          <input value={email} onChange={(e) => {
            setEmail(e.target.value)
          }}
            required className='border-2 border-emerald-600 rounded-full py-3 px-5 text-xl outline-none bg-transparent placeholder:text-gray-400' type="email" placeholder='Enter your email' />
          <input value={password} onChange={(e) => {
            setPassword(e.target.value)
          }}
            required className='border-2 border-emerald-600 rounded-full py-3 px-5 text-xl outline-none bg-transparent placeholder:text-gray-400 mt-4' type="password" placeholder='Enter password' />
          <button className='mt-7 w-full  hover:bg-emerald-700 font-semibold bg-emerald-600 rounded-full px-8 py-2 text-xl text-white outline-none placeholder:text-white'>Log in</button>
        </form>
      </div>
        
    </div>
  )
}

export default Login
