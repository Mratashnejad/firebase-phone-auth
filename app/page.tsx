'use client'
import React from 'react';
import Login from './login'
import {getAuth , onAuthStateChanged } from "firebase/auth"
import {app} from "./config"
import {useRouter} from "next/navigation"
import {useEffect} from "react"
export default function Home() {

  const router = useRouter();
  const auth = getAuth(app);

  useEffect (()=>{
    onAuthStateChanged(auth,(user) =>{
      if (user){
        router.push('./dashboard')
      }
    });
  },[auth , router])

  return ( 
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Firebase Phone Authentication
      </h1>
      <p className="text-center text-gray-600 mb-6">
        Please enter your phone number with + and country code to authenticate.
        <br/>example : +322 3221234
      </p>
      <div className="border border-gray-300 rounded-md p-4">
        <Login />
      </div>
    </div>
  </div>
  )
}
