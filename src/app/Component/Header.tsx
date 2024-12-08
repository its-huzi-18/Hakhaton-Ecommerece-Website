import Link from 'next/link'
import React from 'react'
import { BsPerson } from 'react-icons/bs'
import { CiSearch } from 'react-icons/ci'
import { IoCartOutline, IoHeartOutline } from 'react-icons/io5'

const navBar = [
    {name:'Home',link:'/'},
    {name:'Shop',link:'/Shop'},
    {name:'About',link:''},
    {name:'Contact',link:''},
]
interface Header {
    bgHeader?:string,
}

const Header : React.FC<Header> =({bgHeader}) => {
  return (
    <div>
    <nav className={`justify-end flex h-[100px] bg-transparent items-center pr-16`}>
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
        <BsPerson  className='text-[24px]'/>
        <CiSearch  className='text-[24px]'/>
        <IoHeartOutline  className='text-[24px]'/>
        <Link href = '/Cart'>
        <IoCartOutline  className='text-[24px]'/>
        </Link>
        </div>
    </nav>
    </div>
  )
}

export default Header