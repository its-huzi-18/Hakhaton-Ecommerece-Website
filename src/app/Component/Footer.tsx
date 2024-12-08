import React from 'react'

const Footer = () => {
  return (
    <>
        <div className='h-[555px] flex flex-col justify-center items-center'>
<div className=' h-[400px] grid  grid-cols-4 font-medium'>
<div className=' text-[16px]  text-customGrey'>
    <p className='tracking-wide] mt-28 w-[285px] h-[72px]'>400 University Drive Suite 200 Coral Gables,<br />
    FL 33134 USA</p>
</div>
<div className='h-[312px] flex flex-col gap-8 items-center justify-evenly '>
    <h3 className='text-[16px]  text-customGrey'>Links</h3>
    <h3 className='text-[16px] '>Home</h3>
    <h3 className='text-[16px]'>Shop</h3>
    <h3 className='text-[16px]'>About</h3>
    <h3 className='text-[16px]'>Contact</h3>
</div>
<div className='flex flex-col w-[140px] h-[242px] justify-evenly gap-7 ml-10'>
<h3 className='text-[16px] text-customGrey'>Help</h3>
<h3 className='text-[16px]'>Payment Options</h3>
<h3 className='text-[16px]'>Returns</h3>
<h3 className='text-[16px]'>Privacy Policies</h3>
</div>
<div className='w-[286px] h-[101px] flex flex-col -space-x-8 justify-between gap-5'>
<h3 className='text-[16px]  text-customGrey'>Newsletter</h3>
<div className='flex gap-3'>
    <div className='border-b-2 border-black w-[193px]'>
    <input type="text" className=' focus-visible:clear-none w-[173px] h-[21px] pb-2' placeholder='Enter Your Email Address' />
    </div>
    <h3>
        <span className='border-b-2 border-black pb-1'>Subscribe</span>
    </h3>
</div>
</div>

</div>
<hr 
    className='ml-6 flex w-[1240px] justify-end '
    />
</div>
    <div className='ml-14 -mt-10'>
        <p className='txet-[16px]'>2022 Meubel House. All rights reverved</p>
    </div>
    </>
  )
}

export default Footer