"use client"
import { MessagesContext } from '@/context/MessagesContext'
import { UserDetailContext } from '@/context/UserDetailContext'
import Colors from '@/data/Colors'
import Lookup from '@/data/Lookup'
import { on } from 'events'
import { ArrowRight, Link } from 'lucide-react'
import React, { useContext, useState } from 'react'

type Props = {}

export default function Hero({}: Props) {
    const[userInput, setUserInput] = useState<string | undefined>();
    const [messages, setMessages] = useContext(MessagesContext);
    const [userDetail, setUserDetail] = useContext(UserDetailContext);       
    const onGenerate = (input) => {
        if(!userDetail?.name ){
            return;
        }
        setMessages({
            role: 'user',
            content: input
        })
    }
  return (
    <div className='flex flex-col items-center mt-30 xl:mt-52 gap-2'>
        <h2 className='font-bold text-4xl text-center mb-4'>{Lookup.HERO_HEADING}</h2>
        <p className='text-gray-400 font-medium'>{Lookup.HERO_DESC}</p>

        <div className="p-5 border rounded-xl max-w-xl w-full mt-3"
        style={{backgroundColor: Colors.BACKGROUND}}>
            <div className='flex gap-2 '>
                <textarea placeholder={Lookup.INPUT_PLACEHOLDER}
                onChange={(e) => setUserInput(e.target.value)}
                value={userInput}   
                className='outline-none bg-transparent w-full h-32 max-h-56 resize-none'></textarea>
                {userInput &&<ArrowRight
                onClick={() => onGenerate(userInput)}
                className='pl-3 bg-blue-500 p-2 h-10 w-10 rounded cursor-pointer' />}      
            </div>
            <div>
                <Link className='h-5 w-5'></Link>
            </div>
        </div>
        <div className='flex flex-wrap max-w-2xl justify-center gap-4 mt-5 '>
            {Lookup.SUGGSTIONS.map((suggestion, index) => (
                <h2 
                onClick={() => onGenerate(suggestion)}  
                className='mt-1 p-1 p-x-2 border rounded-full text-sm text-gray-400 hover:text-white cursor-pointer'
                key={index}>{suggestion}</h2>
            ))}
        </div>
    </div>
  )
}