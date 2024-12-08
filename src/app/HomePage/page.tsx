import Image from 'next/image'
import React from 'react'
import { IoMdTime } from 'react-icons/io'
import { LuCalendar } from 'react-icons/lu'
import Footer from '../Component/Footer'

const page = () => {
  return (
    <>
    <div className='h-[750px] overflow-hidden bg-mainColor -z-10 justify-end flex items-center'>
<div className='w-[440px] h-[276px] '>
<h1 className='text-[64px] font-[medium]'>Rocket single seater</h1>
<div className='w-[121px] h-[49px] border-b-2 text-[24px] font-medium border-black'>Shop Now</div>
</div>
<div className='relative left-10 '>
<Image className='w-[853px] h-[1000px]'
src={'/Images/caoch.png'}
width={853}
height={1000}
alt='caoch'
/>
</div>
</div>
<div className='pt-12 relative h-[642px] flex justify-around gap-6 bg-secondBg'>
    <div className=''>
        <Image
        className='' 
        src={'/Images/table.png'}
        height={562}
        width={605}
        alt='table'
         />
         <div className='absolute top-[450px] left-[140px] flex flex-col gap-5'>
            <h2 className='text-[36px] font-medium'>Side table</h2>
            <h4 className='text-[24px] '>
                <span className='border-b-2 border-black'> View More</span>
               
                </h4>
         </div>
    </div>
    <div className='w-[605px] h-[562px] relative right-8'>
        <Image 
        src={'/Images/Cloud sofa.png'}
        width={605}
        height={562}
        alt='caoch'
        />
          <div className='absolute top-[410px] left-[140px] flex flex-col gap-5'>
            <h2 className='text-[36px] font-medium'>Side table</h2>
            <h4 className='text-[24px] '>
                <span className='border-b-2 border-black'> View More</span>
               
                </h4>
         </div>
    </div>
</div>
<div className= 'flex flex-col justify-evenly h-[757px]  bg-white'>
<div className='flex flex-col items-center'>
    <div className='flex flex-col gap-4 items-center -mt-10 mb-8'>

<h2 className='text-[36px] font-medium'>Top Picks For You</h2>
<h4 className='text-[16px] font-medium'>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</h4>
    </div>
<div className='  flex gap-5 h-[397px]  items-center'>
<div className='flex flex-col w-[287px] '>
<Image 
src={'/Images/guestCaoch.png'}
width={287}
height={287}
alt=''
/>
<div className=' w-[212px] h-[96px] flex flex-col'>
<h3 className='font-medium text-[16px] w-[212px] h-[48px]'>Outdoor bar table and stool</h3>
<h4 className='w-[158px] h-[36px] font-medium text-[24px]'>Rs. 25,000.00</h4>
</div>
</div>
<div className='flex flex-col w-[287px] '>
<Image 
src={'/Images/Granite dining table.png'}
width={287}
height={287}
alt=''
/>
<div className='w-[212px] h-[96px] flex flex-col'>
<h3 className='font-medium text-[16px] w-[212px] h-[48px]'>Granite dining table with dining chair</h3>
<h4 className='w-[158px] h-[36px] font-medium text-[24px]'>Rs. 25,000.00</h4>
</div>
</div>
<div className='flex flex-col w-[287px] '>
<Image 
src={'/Images/Outdoor bar table.png'}
width={287}
height={287}
alt=''
/>
<div className='w-[212px] h-[96px] flex flex-col'>
<h3 className='font-medium text-[16px] w-[212px] h-[48px]'>Outdoor bar table and stool</h3>
<h4 className='w-[158px] h-[36px] font-medium text-[24px]'>Rs. 25,000.00</h4>
</div>
</div>
<div className='flex flex-col w-[287px] '>
<Image 
src={'/Images/Plain console.png'}
width={287}
height={287}
alt=''
/>
<div className='w-[212px] h-[96px] flex flex-col'>
<h3 className='font-medium text-[16px] w-[212px] h-[48px]'>Plain console with teak mirror</h3>
<h4 className='w-[158px] h-[36px] font-medium text-[24px]'>Rs. 25,000.00</h4>
</div>
</div>
</div>
</div>
<div className='-mt-10 flex justify-center '>
                <h3 className=' text-[24px] border-b-2 border-black'> View More</h3>
               
                </div>
</div>
<div className='h-[799px] relative bg-customBg '>
<Image
src={'/Images/Asgaard sofa 1.png'}
width={984}
height={799}
alt='Asgaard sofa 1'
/>
<div className='w-[331px] h-[205px] absolute top-[40%] right-5 flex flex-col items-center gap-5'>
    <h3 className='text-[24px] font-medium '>New Arrivals</h3>
    <h1 className='text-[48px] font-bold -mt-6'>Asgaard sofa</h1>
    <button className='w-[255px] h-[64px] border-[1px] border-black'>
    Order Now
    </button>
</div>
</div>
<div className=' h-[944px] flex flex-col items-center justify-evenly '>
<div className='w-[479px] h-[91px] flex flex-col items-center gap-3'>
<h2 className='font-medium text-[36px]'>Our Blogs</h2>
<p className='font-medium text-[16px] text-customGrey'>Find a bright ideal to suit your taste with our great selection</p>
</div>
<div className='flex flex-col w-[1240px] h-[679px] '>
<div className='h-[555px] flex gap-6'>
<div className='flex flex-col w-[393px] h-[555px]'>
<Image 
src={'/Images/Rectangle 13.png'}
width={393}
height={393}
alt='Rectangle 13'
className='rounded-[4px]'
/>
<div className='w-[339px] h-[129px] flex flex-col gap-4 justify-evenly'>
<h2 className='text-[20px] mt-4 -mb-2'>Going all-in with millennial design</h2>

    <h1 className=' text-[24px] text-center mb-2'>
        <span className='font-medium border-b-2 border-black pb-2'>Read More</span>
    </h1>
<div className='flex items-center h-[24px] justify-center'>
    <div className='flex gap-4'>
<div className='flex gap-2 items-center'>
<IoMdTime
 className='text-[24px]'
/>
   <h4 className='text-[16px]'> 5 min</h4>
   </div>
 <div className='flex gap-2'>
 <LuCalendar 
 className='text-[24px]'
 />
<span className='text-[16px]'>12th Oct 2022</span>
    </div>  
    </div>
</div>
</div>
</div>
<div className='flex flex-col w-[393px] h-[555px]'>
<Image 
src={'/Images/Rectangle 14.png'}
width={393}
height={393}
alt='Rectangle 14'
className='rounded-[4px]'
/>
<div className='w-[339px] h-[129px] flex flex-col gap-4 justify-evenly'>
<h2 className='text-[20px] mt-4 -mb-2'>Going all-in with millennial design</h2>

    <h1 className=' text-[24px] text-center mb-2'>
        <span className='font-medium border-b-2 border-black pb-2'>Read More</span>
    </h1>
<div className='flex items-center h-[24px] justify-center'>
    <div className='flex gap-4'>
<div className='flex gap-2 items-center'>
<IoMdTime
 className='text-[24px]'
/>
   <h4 className='text-[16px]'> 5 min</h4>
   </div>
 <div className='flex gap-2'>
 <LuCalendar 
 className='text-[24px]'
 />
<span className='text-[16px]'>12th Oct 2022</span>
    </div>  
    </div>
</div>
</div>
</div>
<div className='flex flex-col w-[393px] h-[555px]'>
<Image 
src={'/Images/Rectangle 15.png'}
width={393}
height={393}
alt='Rectangle 15'
className='rounded-[4px]'
/>
<div className='w-[339px] h-[129px] flex flex-col gap-4 justify-evenly'>
<h2 className='text-[20px] mt-4 -mb-2'>Going all-in with millennial design</h2>

    <h1 className=' text-[24px] text-center mb-2'>
        <span className='font-medium border-b-2 border-black pb-2'>Read More</span>
    </h1>
<div className='flex items-center h-[24px] justify-center'>
    <div className='flex gap-4'>
<div className='flex gap-2 items-center'>
<IoMdTime
 className='text-[24px]'
/>
   <h4 className='text-[16px]'> 5 min</h4>
   </div>
 <div className='flex gap-2'>
 <LuCalendar 
 className='text-[24px]'
 />
<span className='text-[16px]'>12th Oct 2022</span>
    </div>  
    </div>
</div>
</div>
</div>

</div>
<div className='flex justify-center  mt-12'>
<h1 className='font-medium text-[24px] text-center mb-2'>
        <span className='border-b-2 border-black pb-3'>View All Post</span>
    </h1>

</div>
</div>
</div>
<div className='flex justify-center items-center h-[450px] '>
    <div className=' absolute gap-3 flex flex-col items-center'>
        <h1 className='font-bold text-[60px]'>Our Instagram</h1>
        <h3 className='text-[20px]'>Follow our store on Instagram</h3>
        <button className='mt-2 shadow-lg shadow-black/40 w-[255px] h-[64px] bg-secondBg rounded-full'>Follow Us</button>
    </div>
<Image 
src={'/Images/Group 43.png'}
width={1440}
height={450}
alt='Group 43'
/>
</div>
<Footer />
</>
  )
}

export default page