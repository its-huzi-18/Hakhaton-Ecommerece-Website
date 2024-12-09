import Image from 'next/image'
import React from 'react'

function ProductsItems() {
  return (
    <>
<div className='  flex gap-5 h-[397px]  items-center'>
<div className='flex flex-col w-[287px] '>
<Image 
src={'/Images/guestCaoch.png'}
width={287}
height={287}
alt=''
/>
<div className=' w-[212px] h-[96px] flex flex-col'>
<h3 className='font-medium text-[16px] w-[212px] h-[48px]'>Trenton modular sofa_3</h3>
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

    </>
  )
}

export default ProductsItems