import Image from 'next/image'
import React from 'react'
import { IoMdTime } from 'react-icons/io'
import { LuCalendar } from 'react-icons/lu'
import ProductsItems from '../Component/ProductsItems'

const page = () => {

  return (
    <>
    <div className=' md:h-[750px] overflow-hidden bg-mainColor -z-10 justify-end flex items-center'>
<div className=' w-[440px] ml-10 md:ml-0 md:h-[276px] '>
<h1 className='md:text-[64px]  font-[medium]'>Rocket single seater</h1>
<div className='md:w-[121px] h-[49px]  md:text-[24px] font-medium'>
    <span className='border-b-2  border-black pb-2'>Shop Now</span>
    
    </div>
</div>
<div className='relative md:left-10 '>
<Image className='md:w-[853px] md:h-[1000px]'
src={'/Images/caoch.png'}
width={853}
height={1000}
alt='caoch'
/>
</div>
</div>
<div className='pt-12 pb-12 md:pb-0 relative md:h-[642px] flex justify-around gap-6 bg-secondBg'>
    <div className=''>
        <Image
        className='' 
        src={'/Images/table.png'}
        height={562}
        width={605}
        alt='table'
         />
         <div className='md:absolute top-[450px] left-[140px] items-center  flex flex-col gap-5'>
            <h2 className='md:text-[36px] font-medium'>Side table</h2>
            <h4 className='md:text-[24px] '>
                <span className='border-b-2 border-black'> View More</span>
               
                </h4>
         </div>
    </div>
    <div className='w-[605px] md:h-[562px] relative right-8'>
        <Image 
        src={'/Images/Cloud sofa.png'}
        width={605}
        height={562}
        alt='caoch'
        />
          <div className='md:absolute top-[410px] left-[140px] items-center flex flex-col gap-5'>
            <h2 className='md:text-[36px] font-medium'>Side table</h2>
            <h4 className='md:text-[24px] '>
                <span className='border-b-2 border-black'> View More</span>
               
                </h4>
         </div>
    </div>
</div>
<div className= 'flex flex-col justify-evenly  md:h-[757px]  bg-white'>
<div className='flex flex-col items-center'>
    <div className='flex flex-col gap-4  items-center mt-10 md:-mt-10 mb-8'>

<h2 className='text-[33px] md:text-[36px] font-medium'>Top Picks For You</h2>
<h4 className='md:text-[16px] text-[13px] ml-4 md:ml-0 font-medium text-customGrey'>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</h4>
    </div>
<ProductsItems />
</div>
<div className='md:-mt-10  mb-10 flex justify-center '>
                <h3 className=' text-[24px] border-b-2  border-black'> View More</h3>
               
                </div>
</div>
<div className=' md:mt-0 h-[600px] md:h-[799px] relative bg-customBg '>
<Image
src={'/Images/Asgaard sofa 1.png'}
width={984}
height={799}
alt='Asgaard sofa 1'
/>
<div className='w-[331px] h-[205px] absolute top:[60%] md:top-[40%] right-5 flex flex-col items-center gap-5'>
    <h3 className='text-[24px] font-medium '>New Arrivals</h3>
    <h1 className='text-[48px] font-bold -mt-6'>Asgaard sofa</h1>
    <button className='w-[255px] h-[64px] border-[1px] border-black'>
    Order Now
    </button>
</div>
</div>
<div className='  md:h-[944px] flex flex-col items-center justify-evenly '>
<div className='  mt-4 md:mt-0 md:h-[91px] flex flex-col items-center md:gap-3'>
<h2 className='font-medium text-[36px]'>Our Blogs</h2>
<p className='font-medium my-5 md:my-0 ml-4 md:ml-0 text-[12px] md:text-[16px] text-customGrey'>Find a bright ideal to suit your taste with our great selection</p>
</div>
<div className=' flex flex-col px-4 md:px-0 md:w-[1240px] '>
  <div className=' md:h-[555px] flex flex-col md:flex-row gap-6'>
    <div className='flex flex-col w-full sm:w-[350px] md:w-[393px]'>
      <Image 
        src={'/Images/Rectangle 13.png'}
        width={393}
        height={393}
        alt='Rectangle 13'
        className='rounded-[4px] w-full' // Add w-full to ensure it scales down on smaller screens
      />
      <div className='md:w-[339px]  md:h-[129px] flex flex-col gap-4 justify-evenly'>
        <h2 className='text-[20px] mt-4 -mb-2 ml-4 md:ml-0'>Going all-in with millennial design</h2>
        <h1 className='text-[24px] text-center mb-2'>
          <span className='font-medium border-b-2 border-black pb-2'>Read More</span>
        </h1>
        <div className='flex items-center h-[24px] justify-center'>
          <div className='flex gap-4'>
            <div className='flex gap-2 items-center'>
              <IoMdTime className='text-[24px]' />
              <h4 className='text-[16px]'> 5 min</h4>
            </div>
            <div className='flex gap-2'>
              <LuCalendar className='text-[24px]' />
              <span className='text-[16px]'>12th Oct 2022</span>
            </div>  
          </div>
        </div>
      </div>
    </div>

    <div className='flex flex-col w-full sm:w-[350px] md:w-[393px] h-auto'>
      <Image 
        src={'/Images/Rectangle 14.png'}
        width={393}
        height={393}
        alt='Rectangle 14'
        className='rounded-[4px] w-full' // Add w-full here too
      />
      <div className='w-[339px] md:h-[129px] flex flex-col gap-4 justify-evenly'>
        <h2 className='text-[20px] mt-4 -mb-2'>Going all-in with millennial design</h2>
        <h1 className='text-[24px] text-center mb-2'>
          <span className='font-medium border-b-2 border-black pb-2'>Read More</span>
        </h1>
        <div className='flex items-center h-[24px] justify-center'>
          <div className='flex gap-4'>
            <div className='flex gap-2 items-center'>
              <IoMdTime className='text-[24px]' />
              <h4 className='text-[16px]'> 5 min</h4>
            </div>
            <div className='flex gap-2'>
              <LuCalendar className='text-[24px]' />
              <span className='text-[16px]'>12th Oct 2022</span>
            </div>  
          </div>
        </div>
      </div>
    </div>

    <div className='flex flex-col w-full sm:w-[350px] md:w-[393px] h-auto'>
      <Image 
        src={'/Images/Rectangle 15.png'}
        width={393}
        height={393}
        alt='Rectangle 15'
        className='rounded-[4px] w-full' // Add w-full to scale image properly
      />
      <div className='w-[339px] mb-6 md:mb-0 md:h-[129px] flex flex-col gap-4 justify-evenly'>
        <h2 className='text-[20px] mt-4 md:-mb-2'>Going all-in with millennial design</h2>
        <h1 className='text-[24px] text-center mb-2'>
          <span className='font-medium border-b-2 border-black pb-2'>Read More</span>
        </h1>
        <div className='flex items-center h-[24px] justify-center'>
          <div className='flex gap-4'>
            <div className='flex gap-2 items-center'>
              <IoMdTime className='text-[24px]' />
              <h4 className='text-[16px]'> 5 min</h4>
            </div>
            <div className='flex gap-2'>
              <LuCalendar className='text-[24px]' />
              <span className='text-[16px]'>12th Oct 2022</span>
            </div>  
          </div>
        </div>
      </div>
    </div>

  </div>

</div>

</div>
<div className='flex justify-center mb-10 md:-mt-10'>
<h1 className='font-medium text-[24px] text-center mb-2'>
        <span className='border-b-2 border-black pb-3'>View All Post</span>
    </h1>

</div>
<div className='flex justify-center items-center  h-[445px] '>
    <div className=' absolute gap-3 flex flex-col items-center'>
        <h1 className='font-bold text-[40px] md:text-[60px]'>Our Instagram</h1>
        <h3 className='text-[20px]'>Follow our store on Instagram</h3>
        <button className='mt-2 shadow-lg shadow-black/40 w-[200px] md:w-[255px] h-[55px] md:h-[64px] bg-secondBg rounded-full'>Follow Us</button>
    </div>
<Image
className='md:h-[440px] mt-2  h-[440px]' 
src={'/Images/Group 43.png'}
width={1440}
height={450}
alt='Group 43'
/>
</div>
</>
  )
}

export default page