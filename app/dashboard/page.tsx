'use client'
import {getAuth , signOut} from 'firebase/auth'
import {app} from '../config';// Check the path to your Firebase config
import {useRouter} from 'next/navigation'


export default function Dashboard() {
    const auth = getAuth(app);
    const router = useRouter();

    const handleLogout = async()=>{
      try{
        await signOut(auth);
        router.push('/');// Redirect to home page after logout
  
      }catch(error){
        console.error(error)
      }
    }

    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Dashboard</h1>
        <p className="text-center text-gray-600 mb-6">Welcome to your dashboard!</p>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-3 rounded-md shadow-md hover:bg-red-600 focus:outline-none"
        >
          LOG OUT
        </button>
      </div>
    </div>
    )
}