import { Button } from '@mui/material'
import React from 'react'
import { RiMenu2Line } from "react-icons/ri";

function Header() {
  return (
    <header className='w-full h-[50px] pl-52 bg-[#f1f1f1] flex items-center justify-between'>
    <div className="part1">
        <Button className="!w-[40px] !h-[40px] !rounded-full !min-w-[40px] !text-[rgba(0,0,0,0.8)]">
        <RiMenu2Line className='text-[18px] text-[rgba(0,0,0,0.8)]'/> 
        </Button>
    </div>

    <div className="part2 w-[40%] items-center justify-between">

    </div>
      
    </header>
  )
}

export default Header
