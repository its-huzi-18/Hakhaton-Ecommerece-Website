import React from 'react'
import MainImage from '../Component/MainImage'
import Features from '../Component/Features'

function page() {
  return (
    <div>
        <MainImage 
        tittle='Account'
        />
            <div className='flex justify-end h-[550px] items-center'>
        <div className='grid grid-cols-2'>

            <div className='w-[608px]  '>
         <div className='flex flex-col gap-8'>
<h1 className='text-[36px] font-semibold'>Log In</h1>
<div>
<label htmlFor="username or email" className='font-medium '>Username or email address</label> 
<input type="text" className='rounded-[4px] w-[423px] h-[75px] border-[2px] border-black/40 mt-4' />
</div>
<div className='flex flex-col'>
<label htmlFor="password" className='font-medium'>Password</label>
<input type="password" className='rounded-[4px] w-[423px] h-[75px] border-[2px] border-black/40 mt-4' />
</div>
<div className='flex items-center gap-3'>
    <input type="checkbox" name="Remember me" id="Remember me" className='w-[30px] h-[27px] border-[2px] border-[#9F9F9F]'/>
    <label htmlFor="Remember me">Remember me</label>
</div>
<div className='flex items-center gap-5'>
<button className='rounded-lg w-[215px] h-[64px] border-black/70 border-[2px] text-[20px]'>Log In</button>
<p className='font-light text-black/80 cursor-pointer'>Lost Your Password?</p>
</div>

         </div>
            </div>
            <div className='w-[608px]  '>
            <div className='flex flex-col gap-8'>
<h1 className='text-[36px] font-semibold'>Register</h1>
<div className='flex flex-col'>
<label htmlFor="Email address" className='font-medium'>Email address</label>
<input type="text" className='rounded-[4px] w-[423px] h-[75px] border-[2px] border-black/40 mt-4' />
</div>
<div className='w-[453px] font-light text-black/80'>
A link to set a new password will be sent to your email address.
</div>
<div className='w-[453px] '>
<p className='font-light text-black/80'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our </p>
<b>privacy policy.</b>
</div>
<button className='rounded-lg w-[215px] h-[64px] border-black/70 border-[2px] text-[20px] mt-4'>Register</button>

         </div>
            </div>

            </div>
        </div>
        <Features />
    </div>
  )
}

export default page