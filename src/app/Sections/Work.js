'use client'

import React from 'react'
import CabinetTech from '../Components/CabinetTech'
import FilterCarosel from '../Components/FilterCarosel'
function Work() {
  return (
    <div className='W_Parent'>
      <div className='W_Child1'>
        <img className="W_LeftImage" src="/Assets/Work/illumination.png"/>
          <p className='W_Caption'>MY WORK CABINET</p>
        <img className="W_RightImage" src="/Assets/Work/illumination.png"/>
      </div>
      <div className='W_Child2'>
          <CabinetTech/>
      </div>
      <div className='W_Child3'>
          <FilterCarosel/>
      </div>
    </div>
  )
}

export default Work