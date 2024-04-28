'use client'

import Link from 'next/link'
import React from 'react'

function NavBar() {
  return (
    <div className='Nav_Parent'>
        <div className='Nav_Item'><Link href="#hero" >Home</Link></div>
        <div className='Nav_Item'><Link href="#about" >About</Link></div>
        <div className='Nav_Item'><Link href="#work">Work</Link></div>
        <div className='Nav_Item'><Link href="#contact">Contact</Link></div>
    </div>
  )
}

export default NavBar