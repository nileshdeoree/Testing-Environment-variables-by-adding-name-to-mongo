import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='bg-pink-700 flex font-bold'>
      <div ><Link href={"/"}>Navbar</Link></div>
      <div className='px-10'><Link href={"/addname"}>Add Name</Link></div>
      <div className='px-10'><Link href={"/names"}>Names</Link></div>
    </div>
  )
}

export default Navbar