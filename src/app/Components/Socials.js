'use client'

import Link from 'next/link'
import React from 'react'

function Socials() {
  return (
    <div className="SocialParent">
      <div className="SocialChild"><Link href="https://discord.gg/5PFnXvZyHR"><img src="/Assets/Footer/Discord.png"/></Link></div>
      <div className="SocialChild"><Link href="https://github.com/VarunCypherV"><img src="/Assets/Footer/Github.png"/></Link></div>
      <div className="SocialChild"><Link href="www.linkedin.com/in/varunvetri"><img src="/Assets/Footer/LinkedIn.png"/></Link></div>
      <div className="SocialChild"><Link href="https://www.instagram.com/dr_instanomics?igsh=MWUzbTZwdGkwc3BnbA=="><img src="/Assets/Footer/Instagram.png"/></Link></div>
    </div>
  )
}

export default Socials