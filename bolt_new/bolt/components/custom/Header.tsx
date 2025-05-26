
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import Colors from '@/data/Colors'

type Props = {}

export default function Header({}: Props) {
  return (
    <div className='p-4 flex justify-between items-center '>
        <Image src="/logo.png" alt='Logo' width={70} height={40}/>
        <div className='flex gap-4'>
            <Button variant="ghost">
                SignIn
            </Button>

            <Button style={{backgroundColor: Colors.BLUE}} className='flex items-center gap-2'>
                Get Started
            </Button>
        </div>
    </div>
  )
}