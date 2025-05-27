
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import Colors from '@/data/Colors'

type Props = {}

export default function Header({}: Props) {
  return (
    <div className='p-4 flex justify-between items-center '>
        <Image className="cursor-pointer" src="/logo.png" alt='Logo' width={70} height={40}/>
        <div className='flex gap-4'>
            <Button variant="ghost" className='cursor-pointer'>
                SignIn
            </Button>

            <Button style={{backgroundColor: Colors.BLUE}} className='flex items-center gap-2 cursor-pointer'>
                Get Started
            </Button>
        </div>
    </div>
  )
}