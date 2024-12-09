import Image from 'next/image'
import React from 'react'

const ProductDetails = () => {
    const Products = [
        {
            title:'Trenton modular sofa_3',
            price:'25,000.00',
            src:'/Images/guestCaoch.png',
            width:287,
            height:287,
            alt:'guestCaoch'        },
        {
            title:'Granite dining table with dining chair',
            price:'25,000.00',
            src:'/Images/Granite dining table.png',
            width:287,
            height:287,
            alt:'Granite dining table'        },
        {
            title:'Outdoor bar table and stool',
            price:'25,000.00',
            src:'/Images/Outdoor bar table.png',
            width:287,
            height:287,
            alt:'Outdoor bar table'        },
        {
            title:'Plain console with teak mirror',
            price:'25,000.00',
            src:'/Images/Plain console.png',
            width:287,
            height:287,
            alt:'Plain console'        },
        {
            title:'Grain coffee table',
            price:'Rs. 15,000.00',
            src:'/Images/Grain coffee table 1.png',
            width:287,
            height:287,
            alt:'Grain coffee table 1'        },
        {
            title:'Kent coffee table',
            price:'Rs. 225,000.00',
            src:'/Images/Kent coffee table 1.png',
            width:287,
            height:287,
            alt:'Kent coffee table 1'        },
        {
            title:'Round coffee table_color 2',
            price:'Rs. 251,000.00',
            src:'/Images/Round coffee table_color 2 1.png',
            width:287,
            height:287,
            alt:'Round coffee table_color 2 1'        },
        {
            title:'Reclaimed teak coffee table',
            price:'Rs. 25,200.00',
            src:'/Images/Reclaimed teak coffee table 1.png',
            width:287,
            height:287,
            alt:'Reclaimed teak coffee table 1'        },
        {
            title:'Plain console_',
            price:'Rs. 258,200.00',
            src:'/Images/Plain console_ 1.png',
            width:287,
            height:287,
            alt:'Plain console_ 1'        },
        {
            title:'Reclaimed teak Sideboard',
            price:'Rs. 20,000.00',
            src:'/Images/Reclaimed teak Sideboard 1.png',
            width:287,
            height:287,
            alt:'Plain console_ 1'        },
        {
            title:'SJP_0825 ',
            price:'Rs. 200,000.00',
            src:'/Images/SJP_0825  1.png',
            width:287,
            height:287,
            alt:'SJP_0825  1'        },
        {
            title:'Bella chair and table',
            price:'Rs. 100,000.00',
            src:'/Images/Bella chair and table 1.png',
            width:287,
            height:287,
            alt:'Bella chair and table 1'        },
        {
            title:'Granite square side table',
            price:'Rs. 258,800.00',
            src:'/Images/Granite square side table 2.png',
            width:287,
            height:287,
            alt:'Granite square side table 2'        },
        {
            title:'Asgaard sofa',
            price:'Rs. 250,000.00',
            src:'/Images/Asgaard sofa 1.png',
            width:287,
            height:287,
            alt:'Granite square side table 2'        },
        {
            title:'Maya sofa three seater',
            price:'Rs. 115,000.00',
            src:'/Images/Maya sofa three seater 1.png',
            width:287,
            height:287,
            alt:'Maya sofa three seater 1'        },
        {
            title:'Outdoor sofa set',
            price:'Rs. 244,000.00',
            src:'/Images/Outdoor sofa set 1.png',
            width:287,
            height:287,
            alt:'Outdoor sofa set 1'        },
      ]

  return (
    <div className='flex items-center justify-center flex-wrap'>
{Products.map((detail:any, i: number) => (
  <div  className='flex flex-col w-[287px]' key={i}>
  <Image 
src={detail.src}
width={detail.width}
height={detail.height}
alt={detail.alt}
/>
<div className=' w-[212px] h-[96px] flex flex-col -gap-4'>
<h3 className='font-medium text-[16px] w-[212px] h-[48px]'>{detail.title}</h3>
<h4 className=' h-[36px] font-medium text-[24px] '>{detail.price}</h4>
</div>
</div>

))}
    </div>
  )
}

export default ProductDetails