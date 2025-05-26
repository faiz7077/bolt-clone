import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import Colors from '@/data/Colors'
import { Ghost } from 'lucide-react'

function Header() {
  return (
   
    <div className="p-4 flex justify-between items-center ">
        <Image src="/logo.png" width={70} height={70} alt="Logo"/>
        
        <div className="flex items-center gap-4">
            
            <Button variant={Ghost} >SignIn</Button>
            <Button  className="text-black">Get Started</Button>
        </div>
    </div>
    
  )
}

export default Header