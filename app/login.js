'use client'
import React , { useState , useEffect} from 'react';
import {getAuth , RecaptchaVerifier , signInWithPhoneNumber } from 'firebase/auth'
import {app} from './config'
import { useRouter } from 'next/navigation';



export default function Login(){
    const [phoneNumber , setPhoneNumber] = useState('')
    const [otp , setOtp] = useState('')
    const [confirmationResult , setConfirmationResult] = useState(null)
    const [otpSent , setOtpSent] = useState(false)

    const auth = getAuth(app);
    const router = useRouter();

    useEffect(()=>{
// Initialize RecaptchaVerifier when 'auth' changes
        window.recaptchaVerifier = new RecaptchaVerifier(auth,"recaptcha-container", {
            'size':'normal',
            'callback':(response)=>{},
            // Handle Recaptcha callback if needed
            'expired-callback': ()=>{},
            // Handle Recaptcha expiration if needed
        });
         // Cleanup function for RecaptchaVerifier if you want you can add 
            //return () => {
            //window.recaptchaVerifier.clear();

    },[auth]);// Run this effect when 'auth' changes

    const handlePhoneNumberChange = (e)=>{
        setPhoneNumber(e.target.value);
    };

    const handleOTPChange = (e)=>{
        setOtp(e.target.value);
    }

    const handleSendOtp = async()=>{
        try{
            const formattedPhoneNumber = `+${phoneNumber.replace(/\D/g,'')}`;
            const confirmation = await signInWithPhoneNumber(auth,formattedPhoneNumber,window.recaptchaVerifier)
            setConfirmationResult(confirmation);
            setOtpSent(true);
            setPhoneNumber('');
            alert('OTP has been sent');

        }catch(error){
            console.error(error)
        }
    };

    const handleOTPSubmit = async()=>{
        try{
            await confirmationResult.confirm(otp)
            setOtp('');
            router.push('/dashboard')

        }catch(error){
            console.error(error)
        }
    };

    return(
        <div className="flex flex-col items-center justify-center space-y-4">
      {!otpSent && (
        <div id="recaptcha-container" className="w-full"></div>
      )}

      <input
        type="tel"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        placeholder="Enter Phone Number with Country Code"
        className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring focus:border-blue-500"
      />

      {otpSent && (
        <input
          type="text"
          value={otp}
          onChange={handleOTPChange}
          placeholder="Enter OTP"
          className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring focus:border-blue-500"
        />
      )}

      <button
        onClick={otpSent ? handleOTPSubmit : handleSendOtp}
        className={`w-full bg-${otpSent ? 'green' : 'blue'}-500 text-white py-3 rounded-md`}
        style={{ backgroundColor: otpSent ? 'green' : 'blue' }}
      >
        {otpSent ? 'Submit OTP' : 'Send OTP'}
      </button>
    </div>

    )


}