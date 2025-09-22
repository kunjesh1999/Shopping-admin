import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
    <div className='sidebar fixed top-0 left-0 bg-[#fff] w-[18%] h-full border-r border-[rgba(0,0,0,0.1)] py-2 px-4'>
  <div className='py-2 w-full '>
  <Link to="/">
<img src='\img\_logo.jpg'  alt='_logo' className='w-[170px] '/>
  </Link>
  </div>
      </div>

       <ul>
        <li><Button className='w-full !capitalize !justify-start'>Dashboard</Button></li>
       </ul>
     </>
  )
}

export default Sidebar
