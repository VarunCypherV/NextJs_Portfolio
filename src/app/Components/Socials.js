'use client'

import Link from 'next/link'
import React from 'react'

function Socials() {
  return (
    <div className="SocialParent">
      <div className="SocialChild"><Link href=""><img src="/Assets/Footer/Discord.png"/></Link></div>
      <div className="SocialChild"><Link href=""><img src="/Assets/Footer/Github.png"/></Link></div>
      <div className="SocialChild"><Link href=""><img src="/Assets/Footer/LinkedIn.png"/></Link></div>
      <div className="SocialChild"><Link href=""><img src="/Assets/Footer/Instagram.png"/></Link></div>
    </div>
  )
}

export default Socials