import MainImage from '@/app/Component/MainImage'
import React from 'react'
import Features from '../Component/Features';
import Image from 'next/image';
import Pagination from '../Component/Pagination';
import ProductDetails from '../Component/ProductDetails';



const Shop = () => {
  return (
    <>
    <div>
        <MainImage 
        tittle='Shop'
        />
          <div className="h-[100px]  w-full justify-around bg-[#F9F1E7] flex flex-col sm:flex-row items-center  sm:p-4">
                <div className="flex flex-wrap sm:justify-evenly  sm:space-x-8 ">
                    <Image
                        src="/Images/dotted-line.svg"
                        alt="dotted-line"
                        width={25}
                        height={25}
                    />
                    <h3 className="text-[14px] sm:text-[18px] md:text-[20px] font-semibold">Filter</h3>
                    <Image
                        src="/Images/four-dot.svg"
                        alt="four-dot"
                        width={25}
                        height={25}
                        
                    />
                                        <Image
                        src="/Images/square-line.svg"
                        alt="square-line"
                        width={25}
                        height={25}
                    />
                                        <div className="flex items-center gap-2 text-xs sm:text-sm md:text-base  h-[37px]">
                    
                                          <h3 className='border-l-2 border-black/30 pl-4 '>Showing 1–16 of 32 results</h3></div>

                </div>
                <div className="flex flex-wrap items-center justify-between sm:space-x-4 sm:mt-0 ">
                  <div className='flex gap-2 w-[126px] h-[55px] items-center'>
                  <h2 className="text-xs sm:text-sm md:text-base">Show</h2>
                  <div className="w-[45px] sm:w-[55px] h-[45px] sm:h-[55px] bg-white flex items-center justify-center ">
                        <h3 className="text-[#9F9F9F] text-xs sm:text-sm md:text-base">16</h3>
                    </div>

                  </div>
        
                  <div className='w-[288px] items-center h-[55px] flex gap-2'>
<h3 className="text-xs sm:text-sm md:text-base">Short by</h3>
<div className=" md:w-[188px] sm:w-[55px] bg-white h-[55px] rounded-[4px] sm:h-[55px]  flex items-center justify-center ">
                        <h3 className="text-[#9F9F9F] text-xs sm:text-sm md:text-base ">Default</h3>
                    </div>
</div>       
                </div>
            
            </div>
            <ProductDetails />
            <div className='my-10'>
         <Pagination />   
            </div>
    </div>
    <Features />
        </>
  )
}

export default Shop;