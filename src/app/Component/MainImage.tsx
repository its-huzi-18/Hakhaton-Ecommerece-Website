import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface ImageTittle{
    tittle:string;
}

const MainImage:React.FC<ImageTittle> = ({tittle}) => {
  return (
    <div className='h-[316px] flex justify-center items-center'>
        <Image
        className='absolute '
        src={'/Images/Rectangle 1.png'}
        width={1440}
        height={316}
        alt=''
        />
    <div className='flex flex-col gap-2 z-10'>
<div className='flex flex-col justify-center items-center w-[124px] h-[132px]'>
    <Image
    src={'/Images/logo.png'}
    width={77}
    height={77}
    alt='logo'
     />
     <h2 className='text-[48px] font-medium'>
{tittle}
     </h2>
     <div className='w-[121px] h-[24px] flex gap-2'> 
     <Link  href = "/" className='font-medium'> Home
     </Link>/
     <Link  href = "/" className='font-light'> {tittle}
     </Link>

     </div>
</div>
<div className='w-[121px] h-[24px]'></div>
    </div>

    </div>
  )
}

export default MainImage