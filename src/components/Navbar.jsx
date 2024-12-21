import React from 'react'
import { Link } from 'react-router'
import {House} from "lucide-react"

const Navbar = (Props) => {
  return (
   <nav className='w-full bg-black py-6'>
    <div className='flex mx-auto justify-between'>
        <Link to="/" className='px-5'>
            <House size={35} color="#ffffff" strokeWidth={1.5} />
        </Link>
        <div className='text-white text-3xl flex flex-grow justify-center items-center'>
            <h1>{Props.title}</h1>
        </div>
    </div>
   </nav>
  )
}

export default Navbar