import Link from 'next/link'
import React from 'react'
import { BsPerson } from 'react-icons/bs'
import { CiSearch } from 'react-icons/ci'
import { IoCartOutline, IoHeartOutline } from 'react-icons/io5'

const navBar = [
    {name:'Home',link:'/'},
    {name:'Shop',link:'/Shop'},
    {name:'About',link:'/About'},
    {name:'Contact',link:'/Contact'},
]


const Header  =() => {
  return (
    <div>
    <nav className={`justify-end flex h-[100px] bg-mainBg items-center pr-16`}>
        <ul className='flex w-[430px] h-[24px] gap-8 font-medium'>
        {navBar.map((navItem, index) => (
            <li key={index}>
              <Link href={navItem.link} className="hover:text-secondaryColor">
                {navItem.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className='flex gap-6'>
          <Link href={'/Account'}>
        <BsPerson  className='text-[24px]'/>
          </Link>
        <CiSearch  className='text-[24px]'/>
        <Link href={'/asgaard-sofa'}>
        <IoHeartOutline  className='text-[24px]'/>
         </Link> 

        <Link href = '/Cart'>
        <IoCartOutline  className='text-[24px]'/>
        </Link>
        </div>
    </nav>
    </div>
  )
}

export default Header