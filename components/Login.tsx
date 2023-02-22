"use client"
import {signIn} from 'next-auth/react'
import {Logo} from '../assets/index';
import Image from "next/image";

function Login () {
    return (
<div className='bg-[#11a37F] h-screen flex flex-col items-center justify-center text-center'>
    <Image src={Logo} width={300} height={300} alt='logo' />
    <button 
    onClick={() => signIn("google")} 
    className='text-black font-bold text-3xl animate-pulse p-6'
    >
        Sign In to use ChatGPT
    </button>
</div>
    )
}

export default Login;